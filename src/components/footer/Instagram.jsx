import { Box } from "@mui/material";
import React from "react";

const InstagramPosts = () => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          rowGap: 2,
          columnGap: 2,
        }}
      >
        {posts.map((data, index) => {
          return (
            <Box
              key={index}
              sx={{
                backgroundImage: `url(${data.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#FFFFFF",
                height: "120px",
                width: "100%",
                borderRadius: "20px",
              }}
            />
          );
        })}
      </Box>
    </>
  );
};

export default InstagramPosts;

const posts = [
  {
    image:
      "https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/8949835/pexels-photo-8949835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/11119419/pexels-photo-11119419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/6098057/pexels-photo-6098057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
