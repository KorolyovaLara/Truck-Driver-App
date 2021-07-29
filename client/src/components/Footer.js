import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { Copyright } from "./Copyright.js";
import { Logo } from "./Logo";
import { SocialMediaLinks } from "./SocialMediaLinks";

function Footer() {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{ base: "4", md: "8" }}
      position="absolute"
      left="0"
      right="0"
      bottom="0"
    >
      <Stack p="20px" background="pink">
        <Stack
          direction="row"
          spacing="4"
          align="center"
          justify="space-between"
        >
          <Logo />
          <SocialMediaLinks />
        </Stack>
        <Copyright alignSelf={{ base: "center", sm: "start" }} />
      </Stack>
    </Box>
  );
}

export default Footer;
