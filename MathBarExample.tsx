import React from "react";
import { Animated, TouchableWithoutFeedback, View, useWindowDimensions } from "react-native";

export const MathBarExample = () => {
  const animation = new Animated.Value(0);

  const { width } = useWindowDimensions();

  const containerWidth = width - (width / 100 * 10);
  const borderSize = 2;
  const pillWidth = 10;
  const animationWidth = containerWidth - borderSize - pillWidth;
  const animationAfterAdd = Animated.modulo(animation, animationWidth + 1);

  const startAnimation = () => {
    Animated.timing(animation, { toValue: animationWidth, duration: 1000 }).start();
  };

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <View style={{ borderWidth: borderSize, width: containerWidth }}>

        <Animated.View
          style={{
            height: 5,
            width: pillWidth,
            backgroundColor: "blue",
            transform: [{ translateX: animationAfterAdd }],
          }} />
      </View>
    </TouchableWithoutFeedback>
  );
};
