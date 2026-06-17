import { createStackNavigator } from '@react-navigation/stack';
import SupportHomeScreen from './SupportHomeScreen';

const Stack = createStackNavigator();

export default function SupportNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SupportHome"
        component={SupportHomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
