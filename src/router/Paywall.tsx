import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import GradientText from '../components/GradientText';
import LinearGradient from 'react-native-linear-gradient';
import GlowEffect from '../components/GlowEffect';
import {TCupidStackProps} from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';

interface IProps {
  navigation: StackNavigationProp<TCupidStackProps, 'Paywall'>;
}

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const matchItem: {
  name: string;
  icon: ImageSourcePropType;
  id: number;
}[] = [
  {
    id: 1,
    name: 'Unlimited Rizz',
    icon: require(`../assets/fire.png`),
  },
  {
    id: 2,
    name: 'Trusted by Millions',
    icon: require('../assets/handshake.png'),
  },
  {
    id: 3,
    name: 'Coach Recommended',
    icon: require('../assets/heartfire.png'),
  },
  {
    id: 4,
    name: 'Proven to Get Dates',
    icon: require('../assets/honey.png'),
  },
  {
    id: 5,
    name: 'x10 More Responses',
    icon: require('../assets/graph.png'),
  },
  {
    id: 6,
    name: 'x8 More Dates',
    icon: require('../assets/devil.png'),
  },
];

const Paywall = (props: IProps): JSX.Element => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{alignSelf: 'flex-start'}}
        onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={70} color="#ED217C" />
      </TouchableOpacity>

      <Image
        style={{
          width: windowWidth * 0.8,
          height: 150,
        }}
        resizeMode="contain"
        source={require('../assets/match.png')}></Image>
      <View style={{paddingBottom: 10}}>
        {matchItem.map(item => (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              //   backgroundColor: 'green',
              marginBottom: 8,
            }}>
            <Image
              style={{width: 30, height: 30, marginRight: 10}}
              source={item.icon}></Image>
            <Text
              style={{
                fontFamily: 'SFProText-Regular',
                color: 'white',
                fontSize: 20,
              }}>
              {item.name}
            </Text>
          </View>
        ))}
      </View>
      {/* <GlowEffect glowColor={"green"} blurRadius={15}>
        <LinearGradient
          style={{
            backgroundColor: '#46B1C9',
            paddingHorizontal: 20,
            paddingVertical: 2,
            borderRadius: 20,
            position: 'absolute',
            top: -15,
            alignItems: 'center',
          }}
          colors={['#00A676', '#46B1C9']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'SFProText-Medium',
              fontSize: 15,
            }}>
            Rizz God
          </Text>
        </LinearGradient>
        <GradientText
          colors={['#FFFFFF', '#46B1C9']}
          style={{
            color: '#46B1C9',
            fontFamily: 'SFProText-Heavy',
            fontSize: 27,
          }}>
          Elevate Your Game
        </GradientText>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 50,
            backgroundColor: '#00A676',
            borderRadius: 50,
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'SFProText-Medium',
              fontSize: 20,
            }}>
            Unlock Free Trial
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontFamily: 'SFProText-Light',
            fontSize: 15,
          }}>
          risk-free trial then $8.67/week
        </Text>
      </GlowEffect> */}
      <View
        style={{
          width: windowWidth * 0.8,
          height: windowHeight * 0.23,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          borderWidth: 3,
          borderColor: '#00A676',
          borderRadius: 20,
          backgroundColor: '#FFFFFF33',
        }}>
        <LinearGradient
          style={{
            backgroundColor: '#46B1C9',
            paddingHorizontal: 23,
            paddingBottom: 5,
            paddingTop: 1,
            borderRadius: 20,
            position: 'absolute',
            top: -15,
            alignItems: 'center',
          }}
          colors={['#00A676', '#46B1C9']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'SFProText-Medium',
              fontSize: 15,
            }}>
            Rizz God
          </Text>
        </LinearGradient>
        <GradientText
          colors={['#FFFFFF', '#46B1C9']}
          style={{
            color: '#46B1C9',
            fontFamily: 'SFProText-Heavy',
            fontSize: 27,
          }}>
          Elevate Your Game
        </GradientText>
        <TouchableOpacity
          onPress={() => navigation.navigate('Main')}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 50,
            backgroundColor: '#00A676',
            borderRadius: 50,
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'SFProText-Medium',
              fontSize: 20,
            }}>
            Unlock Free Trial
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontFamily: 'SFProText-Light',
            fontSize: 14,
          }}>
          risk-free trial then $8.67/week
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  customFont: {
    fontFamily: 'Syncopate-Bold',
    fontSize: 43,
    color: '#FF007B',
  },
});

export default Paywall;
