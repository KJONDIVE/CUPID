import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {
  Defs,
  Filter,
  FeGaussianBlur,
  FeMerge,
  FeMergeNode,
  Rect,
} from 'react-native-svg';

const GlowEffect = ({children, glowColor, blurRadius}) => {
  return (
    <View
      style={[
        styles.container,
        {shadowColor: glowColor, shadowRadius: blurRadius},
      ]}>
      <Svg height="0" width="0">
        <Defs>
          <Filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <FeGaussianBlur stdDeviation={blurRadius} result="coloredBlur" />
            <FeMerge>
              <FeMergeNode in="coloredBlur" />
              <FeMergeNode in="SourceGraphic" />
            </FeMerge>
          </Filter>
        </Defs>
        <Rect
          width="100%"
          height="100%"
          fill="black"
          filter="url(#glow)"
          fillOpacity="0"
        />
      </Svg>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
  },
});

export default GlowEffect;
