import { ScrollView, StyleSheet, View } from "react-native";
import BackgroundImage from "./components/BackgroundImage";
import RioDestinationInfoNew from "./components/RioDestinationInfoNew";
import UpcomingTours from "./components/UpcomingTours";

export default function DestinationScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <BackgroundImage />
      <RioDestinationInfoNew />
      <UpcomingTours />
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
