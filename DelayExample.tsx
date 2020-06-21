import React from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";
export const DelayExample = () => {
  let animation = new Animated.Value(1);
  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(animation, { toValue: 4, duration: 500 }),
      Animated.delay(500),
      Animated.timing(animation, { toValue: 1, duration: 1000 }),
    ]).start();
  };
  const backgroundColor = animation.interpolate({
    inputRange: [1, 4],
    outputRange: ["red", "orange"]
  });

  const transform = [{
    scale: animation
  }];

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={{ backgroundColor, transform, height: 50, width: 50 }} />

    </TouchableWithoutFeedback>
  );
};
