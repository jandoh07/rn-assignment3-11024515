import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import OngoingTask from "./components/OngoingTask";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <SearchBar />
        <Categories />
        <OngoingTask />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
    gap: 20,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});
