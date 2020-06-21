import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { StaggerExample } from "./StaggerExample";

const Center = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return <Center>
    <StaggerExample/>
  </Center>;
}
