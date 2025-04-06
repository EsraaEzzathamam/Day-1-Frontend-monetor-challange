import { Box } from "@mui/material";
import Link from "next/link";

// import React from "react";
interface MediaLinkProps {
  linkData: { title: string; link: string };
}
const CustomLink = ({ linkData }: MediaLinkProps) => {
  return (
    <>
      <Box className="bg-grey-1 p-4 rounded-2xl flex flex-col items-center justify-center m-2 w-full hover:shadow-xl hover:bg-gray-500">
        <Link href={linkData.link} target="_blank">
          {linkData.title}
        </Link>
      </Box>
    </>
  );
};
export default CustomLink;
