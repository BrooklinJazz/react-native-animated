import React from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";
export const StaggerExample = () => {
  let colorAnimation = new Animated.Value(0);
  let scaleAnimation = new Animated.Value(1);

  let backgroundColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["red", "purple"],
  });

  let transform = [
    {
      scale: scaleAnimation,
    },
  ];

  const start = () => {
    Animated.stagger(200, [
      Animated.timing(colorAnimation, { toValue: 1, duration: 500 }),
      Animated.timing(scaleAnimation, { toValue: 2, duration: 300 }),
    ]).start();
  };
  return (
    <TouchableWithoutFeedback onPress={start}>
      <Animated.View
        style={{ height: 50, width: 50, backgroundColor, transform }} />
    </TouchableWithoutFeedback>
  );
};
