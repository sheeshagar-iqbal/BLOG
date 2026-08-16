import React from "react";
import { Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const ShowComment = ({ blog, account }) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/comment?comment=${blog._id}`)
      .then((res) => setComment(res.data))
      .catch((err) => console.log(err));
    console.log(blog._id);
  }, [blog._id]);
  return (
    <>
      <Box>
        {comment.map((comment) => (
          <div>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                mb: 2,
              }}
            >
              <PersonIcon
                sx={{
                  // padding:"20px",
                  background: "gray",
                  borderRadius: "100%",
                  color: "black",
                  width: "40px",
                  height: "40px",
                }}
              />
              <Typography variant="h5">{comment.username}</Typography>
            </Box>
            <Typography variant="h6">{comment.comment}</Typography>
          </div>
        ))}
      </Box>
    </>
  );
};

export default ShowComment;
