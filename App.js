import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//#region import pages
import Login from './src/Pages/PageLogin';
//#endregion

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;