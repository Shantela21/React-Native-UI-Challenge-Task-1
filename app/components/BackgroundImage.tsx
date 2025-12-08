import { View, Image, StyleSheet } from "react-native";
import TopButtons from "../components/TopButtons";

export default function BackgroundImage() {
  return (
    <View style={styles.imageWrapper}>
      <Image
        source={require("../../assets/images/background.png")}
        style={styles.headerImage}
      />
      <TopButtons />
    </View>
  );
}
const styles = StyleSheet.create({
  imageWrapper: {
    width: "100%",
    height: 320,
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
});
