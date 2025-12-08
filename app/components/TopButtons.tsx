import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function TopButtons() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.topButtons}>
      <TouchableOpacity 
        style={styles.circleBtn}
        onPress={() => console.log("Back button pressed")}
      >
        <Ionicons name="chevron-back" size={22} color="black" />
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.circleBtn, isLiked && styles.likedBtn]}
        onPress={() => setIsLiked(!isLiked)}
      >
        <Ionicons 
          name={isLiked ? "heart" : "heart-outline"} 
          size={22} 
          color={isLiked ? "#FF6B6B" : "black"} 
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  topButtons: {
    position: "absolute",
    top: 50,
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circleBtn: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  likedBtn: {
    backgroundColor: "#FFF5F5",
  },
});
