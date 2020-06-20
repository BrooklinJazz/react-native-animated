import { Animated } from "react-native";
import { useEffect } from "react";

export const useLoopAnimation = (animationFn: () => Animated.CompositeAnimation) => {
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