import React, { useState } from "react";
import styled from "styled-components/native";
import { Animated, TouchableWithoutFeedback, Alert } from "react-native";
import { StyledComponent } from "styled-components";
import { Fade } from "./Fade";

const Box = styled.View`
  height: 100px;
  width: 100px;
  background-color: red;
`

const Center = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <Center>
      <Fade>
        <Box/>
      </Fade>
    </Center>
  );
}
