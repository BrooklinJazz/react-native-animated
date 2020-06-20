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


export default function App() {
  return (
      <Center>
        <Text>placeholder</Text>
      </Center>
  );
}
