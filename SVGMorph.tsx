import React, { useEffect, useRef } from "react";
import SVG, { Path } from "react-native-svg";
import SVGPath from "art/modes/svg/path";
import { Tween } from "art/morph/path";
import { Animated, TouchableWithoutFeedback, useWindowDimensions } from "react-native";
export const SVGMorph = () => {
  let animation = new Animated.Value(0);
  const ref = useRef();
  const startAnimation = () => {
    Animated.timing(animation, { toValue: 1, duration: 1000 }).start();
  };

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

  useEffect(() => {
    const pathInterpolate = Tween(startPath, endPath);
    let p = new SVGPath();

    animation.addListener(({ value }) => {
      pathInterpolate.tween(value);
      pathInterpolate.applyToPath(p);
      console.warn("ref");
      ref?.current?.setNativeProps({
        d: p.toSVG(),
      });
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <SVG>
        <Path
          ref={ref}
          d={startPath}
          fill="none"
          stroke="blue"
          stroke-width="5" />
      </SVG>
    </TouchableWithoutFeedback>
  );
};
