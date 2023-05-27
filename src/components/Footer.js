import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      // pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "400px", height: "400px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "25px", xs: "20px" } }}
      mt="10px"
      textAlign="center"
      pb="40px"
    >
      Made with 🖤 by Vivek Shrirame
    </Typography>
  </Box>
);

export default Footer;
