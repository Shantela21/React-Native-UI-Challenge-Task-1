import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export default function GallerySection() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Gallery</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.galleryRow}>
          <Image
            source={require("../../assets/images/card 1.webp")}
            style={styles.galleryImage}
          />
          <Image
            source={require("../../assets/images/card 2.jpg")}
            style={styles.galleryImage}
          />
          <Image
            source={require("../../assets/images/background.png")}
            style={styles.galleryImage}
          />
          <Image
            source={require("../../assets/images/card 1.webp")}
            style={styles.galleryImage}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2D3748",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  galleryRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  galleryImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginRight: 10,
  },
});
