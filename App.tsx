import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import {
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  Text,
  ScrollView,
  View,
} from "react-native";
import { StyledComponent } from "styled-components";
import { Fade } from "./Fade";
import { useLoopAnimation } from "./useLoopAnimation";

const Center = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Event = () => {
  let animation = new Animated.Value(0);

  let bgInterpolate = animation.interpolate({
    inputRange: [0, 3000],
    outputRange: ["rgb(255, 99, 71)", "rgb(71, 99, 255)"],
  });

  return (
    <View style={{flex: 1}}>
    <ScrollView
      scrollEventThrottle={16}
      onScroll={Animated.event([{
        nativeEvent: {
          contentOffset: {
            y: animation
          }
        }
      }])}
    >
      <Animated.View
        style={{ backgroundColor: bgInterpolate, height: 3000 }}
      />
    </ScrollView>
    </View>
  );
};

export default function App() {
  return (
      <Event />
  );
}
