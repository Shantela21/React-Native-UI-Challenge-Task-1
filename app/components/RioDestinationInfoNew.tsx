import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RioDestinationInfoNew() {
  const [isExpanded, setIsExpanded] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.destinationCard}>
        <View style={styles.locationRow}>
          <Text style={styles.destinationTitle}>Rio de Janeiro</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFA500" />
            <Text style={styles.ratingText}>5.0</Text>
          </View>
        </View>

        <View style={styles.locationRow}>
          <View style={styles.locationInfo}>
            <View style={styles.flagContainer}>
              <View style={styles.flag}>
                <View style={styles.greenBackground} />
                <View style={styles.yellowDiamond} />
                <View style={styles.blueCircle} />
              </View>
            </View>
            <Text style={styles.countryText}>Brazil</Text>
          </View>
          <View style={styles.ratingRow}>
            <TouchableOpacity>
              <Text style={styles.reviewsText}>143 reviews</Text>
            </TouchableOpacity>
          </View>
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

        <View style={styles.upcomingToursSection}>
          <View style={styles.toursHeader}>
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
            <View style={styles.tourCard}>
              <View style={styles.tourImageContainer}>
                <Image
                  source={require("../../assets/images/card 1.webp")}
                  style={styles.tourImage}
                />
                  <TouchableOpacity 
                        style={[styles.heartButton, isLiked && styles.likedBtn]}
                        onPress={() => setIsLiked(!isLiked)}
                      >
                        <Ionicons 
                          name={isLiked ? "heart" : "heart-outline"} 
                          size={22} 
                          color={isLiked ? "#FF6B6B" : "black"} 
                        />
                      </TouchableOpacity>
              </View>
              <View style={styles.tourContent}>
                <Text style={styles.tourTitle}>Iconic Brazil</Text>
                <Text style={styles.tourDuration}>
                  8 days • from $659/person
                </Text>
                <View style={styles.tourFooter}>
                  <View style={styles.tourRating}>
                    <Text style={styles.tourRatingText}>4.6</Text>
                    <Ionicons name="star" size={14} color="#FFA500" />
                    <Text style={styles.tourReviewsText}>56 reviews</Text>
                  </View>
                  <TouchableOpacity style={styles.navButton}>
                    <Ionicons
                      name="chevron-forward"
                      size={16}
                      color="#FFFFFF"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.tourCard}>
              <View style={styles.tourImageContainer}>
                <Image
                  source={require("../../assets/images/card 2.jpg")}
                  style={styles.tourImage}
                />
                <TouchableOpacity style={styles.heartButton}>
                  <Ionicons name="heart-outline" size={20} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
              <View style={styles.tourContent}>
                <Text style={styles.tourTitle}>Beach</Text>
                <Text style={styles.tourDuration}>8 days</Text>
                <View style={styles.tourFooter}>
                  <View style={styles.tourRating}>
                    <Text style={styles.tourRatingText}>4.8</Text>
                    <Ionicons name="star" size={14} color="#FFA500" />
                  </View>
                  <TouchableOpacity style={styles.navButton}>
                    <Ionicons
                      name="chevron-forward"
                      size={16}
                      color="#FFFFFF"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -120,
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
  flagContainer: {
    marginRight: 8,
  },
  flag: {
    width: 20,
    height: 14,
    borderRadius: 2,
    overflow: "hidden",
  },
  greenBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#009739",
  },
  yellowDiamond: {
    position: "absolute",
    width: 12,
    height: 8,
    backgroundColor: "#FEDD00",
    transform: [{ rotate: "45deg" }],
    left: 4,
    top: 3,
  },
  blueCircle: {
    position: "absolute",
    width: 6,
    height: 6,
    backgroundColor: "#012169",
    borderRadius: 3,
    left: 7,
    top: 4,
  },
  countryText: {
    fontSize: 16,
    color: "#4A5568",
  },
  ratingRow: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 4,
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
  upcomingToursSection: {
    marginTop: 24,
  },
  toursHeader: {
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
  tourCard: {
    width: 280,
    marginRight: 16,
    backgroundColor: "#F8F9FA",
    borderRadius: 16,
    overflow: "hidden",
  },
  tourImageContainer: {
    position: "relative",
  },
  tourImage: {
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
    backgroundColor: "white",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  tourContent: {
    padding: 16,
  },
  tourTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A202C",
    marginBottom: 4,
  },
  tourDuration: {
    fontSize: 14,
    color: "#4A5568",
    marginBottom: 12,
  },
  tourFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tourRating: {
    flexDirection: "row",
    alignItems: "center",
  },
  tourRatingText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1A202C",
    marginRight: 4,
  },
  tourReviewsText: {
    fontSize: 12,
    color: "#718096",
    marginLeft: 4,
  },
  navButton: {
    width: 32,
    height: 32,
    backgroundColor: "#2D3748",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  likedBtn: {
    backgroundColor: "#FFF5F5",
  },
});
