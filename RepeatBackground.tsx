import React, { useEffect } from "react";
import { Animated, Easing, useWindowDimensions } from "react-native";
import styled from "styled-components/native";

const Block = styled.View`
  background-color: red;
  height: 5px;
  width: 5px;
`;

export const BlockRow = ({ style = {} }: { style: any }) => {
  return (
    <Animated.View
      style={[
        {
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
        },
        style,
      ]}
    >
      {new Array(10).fill(0).map((_) => (
        <Block />
      ))}
    </Animated.View>
  );
};

const BlockColumn = ({ style }: { style: any }) => {
  return (
    <Animated.View
      style={[
        { width: "100%", height: "100%", justifyContent: "space-between" },
        style,
      ]}
    >
      {new Array(20).fill(0).map((_) => (
        <Block />
      ))}
    </Animated.View>
  );
};

export const RepeatBackground = () => {
  const { height, width } = useWindowDimensions();

  let animation = new Animated.Value(0);

  const verticalAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, height],
  });

  const horizontalAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
      })
    ).start();
  }, []);

  const calc = (percent: number, dimension: number) => {
    const ratio = (dimension / 100) * percent;
    return ratio;
  };
  return (
    <>
      {new Array(10).fill(0).map((_, index) => {
        return (
          <BlockRow
            style={{
              position: "absolute",
              top: Animated.modulo(
                Animated.add(verticalAnimation, calc(index * 10, height)),
                height
              ),
            }}
          />
        );
      })}
    </>
  );
};
