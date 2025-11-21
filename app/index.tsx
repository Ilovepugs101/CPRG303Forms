import { Text, View, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Button title="Employee Form" onPress={() => router.push("/employee")} />
      <Button title="Employee Form" onPress={() => router.push("/employee")} />
      <Button title="Employee Form" onPress={() => router.push("/employee")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})