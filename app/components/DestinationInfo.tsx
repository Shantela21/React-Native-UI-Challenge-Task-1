import { Ionicons } from "@expo/vector-icons";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export default function DestinationInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.locationRow}>
        <View style={styles.locationInfo}>
          <View style={styles.locationHeader}>
            <Ionicons name="location" size={16} color="#FF6B6B" />
            <Text style={styles.countryText}>INDONESIA</Text>
          </View>
          <Text style={styles.placeName}>Bali, Indonesia</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>4.5</Text>
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Ionicons
                key={star}
                name={star <= 4 ? "star" : "star-outline"}
                size={12}
                color="#FFD700"
              />
            ))}
          </View>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Bali is a beautiful island that is famous for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  locationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  locationInfo: {
    flex: 1,
  },
  locationHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  countryText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#FF6B6B",
    marginLeft: 5,
    letterSpacing: 1,
  },
  placeName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2D3748",
  },
  ratingContainer: {
    alignItems: "center",
    backgroundColor: "#F7FAFC",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2D3748",
  },
  stars: {
    flexDirection: "row",
    marginTop: 2,
  },
  descriptionContainer: {
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#4A5568",
  },
});
