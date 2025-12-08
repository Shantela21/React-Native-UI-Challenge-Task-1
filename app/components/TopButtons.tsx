import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function TopButtons() {
  return (
    <View style={styles.topButtons}>
      <TouchableOpacity style={styles.circleBtn}>
        <Ionicons name="chevron-back" size={22} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleBtn}>
        <Ionicons name="heart-outline" size={22} color="black" />
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
});
