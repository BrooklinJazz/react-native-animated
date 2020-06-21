import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import {
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  Text,
  ScrollView,
  View,
  PanResponder,
} from "react-native";
import { StyledComponent } from "styled-components";
import { Fade } from "./Fade";
import { useLoopAnimation } from "./useLoopAnimation";

const Center = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  let animation = new Animated.ValueXY({ x: 0, y: 0 });
  let x = 0
  let y = 0
  animation.addListener((value) => {
    x = value.x
    y = value.y
  })
  let _panResponder = PanResponder.create({
    // onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: animation.x, dy: animation.y },
    ]),
    onPanResponderGrant: () => {
      animation.setOffset({x, y});
      animation.setValue({x: 0, y: 0});
    },
    onPanResponderRelease: (e, { vx, vy }) => {
      Animated.decay(animation, {
        velocity: { x: vx, y: vy },
        deceleration: 0.997,
      }).start();
    },
  })
  return (
    <Center style={{backgroundColor: "blue"}}>
      <Animated.View
        style={{
          height: 20,
          width: 20,
          backgroundColor: "red",
          transform: animation.getTranslateTransform(),
        }}
        {..._panResponder.panHandlers}
      />
    </Center>
  );
}
