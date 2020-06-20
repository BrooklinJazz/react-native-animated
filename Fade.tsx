import React, { ReactChildren, ReactChild } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";

interface IProps {
  children: any;
  onPress?: () => any;
  style?: {}
}

export const Fade = ({children, onPress = () => true, style = {}}: IProps) => {
    let opacity = new Animated.Value(1)
    const handlePress = () => {
        Animated.timing(opacity, { toValue: 0, duration: 400 }).start()
        onPress()
    }
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <Animated.View style={[style, {opacity}]}>
                {children}
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}