import React from "react";
import {
  chakra,
  HTMLChakraProps,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";

export const Logo = (props: HTMLChakraProps<"svg">) => {
  const [white, black] = useToken("colors", ["white", "gray.800"]);
  return <h2>Logo</h2>;
};
