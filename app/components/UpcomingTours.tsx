import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TourCard from "./TourCard";

const tours = [
  {
    id: 1,
    title: "Iconic Brazil",
    duration: "8 days",
    price: "$659/person",
    rating: 4.6,
    reviews: 56,
    imageSource: require("../../assets/images/background.png"),
  },
  {
    id: 2,
    title: "Beach",
    duration: "8 days",
    price: "$599/person", 
    rating: 4.8,
    reviews: 42,
    imageSource: require("../../assets/images/card 2.jpg"),
  },
  {
    id: 3,
    title: "Mountain Adventure",
    duration: "6 days",
    price: "$799/person",
    rating: 4.7,
    reviews: 38,
    imageSource: require("../../assets/images/card 1.webp"),
  },
];

export default function UpcomingTours() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Upcoming tours</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See all</Text>
          <Ionicons name="chevron-forward" size={16} color="#3182CE" />
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.toursContainer}
      >
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            id={tour.id}
            title={tour.title}
            duration={tour.duration}
            price={tour.price}
            rating={tour.rating}
            reviews={tour.reviews}
            imageSource={tour.imageSource}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A202C",
  },
  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    fontSize: 14,
    color: "#3182CE",
    marginRight: 4,
  },
  toursContainer: {
    paddingRight: 20,
  },
});
