import React, { useState } from "react";
import styled from "styled-components/native";
import { ParallelExample } from "./ParallelExample";

const Center = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <Center>
      <ParallelExample/>
    </Center>
  );
}
