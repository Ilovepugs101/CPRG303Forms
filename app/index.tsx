// Simple home screen with navigation buttons to each form page.
import { Text, View, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

// Index provides three buttons for navigation: /employee /sign-in and /sing-up
export default function Index() {
  return (
    <View style={styles.container}>
      <Button title="Employee" onPress={() => router.push("/employee")} />
      <Button title="Sign In" onPress={() => router.push("/sign-in")} />
      <Button title="Sign Up" onPress={() => router.push("/sign-up")} />
    </View>
  );
}

// Basic styles for the home screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});