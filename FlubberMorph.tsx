import React, { useEffect, useRef } from "react";
import { Animated, useWindowDimensions, TouchableWithoutFeedback } from "react-native";
import { interpolate } from "flubber";
import SVG, { Path } from "react-native-svg";
export const FlubberMorph = () => {
  let animation = new Animated.Value(0);

  const pathRef = useRef();

  const { height, width } = useWindowDimensions();
  const init = `${width / 2}, ${height / 2}`;
  const startPath = `
    M ${init}
    l 10, 20
    l 20, -30
  `;

  const endPath = `
    M ${init}
    h 50
    v 50
    h -50
    v -50
  `;

  const startAnimation = () => {
    Animated.timing(animation, { toValue: 1, duration: 1000 }).start();
  };

  useEffect(() => {
    const pathInterpolate = interpolate(startPath, endPath, { maxSegmentLength: 1 });
    animation.addListener(({ value }) => {
      const path = pathInterpolate(value);
      pathRef?.current?.setNativeProps({
        d: path
      });
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <SVG>
        <Path
          ref={pathRef}
          d={startPath}
          fill="purple"
          stroke="blue"
          stroke-width="10" />
      </SVG>
    </TouchableWithoutFeedback>
  );
};
