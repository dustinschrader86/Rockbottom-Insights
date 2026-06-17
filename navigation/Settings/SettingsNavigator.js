import { createStackNavigator } from '@react-navigation/stack';
import SettingsHomeScreen from './SettingsHomeScreen';

const Stack = createStackNavigator();

export default function SettingsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SettingsHome" 
        component={SettingsHomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
