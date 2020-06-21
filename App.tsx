import React, { useState } from "react";
import styled from "styled-components/native";
import { DelayExample } from "./DelayExample";

const Center = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default function App() {


  return (
    <Center>
      <DelayExample/>
    </Center>
  );
}
