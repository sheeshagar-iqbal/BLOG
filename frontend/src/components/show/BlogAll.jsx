import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
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
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
        margin: "30px",
      }}
    >
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          blog={blog}
        />
      ))}
    </Box>
  );
};

export default BlogAll;