import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const Categories = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Categories
      </Text>
      <FlatList
        style={styles.flatlist}
        horizontal
        data={[
          {
            key: "Exercise",
            tasks: "12 Tasks",
            image: require("../assets/woman.png"),
          },
          {
            key: "Study",
            tasks: "12 Tasks",
            image: require("../assets/woman2.png"),
          },
          {
            key: "Gym",
            tasks: "8 Tasks",
            image: require("../assets/gym.png"),
          },
          {
            key: "Code",
            tasks: "15 Tasks",
            image: require("../assets/code.png"),
          },
          {
            key: "Cook",
            tasks: "4 Tasks",
            image: require("../assets/cook.png"),
          },
          {
            key: "Magician",
            tasks: "3 Tasks",
            image: require("../assets/magician.png"),
          },
          {
            key: "Work",
            tasks: "18 Tasks",
            image: require("../assets/work.png"),
          },
        ]}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.key}</Text>
            <Text style={{ fontSize: 12, fontWeight: 400 }}>{item.tasks}</Text>
            <View style={styles.cardImage}>
              <Image
                source={item.image}
                style={{
                  resizeMode: "contain",
                  width: 120,
                  height: 120,
                }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 180,
    width: 190,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  cardImage: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Categories;
