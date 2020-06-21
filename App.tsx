import React, { useState } from "react";
import styled from "styled-components/native";
import { MathBarExample } from "./MathBarExample";
import { Animated, TouchableWithoutFeedback } from "react-native";

const Center = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Spring = () => {
  let animation = new Animated.Value(1);

  const expand = () => Animated.spring(animation, { toValue: 2 }).start();
  const shrink = () => Animated.spring(animation, { toValue: 1 }).start();

  // have to use non useState value because animations and hooks
  // have cancelling interaction for unknown reason
  let shouldExpand = true
  const startAnimation = () => {
    if (shouldExpand) {
      expand();
    } else {
      shrink();
    }
    shouldExpand = !shouldExpand
  };

  const width = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [50, 300],
  });
  const height = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [50, 100],
  });

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={{ backgroundColor: "red", height, width }} />
    </TouchableWithoutFeedback>
  );
};

export default function App() {
  return (
    <Center>
      <Spring />
    </Center>
  );
}
