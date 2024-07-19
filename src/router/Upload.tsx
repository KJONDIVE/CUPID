import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {TCupidStackProps} from '../../App';

import {windowHeight, windowWidth} from './Paywall';
import {ScrollView} from 'react-native-gesture-handler';

const cupidItem: {
  text: string;
  image: any;
}[] = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../assets/heart.png'),
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../assets/crown.png'),
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../assets/brain.png'),
  },
];

interface IProps {
  navigation: StackNavigationProp<TCupidStackProps, 'Upload'>;
}

const Upload = (props: IProps): JSX.Element => {
  // *** PROPS ***
  const {navigation} = props;
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              width: windowWidth * 0.9,
              height: windowHeight * 0.15,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{width: 35, height: 30}}
                resizeMode="contain"
                source={require('../assets/back.png')}></Image>
            </TouchableOpacity>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: 'Syncopate-Bold',
                  color: '#000000',
                  fontSize: 40,
                }}>
                CUPID
              </Text>
              <Text
                style={{
                  fontFamily: 'SFProText-Light',
                  color: '#000000',
                  fontSize: 23,
                  marginTop: -7,
                }}>
                Regular
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                style={{width: 35, height: 30}}
                resizeMode="contain"
                source={require('../assets/plus.png')}></Image>
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: 'center',
              height: windowHeight * 0.6,
              width: windowWidth * 0.65,
              borderRadius: 15,
              backgroundColor: 'white',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'SFProText-Regular',
                fontSize: 25,
                color: '#000000',
              }}>
              User’s screenshot
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginVertical: 25,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
              alignSelf: 'center',
            }}>
            <View
              style={{
                width: windowWidth * 0.2,
                height: 3,
                backgroundColor: '#00000040',
              }}></View>
            <Image
              style={{width: 180}}
              resizeMode="contain"
              source={require('../assets/tap.png')}></Image>

            <View
              style={{
                width: windowWidth * 0.2,
                height: 3,
                backgroundColor: '#00000040',
              }}></View>
          </View>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              alignItems: 'center',
              marginBottom: 100,
            }}>
            {cupidItem.map((item, index) => (
              <View
                key={index}
                style={{
                  height: 90,
                  backgroundColor: '#0000004D',
                  marginBottom: 10,
                  borderRadius: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  paddingHorizontal: 10,
                  justifyContent: 'space-evenly',
                }}>
                <Image
                  style={{width: 32, height: 32, marginRight: 10}}
                  resizeMode="contain"
                  source={item.image}
                />
                <Text
                  style={{
                    fontFamily: 'SFProText-Regular',
                    color: '#FFFFFF',
                    fontSize: 19,
                  }}
                  numberOfLines={2}
                  ellipsizeMode="middle">
                  {item.text}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: windowWidth * 0.9,
          justifyContent: 'space-between',
          position: 'absolute',
          alignSelf: 'center',
          bottom: 20,
        }}>
        <TouchableOpacity
          style={{
            padding: 17,
            backgroundColor: 'black',
            borderRadius: 100,
          }}>
          <Image
            style={{height: 23, width: 23}}
            source={require('../assets/heart.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Upload')}
          style={{
            paddingHorizontal: 25,
            paddingVertical: 13,
            backgroundColor: 'black',
            borderRadius: 100,
            width: '80%',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'SFProText-Medium',
              color: '#FFFFFF',
              fontSize: 23,
            }}>
            Get Rizz Reply
          </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FC92C0',
  },
  customFont: {
    fontFamily: 'Syncopate-Bold',
    fontSize: 43,
    color: '#FF007B',
  },
});

export default Upload;
