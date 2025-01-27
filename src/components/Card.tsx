import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
const Card = () => {
  return (
    <Box
      className="cardBackground"
      sx={{ padding: "2rem", borderRadius: "0.7rem" }}
    >
      <Image
        src="/assets/es.jpeg"
        alt="profile-image "
        height={100}
        width={100}
        className="rounded-full"
      />
    </Box>
  );
};
export default Card;
