import React, { useState } from "react";
import styled from "styled-components/native";
import { Animated, TouchableWithoutFeedback } from "react-native";
import { StyledComponent } from "styled-components";

interface IAnimatedBoxProps {
  opacity: number;
}

const AnimatedBox = styled(Animated.View)`
  height: 100px;
  width: 100px;
  background-color: red;
`

const Center = styled.View`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default function Opacity() {
    let opacity = new Animated.Value(1)

  const startAnimation = () => {
    Animated.timing(opacity, { toValue: 0, duration: 400 }).start()
  };
  return (
    <Center>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <AnimatedBox style={{opacity: opacity}} />
      </TouchableWithoutFeedback>
    </Center>
  );
}
