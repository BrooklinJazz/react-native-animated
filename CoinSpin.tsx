import React from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";
export const CoinSpin = () => {
  let animation = new Animated.Value(0);

  const xInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const yInterpolate = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "0deg", "180deg"],
  });

  const transform = [
    {
      rotateX: xInterpolate,
    },
    {
      rotateY: yInterpolate,
    },
  ];

  const start = () => {
    Animated.timing(animation, { toValue: 1, duration: 500 }).start(() => animation.setValue(0)
    );
  };

  return (
    <TouchableWithoutFeedback onPress={start}>
      <Animated.View
        style={{
          borderRadius: 100,
          backgroundColor: "red",
          height: 100,
          width: 100,
          transform,
        }} />
    </TouchableWithoutFeedback>
  );
};
