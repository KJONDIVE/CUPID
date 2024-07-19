import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {TCupidStackProps} from '../../App';

import {windowHeight, windowWidth} from './Paywall';
import Modal from 'react-native-modal';

interface IProps {
  navigation: StackNavigationProp<TCupidStackProps, 'Main'>;
}

const Main = (props: IProps): JSX.Element => {
  // *** PROPS ***
  const {navigation} = props;

  const [isVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          width: windowWidth * 0.9,
          height: windowHeight * 0.15,
        }}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            style={{width: 35, height: 30}}
            resizeMode="contain"
            source={require('../assets/menu.png')}></Image>
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
        <TouchableOpacity onPress={() => navigation.navigate('History')}>
          <Image
            style={{width: 37, height: 40}}
            resizeMode="contain"
            source={require('../assets/story.png')}></Image>
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: 'space-between',
          height: windowHeight * 0.53,
        }}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'SFProText-Medium',
              color: '#000000',
              fontSize: 24,
            }}>
            Upload a screenshot
          </Text>
          <Text
            style={{
              fontFamily: 'SFProText-Medium',
              color: '#000000',
              fontSize: 23,
            }}>
            of a chat or bio
          </Text>
        </View>

        <Image
          style={{width: windowWidth * 0.8, height: windowHeight * 0.4}}
          resizeMode="contain"
          source={require('../assets/photos.png')}></Image>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: windowWidth * 0.9,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{padding: 17, backgroundColor: 'black', borderRadius: 100}}>
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
            Upload Screenshot
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        testID={'modal'}
        isVisible={isVisible}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection={['down']}
        style={styles.view}>
        <View
          style={{
            height: '58%',
            backgroundColor: '#FFFFFF',
            borderTopEndRadius: 40,
            borderTopStartRadius: 40,
            paddingTop: 45,
            alignItems: 'center',
          }}>
          <View style={{width: '80%', flex: 1}}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 35,
                marginLeft: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => setModalVisible(false)}>
              <Image
                style={{width: 23, height: 23}}
                source={require('../assets/close.png')}></Image>
            </TouchableOpacity>

            <View
              style={{
                backgroundColor: '#FD96C3',
                paddingVertical: 23,
                paddingHorizontal: 15,
                borderRadius: 20,
                marginTop: 30,
                marginBottom: 15,
                paddingRight: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <Text
                  style={{
                    fontFamily: 'SFProText-Bold',
                    fontSize: 24,
                    color: '#000000',
                  }}>
                  Struggling to get matches?
                </Text>
                <Image
                  style={{transform: [{scaleX: -1}], height: 23}}
                  resizeMode="contain"
                  source={require('../assets/back_heavy.png')}></Image>
              </View>

              <Text
                style={{
                  fontFamily: 'SFProText-Medium',
                  fontSize: 20,
                  color: '#000000',
                  marginTop: 10,
                }}>
                Try our AI app to enhance your appearance with personalized
                advice.
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Tips');
                setModalVisible(false);
              }}
              style={{
                backgroundColor: '#FD96C3',
                borderRadius: 40,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 20,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../assets/lamp.png')}
                  style={{
                    width: 35,
                    height: 35,
                    marginRight: 10,
                    marginLeft: 20,
                  }}></Image>
                <Text
                  style={{
                    fontFamily: 'SFProText-Regular',
                    fontSize: 29,
                    color: '#000000',
                  }}>
                  Tips
                </Text>
              </View>
              <Image
                style={{
                  transform: [{scaleX: -1}],
                  height: 23,
                }}
                resizeMode="contain"
                source={require('../assets/back.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

export default Main;
