import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { ShoppingCart, Zap, Radio, Battery } from "lucide-react-native"

const { width } = Dimensions.get("window")

export default function TechnologyScreen() {
  const specs = [
    { label: "HYBRID LIFT SYSTEM", value: "Vertical take-off & fixed-wing efficiency" },
    { label: "PAYLOAD CAPACITY", value: "Up to 5kg" },
    { label: "RANGE", value: "Up to 80km in a single charge" },
    { label: "TOP SPEED", value: "100 km/h" },
    { label: "BATTERY SYSTEM", value: "Sustainable lithium-ion packs" },
    { label: "NAVIGATION", value: "Fully autonomous GPS + obstacle detection" },
  ]

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Logo</Text>
        <ShoppingCart color="#1f2937" size={24} />
      </View>

      {/* Hero Section */}
      <LinearGradient
        colors={["#c084fc", "#a855f7"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.heroSection}
      >
        <Text style={styles.heroTitle}>Flagship VTOL Drone</Text>
        <Text style={styles.heroSubtitle}>
          Every flight is powered by intelligent systems designed for speed, safety and precision.
        </Text>
      </LinearGradient>

      {/* Features Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Designed for reliability.</Text>

        <View style={styles.featureCard}>
          <View style={styles.featureIcon}>
            <Zap color="#a855f7" size={28} />
          </View>
          <Text style={styles.featureTitle}>Smart Delivery Drones</Text>
          <Text style={styles.featureDesc}>
            Our drones are equipped with advanced sensors, GPS and obstacle detection to ensure safe and efficient
            delivery - even in challenging terrain.
          </Text>
        </View>

        <View style={styles.featureCard}>
          <View style={styles.featureIcon}>
            <Radio color="#a855f7" size={28} />
          </View>
          <Text style={styles.featureTitle}>Real-Time Tracking</Text>
          <Text style={styles.featureDesc}>
            Our system calculates the fastest route and updates every second for full transparency.
          </Text>
        </View>

        <View style={styles.featureCard}>
          <View style={styles.featureIcon}>
            <Battery color="#a855f7" size={28} />
          </View>
          <Text style={styles.featureTitle}>Intelligent Dispatch System</Text>
          <Text style={styles.featureDesc}>
            Our drones are built with clean, rechargeable energy systems - reducing emissions while improving delivery
            speed and reliability.
          </Text>
        </View>
      </View>

      {/* Product Specs */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Product Spec</Text>
        <View style={styles.specsContainer}>
          <Text style={styles.specsLabel}>Overview</Text>
          {specs.map((spec, index) => (
            <View key={index} style={styles.specRow}>
              <Text style={styles.specLabel}>{spec.label}</Text>
              <Text style={styles.specValue}>{spec.value}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f2937",
  },
  heroSection: {
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
    lineHeight: 20,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 20,
  },
  featureCard: {
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#e9d5ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 8,
  },
  featureDesc: {
    fontSize: 13,
    color: "#6b7280",
    lineHeight: 18,
  },
  specsContainer: {
    backgroundColor: "#f9fafb",
    borderRadius: 12,
    padding: 16,
  },
  specsLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 12,
  },
  specRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  specLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1f2937",
  },
  specValue: {
    fontSize: 12,
    color: "#6b7280",
  },
})
