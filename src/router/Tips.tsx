import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {windowHeight, windowWidth} from './Paywall';
import {StackNavigationProp} from '@react-navigation/stack';
import {TCupidStackProps} from '../../App';

interface IProps {
  navigation: StackNavigationProp<TCupidStackProps, 'Tips'>;
}

const data = [
  {
    text: 'What Attracts People?',
  },
  {
    text: 'First Impressions Matter',
  },
  {
    text: 'First Date Success',
  },
  {
    text: 'Tips for a successful first date',
  },
  {
    text: 'Engaging Conversations',
  },
  {
    text: 'Avoid These Mistakes',
  },
  {
    text: 'Date Dress Tips',
  },
  {
    text: 'Struggling to get matches?',
    subText:
      'Try our AI app to enhance your appearance with personalized advice.',
  },
];

const Tips = (props: IProps): JSX.Element => {
  const {navigation} = props;
  return (
    <ScrollView style={{backgroundColor: '#000000'}}>
      <View style={{marginVertical: 50, width: '90%', alignSelf: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 30,
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              alignItems: 'center',
            }}>
            <Image
              style={{width: 15, height: 30}}
              resizeMode="contain"
              source={require('../assets/back_white.png')}></Image>
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: 'Syncopate-Bold',
              color: 'white',
              fontSize: 40,
            }}>
            Tips
          </Text>
          <View style={{width: 15, height: 15}}></View>
        </View>

        {data.map(item => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Blog')}
            style={{
              backgroundColor: '#FD96C3',
              marginBottom: 15,
              paddingHorizontal: 25,
              paddingVertical: 23,
              borderRadius: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'SFProText-Bold',
                  fontSize: 25,
                  width: '80%',
                }}>
                {item.text}
              </Text>
              <Image
                style={{width: 13, height: 30, transform: [{scaleX: -1}]}}
                resizeMode="contain"
                source={require('../assets/back_heavy.png')}></Image>
            </View>

            {item.subText && (
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'SFProText-Regular',
                  fontSize: 23,
                  marginTop: 10,
                }}>
                {item.subText}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    padding: 10,
    backgroundColor: '#FC92C0',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '94%',
  },
  itemContainer: {
    width: '31%', // 3 элемента в строке
    height: windowHeight * 0.21,
    marginVertical: 7,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: '#fff',
    fontFamily: 'SFProText-Regular',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
  },
  closeButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Tips;
