import React from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";
export const ParallelExample = () => {
  let colorAnimation = new Animated.Value(0);
  let scaleAnimation = new Animated.Value(1);

  const backgroundColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["tomato", "purple"]
  });

  const transform = [{
    scale: scaleAnimation
  }];

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(colorAnimation, { toValue: 1, duration: 500 }),
      Animated.timing(scaleAnimation, { toValue: 3, duration: 200 })
    ]).start(() => console.warn("I'm Done!"));
  };
  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={[{ height: 50, width: 50 }, { backgroundColor, transform }]} />
    </TouchableWithoutFeedback>
  );
};
