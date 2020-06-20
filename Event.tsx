import { Animated, View, ScrollView } from "react-native";

export const Event = () => {
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