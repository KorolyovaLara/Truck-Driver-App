import React from "react";
import { ButtonGroup, ButtonGroupProps, IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <h2>icons should be here</h2>
    <IconButton
      as="a"
      href="#"
      aria-label="GitHub"
      icon={<FontAwesomeIcon icon={faCoffee} />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="GitHub"
      icon={<FontAwesomeIcon icon={faCoffee} />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="GitHub"
      icon={<FontAwesomeIcon icon={faCoffee} />}
    />
  </ButtonGroup>
);
