import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Animated, Easing, View, useWindowDimensions } from "react-native";

const Center = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Block = styled.View`
  background-color: red;
  height: 5px;
  width: 5px;
`;

const BlockRow = ({ style = {} }: {style: any}) => {
  return <Animated.View style={[{width: "100%", justifyContent: "space-between", flexDirection: "row"}, style]}>
    {new Array(9).fill(0).map(_ => <Block/>)}
  </Animated.View>
};

export default function App() {
  const { height } = useWindowDimensions();
  const blockNumber = 10;
  
  let animation = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: height,
        duration: 10000,
        easing: Easing.linear,
      })
    ).start()
  }, []);

  const calc = (percent: number) => {
    const ratio = (height / 100) * percent

    return ratio
  }
  // const calc = (index: number) => Animated.add(repeat, (height / 10 * index)) % height

  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
      {new Array(10).fill(0).map((_, index) => {
        return <BlockRow style={{position: "absolute", top: Animated.modulo(Animated.add(animation, calc(index * 10)), height)}} />})}
    </View>
  );
}
