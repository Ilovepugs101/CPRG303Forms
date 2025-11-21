import { Text, View, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Button title="Employee" onPress={() => router.push("/employee")} />
      <Button title="Sign In" onPress={() => router.push("/sign-in")} />
      <Button title="Sign Up" onPress={() => router.push("/sign-up")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});