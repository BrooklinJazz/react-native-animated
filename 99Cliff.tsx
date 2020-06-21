import React from "react";
import styled from "styled-components/native";
import {
  useWindowDimensions,
  Text,
  View,
  Animated,
  PanResponder
} from "react-native";
const CliffContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;
const Box = styled(Animated.View)`
  height: 100px;
  width: 100px;
`;
export const _99Cliff = () => {
  let animation = new Animated.ValueXY({ x: 0, y: 0 });

  let _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: animation.x, dy: animation.y },
    ]),
    onPanResponderGrant: () => animation.extractOffset(),
  });


  const { height } = useWindowDimensions();

  const inputRange = [(height / 2) - 100.01, (height / 2) - 100];

  const colorInterpolate = animation.y.interpolate({
    inputRange,
    outputRange: ["red", "green"]
  });

  return (
    <>
      <Box
        {..._panResponder.panHandlers}
        style={{
          zIndex: 10,
          position: "absolute",
          transform: animation.getTranslateTransform(),
          backgroundColor: colorInterpolate,
        }} />
      <CliffContainer>
        <Text>Good</Text>
        <View style={{ width: "100%", height: 1, backgroundColor: "black" }} />
        <Text>BAD</Text>
      </CliffContainer>
    </>
  );
};
