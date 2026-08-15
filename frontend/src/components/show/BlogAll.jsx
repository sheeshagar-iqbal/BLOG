import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import BlogCard from "./BlogCard";
import axios from "axios";

const BlogAll = () => {

  const [blogs,setBlogs]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/blog")
        .then((res) => setBlogs(res.data))
        .catch((err) => console.log(err));
  },[])
  return (
    <Box
      sx={{
        // display: "flex",
        // flexWrap: "wrap",
        // gap: 3,
        // justifyContent: "center",
        margin: "30px",
      }}
    >
      <Grid container spacing={2}>
      {blogs.map((blog, index) => (
        <Grid  size={{lg:4, md:6, sm:6, xs:12}} key={blog._id}>
        <BlogCard
          key={index}
          blog={blog}
        />
        </Grid>
      ))}
      </Grid>
    </Box>
  );
};

export default BlogAll;