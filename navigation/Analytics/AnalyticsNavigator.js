import { createStackNavigator } from '@react-navigation/stack';
import AnalyticsHomeScreen from './AnalyticsHomeScreen';

const Stack = createStackNavigator();

export default function AnalyticsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AnalyticsHome"
        component={AnalyticsHomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
