import React from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";
export const Spring = () => {
  let animation = new Animated.Value(1);

  const expand = () => Animated.spring(animation, { toValue: 2 }).start();
  const shrink = () => Animated.spring(animation, { toValue: 1 }).start();

  // have to use non useState value because animations and hooks
  // have cancelling interaction for unknown reason
  let shouldExpand = true;
  const startAnimation = () => {
    if (shouldExpand) {
      expand();
    }
    else {
      shrink();
    }
    shouldExpand = !shouldExpand;
  };

  const width = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [50, 300],
  });
  const height = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [50, 100],
  });
  const backgroundColor = animation.interpolate({
    inputRange: [1, 2],
    outputRange: ["red", "orangered"],
  });

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={{ backgroundColor, height, width }} />
    </TouchableWithoutFeedback>
  );
};
