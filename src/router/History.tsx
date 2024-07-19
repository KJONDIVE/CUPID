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
  navigation: StackNavigationProp<TCupidStackProps, 'History'>;
}

const data = Array(30).fill(null);

const History = (props: IProps): JSX.Element => {
  const {navigation} = props;
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View
        style={{
          alignItems: 'center',
          height: windowHeight * 0.12,
          paddingTop: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{height: 30}}
            resizeMode="contain"
            source={require('../assets/back_heavy.png')}></Image>
        </TouchableOpacity>

        <Text
          style={{fontFamily: 'SFProText-Bold', fontSize: 35, color: 'black'}}>
          History
        </Text>
        <View style={{height: 26, width: 26}}></View>
      </View>
      <View style={styles.gridContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image
              style={{
                height: 11,
                position: 'absolute',
                zIndex: 1,
                bottom: 15,
                right: 6,
              }}
              resizeMode="contain"
              source={require('../assets/close_white.png')}></Image>
            <View style={styles.imageContainer}>
              <Text style={styles.text}>User's screenshot</Text>
            </View>
          </View>
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
    width: '32%', // 3 элемента в строке
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

export default History;
