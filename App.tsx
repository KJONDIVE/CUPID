import {createStackNavigator} from '@react-navigation/stack';
import InitialLoading from './src/router/InitialLoading';
import Paywall from './src/router/Paywall';
import Main from './src/router/Main';
import Upload from './src/router/Upload';
import History from './src/router/History';
import Tips from './src/router/Tips';
import Blog from './src/router/Blog';

export type TCupidStackProps = {
  InitialLoading: undefined;
  Paywall: undefined;
  Main: undefined;
  Upload: undefined;
  History: undefined;
  Tips: undefined;
  Blog: undefined;
};

const Stack = createStackNavigator<TCupidStackProps>();

const App = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="InitialLoading">
      <Stack.Screen
        name="InitialLoading"
        component={InitialLoading}
        options={{
          title: 'Главная',
          headerShown: false,
          headerBackTitle: 'Назад',
        }}></Stack.Screen>
      <Stack.Screen
        name="Paywall"
        component={Paywall}
        options={{
          headerShown: false,
          headerBackTitle: 'Назад',
        }}></Stack.Screen>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
          headerBackTitle: 'Назад',
        }}></Stack.Screen>
      <Stack.Screen
        name="Upload"
        component={Upload}
        options={{
          headerShown: false,
          headerBackTitle: 'Назад',
        }}></Stack.Screen>
      <Stack.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
          headerBackTitle: 'Назад',
        }}></Stack.Screen>
      <Stack.Screen
        name="Tips"
        component={Tips}
        options={{
          headerShown: false,
          headerBackTitle: 'Назад',
        }}></Stack.Screen>
      <Stack.Screen
        name="Blog"
        component={Blog}
        options={{
          headerShown: false,
          headerBackTitle: 'Назад',
        }}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default App;
