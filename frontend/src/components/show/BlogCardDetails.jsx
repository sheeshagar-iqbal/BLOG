import React, { useEffect, useState } from "react";
import { Box, Typography, Chip, CircularProgress } from "@mui/material";

import axios from "axios";
import { useParams } from "react-router-dom";

const BlogCardDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blog/${id}`)
      .then((res) => {
        console.log(res.data);

        setBlog(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!blog) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 10,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: "900px",
        margin: "50px auto",
        padding: "20px",
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={blog.img}
        alt={blog.title}
        sx={{
          width: "100%",
          height: "450px",
          objectFit: "cover",
          borderRadius: 3,
        }}
      />

      {/* Category + User */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 3,
        }}
      >
        <Chip label={blog.category} />

        <Typography color="text.secondary">@{blog.username}</Typography>
      </Box>

      {/* Title */}
      <Typography variant="h3" fontWeight="bold" sx={{ mt: 3 }}>
        {blog.title}
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          mt: 3,
          lineHeight: 1.8,
        }}
      >
        {blog.description}
      </Typography>
    </Box>
  );
};

export default BlogCardDetails;
