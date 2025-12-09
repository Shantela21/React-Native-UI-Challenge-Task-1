import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TourCardProps {
  id: number;
  title: string;
  duration: string;
  price: string;
  rating: number;
  reviews: number;
  imageSource: any;
}

export default function TourCard({ 
  id, 
  title, 
  duration, 
  price, 
  rating, 
  reviews, 
  imageSource 
}: TourCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.cardImage} />
          <TouchableOpacity 
            style={styles.heartButton}
            onPress={() => setIsLiked(!isLiked)}
          >
            <Ionicons 
              name={isLiked ? "heart" : "heart-outline"} 
              size={20} 
              color={isLiked ? "#FF6B6B" : "#FFFFFF"} 
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.durationText}>{duration} • from {price}</Text>
          
          <View style={styles.cardFooter}>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>{rating}</Text>
              <Ionicons name="star" size={14} color="#black" />
              <Text style={styles.reviewsText}>{reviews} reviews</Text>
            </View>
            
            <TouchableOpacity style={styles.navButton}>
              <Ionicons name="chevron-forward" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 280,
    marginRight: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
  },
  heartButton: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 32,
    height: 32,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A202C",
    marginBottom: 4,
  },
  durationText: {
    fontSize: 14,
    color: "#4A5568",
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1A202C",
    marginRight: 4,
  },
  reviewsText: {
    fontSize: 12,
    color: "#718096",
    marginLeft: 4,
  },
  navButton: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
});
