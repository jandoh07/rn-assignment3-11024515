import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const OngoingTask = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>Ongoing Task</Text>
      <FlatList
        data={[
          { key: "Mobile App Development" },
          { key: "Web Development" },
          { key: "Push Ups" },
        ]}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.key}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    height: 130,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 10,
    justifyContent: "center",
    paddingLeft: 10,
  },
});

export default OngoingTask;
