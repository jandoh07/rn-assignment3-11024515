import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
    gap: 10,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});
