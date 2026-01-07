/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import * as Animatable from 'react-native-animatable';

function AnimatedContainer({ animationType, isVisible, children, delay, duration, style }) {
    return (
        <Animatable.View
            style={style}
            animation={isVisible ? animationType : undefined}
            duration={duration}
            useNativeDriver
            delay={delay}
        >
            {children}
        </Animatable.View>
    );
};

export default AnimatedContainer;