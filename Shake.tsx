import { Animated, TouchableWithoutFeedback } from "react-native";
import { useLoopAnimation } from "./useLoopAnimation";
import styled from "styled-components/native";

const Box = styled(Animated.View)`
  height: 100px;
  width: 100px;
  background-color: green;
`;

const Shake = () => {
  let animationX = new Animated.Value(0);
  const left = (toValue: number) =>
    Animated.timing(animationX, { toValue: -toValue, duration: 100 });
  const right = (toValue: number) =>
    Animated.timing(animationX, { toValue, duration: 100 });

  const [loopAnimation] = useLoopAnimation(() =>
    Animated.sequence([left(10), right(10)])
  );

  return (
    <TouchableWithoutFeedback onPress={loopAnimation}>
      <Box
        style={{
          transform: [
            {
              translateX: animationX,
            },
          ],
        }}
      />
    </TouchableWithoutFeedback>
  );
};