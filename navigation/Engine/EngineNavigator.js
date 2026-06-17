import { createStackNavigator } from '@react-navigation/stack';
import EngineHomeScreen from './EngineHomeScreen';

const Stack = createStackNavigator();

export default function EngineNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EngineHome"
        component={EngineHomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

