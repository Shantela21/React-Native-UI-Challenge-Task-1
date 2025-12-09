import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RioDestinationInfo() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.destinationCard}>
        <Text style={styles.destinationTitle}>Rio de Janeiro</Text>

        <View style={styles.locationRow}>
          <View style={styles.locationInfo}>
            <Text style={styles.countryText}>Brazil</Text>
          </View>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={16} color="#FFA500" />
            <Text style={styles.ratingText}>5.0</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.reviewsText}>143 reviews</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.descriptionContainer}>
          <Text
            style={styles.descriptionText}
            numberOfLines={isExpanded ? undefined : 3}
          >
            Rio de Janeiro, or simply Rio, is the second-most populous city in
            Brazil and the sixth-most populous in the Americas. Rio de Janeiro
            is the capital of the state of Rio de Janeiro, Brazil's third-most
            populous state, after São Paulo and Minas Gerais.
          </Text>
          <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
            <Text style={styles.readMoreText}>
              {isExpanded ? "Read less" : "Read more"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: -30,
   
  },
  destinationCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  destinationTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1A202C",
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  locationInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  countryText: {
    fontSize: 16,
    color: "#4A5568",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A202C",
    marginRight: 4,
    
  },
  reviewsText: {
    fontSize: 14,
    color: "#3182CE",
    textDecorationLine: "underline",
    marginLeft: 8,
  },
  descriptionContainer: {
    marginTop: 8,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#4A5568",
  },
  readMoreText: {
    fontSize: 14,
    color: "#3182CE",
    fontWeight: "500",
    marginTop: 8,
  },
});
