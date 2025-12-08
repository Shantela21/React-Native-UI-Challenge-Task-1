import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const activities = [
  { id: 1, name: "Surfing", icon: "water", price: "$45" },
  { id: 2, name: "Hiking", icon: "walk", price: "$30" },
  { id: 3, name: "Diving", icon: "boat", price: "$60" },
  { id: 4, name: "Photography", icon: "camera", price: "$35" },
];

export default function ActivitiesSection() {
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);

  const handleActivityPress = (activity: typeof activities[0]) => {
    setSelectedActivity(activity.id);
    Alert.alert(
      "Activity Selected",
      `You've selected ${activity.name} for ${activity.price}. Would you like to add this to your itinerary?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Add", onPress: () => console.log(`Added ${activity.name} to itinerary`) }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Activities</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See all</Text>
          <Ionicons name="chevron-forward" size={14} color="#4299E1" />
        </TouchableOpacity>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.activitiesRow}>
          {activities.map((activity) => (
            <TouchableOpacity 
              key={activity.id} 
              style={[
                styles.activityCard,
                selectedActivity === activity.id && styles.selectedActivityCard
              ]}
              onPress={() => handleActivityPress(activity)}
            >
              <View style={[
                styles.iconContainer,
                selectedActivity === activity.id && styles.selectedIconContainer
              ]}>
                <Ionicons 
                  name={activity.icon as any} 
                  size={24} 
                  color={selectedActivity === activity.id ? "#FFFFFF" : "#4299E1"} 
                />
              </View>
              <Text style={[
                styles.activityName,
                selectedActivity === activity.id && styles.selectedActivityName
              ]}>{activity.name}</Text>
              <Text style={styles.activityPrice}>{activity.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2D3748",
  },
  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    fontSize: 14,
    color: "#4299E1",
    marginRight: 4,
  },
  activitiesRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  activityCard: {
    backgroundColor: "#F7FAFC",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    marginRight: 12,
    minWidth: 100,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  activityName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2D3748",
    marginBottom: 4,
  },
  activityPrice: {
    fontSize: 12,
    color: "#718096",
  },
  selectedActivityCard: {
    backgroundColor: "#EBF8FF",
    borderWidth: 1,
    borderColor: "#4299E1",
  },
  selectedIconContainer: {
    backgroundColor: "#4299E1",
  },
  selectedActivityName: {
    color: "#2B6CB6",
  },
});
