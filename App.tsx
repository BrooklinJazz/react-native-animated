import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import {
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  Text,
} from "react-native";
import { StyledComponent } from "styled-components";
import { Fade } from "./Fade";

const Box = styled(Animated.View)`
  height: 100px;
  width: 100px;
  background-color: green;
`;

const Center = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const useLoopAnimation = (animationFn) => {
  // loopAnimation halts when changing state variables for unknown reason
  let stopped = false;
  const loopAnimation = () => {
    console.warn("Loop", stopped);
    if (stopped) return false;
    animationFn().start(() => loopAnimation());
  };

  useEffect(() => () => {
    stopped = true;
  });
  return [loopAnimation];
};

const Sway = () => {
  let animationX = new Animated.Value(0);
  const left = (toValue: number) =>
    Animated.timing(animationX, { toValue: -toValue, duration: 100 });
  const right = (toValue: number) =>
    Animated.timing(animationX, { toValue, duration: 100 });

  const [loopAnimation] = useLoopAnimation(() =>
    Animated.sequence([left(10), right(10)])
  );

  return (
    <TouchableWithoutFeedback onPress={loopAnimation}>
      <Box
        style={{
          transform: [
            {
              translateX: animationX,
            },
          ],
        }}
      />
    </TouchableWithoutFeedback>
  );
};

export default function App() {
  const [hide, setHide] = useState(false);

  return (
    <Center>
      <TouchableOpacity
        onPress={() => {
          setHide(!hide);
        }}
      >
        <Text>test</Text>
      </TouchableOpacity>
      {!hide && <Sway />}
    </Center>
  );
}
