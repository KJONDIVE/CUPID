import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {TCupidStackProps} from '../../App';
import GradientText from '../components/GradientText';

interface IProps {
  navigation: StackNavigationProp<TCupidStackProps, 'InitialLoading'>;
}

const InitialLoading = (props: IProps): JSX.Element => {
  // *** PROPS ***
  const {navigation} = props;
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={() => navigation.navigate('Paywall')}>
      <GradientText style={styles.customFont} colors={['#ED217C', '#5C1E35']}>
        CUPID
      </GradientText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  customFont: {
    fontFamily: 'Syncopate-Bold',
    fontSize: 43,
    color: '#FF007B',
  },
});

export default InitialLoading;
