import { Provider } from "react-redux";

// Screens
import HomeScreen from "./screens/HomeScreen";
import AvailableRidesScreen from "./screens/AvailableRidesScreen";
import ReferScreen from "./screens/ReferScreen";
import StartScreen from "./screens/StartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import Connections from "./screens/Connections";
import EditProfileScreen from "./screens/EditProfileScreen";

// Redux Store
import { store } from "./store";

// Providers
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodScreen from "./screens/FoodScreen";
import SettingsScreen from "./screens/SettingsScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="StartScreen"
              component={StartScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Connections"
              component={Connections}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ReferScreen"
              component={ReferScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="EditProfileScreen"
              component={EditProfileScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="AvailableRidesScreen"
              component={AvailableRidesScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="FoodScreen"
              component={FoodScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SettingsScreen"
              component={SettingsScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
