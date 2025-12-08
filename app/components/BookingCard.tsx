import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BookingCard() {
  const [isPressed, setIsPressed] = useState(false);

  const handleBookNow = () => {
    Alert.alert(
      "Booking Confirmed!",
      "Your trip to Bali has been booked successfully.",
      [{ text: "OK", style: "default" }]
    );
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.dateSection}>
          <View style={styles.dateColumn}>
            <Text style={styles.dateLabel}>Date</Text>
            <Text style={styles.dateValue}>12 Oct</Text>
            <Text style={styles.dateValue}>13 Oct</Text>
          </View>
          <View style={styles.timeSection}>
            <View style={styles.timeRow}>
              <Ionicons name="airplane" size={16} color="#718096" />
              <Text style={styles.timeText}>2h 30m</Text>
            </View>
            <View style={styles.dashedLine} />
            <View style={styles.timeRow}>
              <Ionicons name="airplane" size={16} color="#718096" />
              <Text style={styles.timeText}>2h 30m</Text>
            </View>
          </View>
        </View>

        <View style={styles.priceSection}>
          <View>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.priceValue}>$899</Text>
          </View>
          <TouchableOpacity 
            style={[
              styles.bookButton,
              isPressed && styles.bookButtonPressed
            ]}
            onPress={handleBookNow}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
          >
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
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
  dateSection: {
    flexDirection: "row",
    marginBottom: 20,
  },
  dateColumn: {
    flex: 1,
  },
  dateLabel: {
    fontSize: 12,
    color: "#718096",
    marginBottom: 8,
  },
  dateValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2D3748",
    marginBottom: 12,
  },
  timeSection: {
    flex: 2,
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    fontSize: 14,
    color: "#718096",
    marginLeft: 8,
  },
  dashedLine: {
    height: 1,
    backgroundColor: "#E2E8F0",
    width: "80%",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginVertical: 8,
  },
  priceSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    paddingTop: 15,
  },
  priceLabel: {
    fontSize: 12,
    color: "#718096",
  },
  priceValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2D3748",
  },
  bookButton: {
    backgroundColor: "#4299E1",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  bookButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  bookButtonPressed: {
    backgroundColor: "#3182CE",
    transform: [{ scale: 0.98 }],
  },
});
