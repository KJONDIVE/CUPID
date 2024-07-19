import {Text, View, Image, Touchable, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TCupidStackProps} from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';

interface IProps {
  navigation: StackNavigationProp<TCupidStackProps, 'Main'>;
}

const Blog = (props: IProps): JSX.Element => {
  const {navigation} = props;
  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <View style={{width: '90%', alignSelf: 'center', marginVertical: 30}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{width: 20}}>
          <Image
            style={{width: 13}}
            resizeMode="contain"
            source={require('../assets/back_white.png')}></Image>
        </TouchableOpacity>

        <Text
          style={{color: 'white', fontFamily: 'SFProText-Bold', fontSize: 27}}>
          How to quit social media
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'SFProText-Regular',
            fontSize: 18,
            marginBottom: 20,
          }}>
          and why is it so hard for your brain
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'SFProText-Regular',
            fontSize: 15,
            textAlign: 'left',
            marginBottom: 20,
          }}>
          Imagine you’re at the peak of a mountain, the world spread out beneath
          you, a panorama of possibilities. But every time you try to take a
          step forward, you’re held back by invisible chains. These chains are
          the subtle, yet powerful, ties of social media. Quitting social media
          can feel like trying to climb a mountain with these chains pulling you
          back. But why is it so difficult for our brains to let go? Let’s dive
          into the science and some practical steps to break free.
        </Text>
        <Text
          style={{
            color: 'white',
            marginBottom: 20,
            fontFamily: 'SFProText-Bold',
            fontSize: 15,
          }}>
          The Allure of Social Media
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'SFProText-Regular',
            fontSize: 15,
            textAlign: 'left',
            marginBottom: 20,
          }}>
          Social media platforms are designed to be addictive. They provide
          instant gratification, similar to the rush you get from gambling or
          eating sugary foods. When you receive a notification, a like, or a
          comment, your brain releases dopamine, the “feel-good”
          neurotransmitter. This dopamine release reinforces the behavior,
          making you crave more
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'SFProText-Regular',
            fontSize: 15,
            textAlign: 'left',
            marginBottom: 20,
          }}>
          In essence, social media hijacks the brain’s reward system. The
          anticipation of social interactions and the validation from peers
          create a cycle that’s hard to break. Over time, this cycle can lead to
          compulsive behavior, where you feel the need to check your phone
          constantly
        </Text>
        <Text
          style={{
            color: 'white',
            marginBottom: 20,
            fontFamily: 'SFProText-Bold',
            fontSize: 15,
          }}>
          The Fear of Missing Out (FOMO)
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'SFProText-Regular',
            fontSize: 15,
            textAlign: 'left',
            marginBottom: 20,
          }}>
          Another psychological aspect that makes quitting social media
          difficult is the Fear of Missing Out (FOMO). Social media platforms
          showcase the highlights of everyone’s lives, often filtered and
          curated to show only the best moments. This creates an illusion that
          everyone else is living a more exciting, fulfilling life.
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'SFProText-Regular',
            fontSize: 15,
            textAlign: 'left',
          }}>
          FOMO taps into our natural desire for social belonging and status. The
          thought of missing out on important updates, events, or conversations
          can trigger anxiety and keep you tethered to social media.
        </Text>
      </View>
    </ScrollView>
  );
};
export default Blog;
