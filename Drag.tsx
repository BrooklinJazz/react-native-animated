import { Animated, PanResponder } from "react-native";

const useDrag = () => {
  let animation = new Animated.ValueXY({ x: 0, y: 0 });

  let _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: animation.x, dy: animation.y },
    ]),
    onPanResponderGrant: () => animation.extractOffset(),
    onPanResponderRelease: (e, { vx, vy }) => {
      Animated.decay(animation, {
        velocity: { x: vx, y: vy },
        deceleration: 0.997,
      }).start();
    },
  });
  return {
    handlers: _panResponder.panHandlers,
    transform: animation.getTranslateTransform(),
  };
};

export const DragExample = () => {
  const { handlers, transform } = useDrag();
  return (
    <Animated.View
      style={{
        height: 20,
        width: 20,
        backgroundColor: "red",
        transform,
      }}
      {...handlers}
    />
  );
};
