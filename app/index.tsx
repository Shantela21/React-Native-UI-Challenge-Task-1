import { ScrollView, View, StyleSheet } from "react-native";
import BackgroundImage from "./components/BackgroundImage";



export default function DestinationScreen() {
  return (
    <ScrollView style={styles.container}>
      <BackgroundImage />
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
