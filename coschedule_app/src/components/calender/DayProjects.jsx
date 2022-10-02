import React, { useContext } from "react";
import { Box, Text, Avatar, Flex } from "@chakra-ui/react";
import { DayContext } from "../../context/DayContext";
import { useNavigate } from "react-router-dom";
import "./day.css";
import { GrBlog } from "react-icons/gr";

const DayProjects = ({ title, refNO }) => {
  const { setNewproject, setProjectrefNo } = useContext(DayContext);
  const navigate = useNavigate();
  const handleClick = (refNO) => {
    setProjectrefNo(refNO);
    navigate("/editproject");
  };

  return (
    <Box
    boxShadow= "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
    borderRadius="10px"
      h="auto"
      w="160"
      onClick={() => handleClick(refNO)}
      className="pro"
    >
      <Text
        bg="lightyellow"
       
        display="flex"
        fontSize={"20px"}
        justifyContent="space-around"
        alignItems={"center"}
        p="10px"
      >
        <GrBlog marginLeft="20px" /> Blog Post
      </Text>
      <Box
    borderRadius="10px"
        h="50px"
        p="10px"
        display="flex"
        fontSize={"20px"}
        justifyContent="space-around"
        alignItems={"center"}
      >
        <Text fontSize={"25px"} >{title}</Text>
        <Avatar size={"sm"} src="https://bit.ly/sage-adebayo" />
      </Box>
    </Box>
  );
};

export default DayProjects;
