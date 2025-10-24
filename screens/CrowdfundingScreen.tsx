import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { ShoppingCart, Check } from "lucide-react-native"

const { width } = Dimensions.get("window")

export default function CrowdfundingScreen() {
  const tiers = [
    {
      name: "Nano",
      price: "$10",
      benefits: ["Thank you email"],
    },
    {
      name: "Micro",
      price: "$50",
      benefits: ["Thank you email", "Digital wallpaper"],
    },
    {
      name: "Meso",
      price: "$250",
      benefits: ["Thank you email", "Digital wallpaper", "Exclusive updates"],
    },
    {
      name: "Macro",
      price: "$1,000",
      benefits: ["Thank you email", "Digital wallpaper", "Exclusive updates", "Merchandise"],
    },
  ]

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Logo</Text>
        <ShoppingCart color="#1f2937" size={24} />
      </View>

      {/* Hero */}
      <LinearGradient
        colors={["#6b21a8", "#4c1d95"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.heroSection}
      >
        <Text style={styles.heroTitle}>Join Us in Building Africa's Drone Delivery Future</Text>
        <Text style={styles.heroSubtitle}>
          Support Yspace as we scale drone-powered logistics to connect businesses and communities faster than ever.
        </Text>
      </LinearGradient>

      {/* Stats */}
      <View style={styles.statsSection}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>1,000+</Text>
          <Text style={styles.statLabel}>Deliveries</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>23+</Text>
          <Text style={styles.statLabel}>Businesses</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>100%</Text>
          <Text style={styles.statLabel}>Reliable</Text>
        </View>
      </View>

      {/* Why Support */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why We Need Your Support</Text>
        <Text style={styles.description}>
          We're on a mission to make drone delivery accessible to every business and home. Your contribution helps us
          expand our drone fleet, build smarter delivery hubs, and bring reliable service to more communities across
          Africa.
        </Text>
      </View>

      {/* Where Support Goes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Where Your Support Goes</Text>
        <View style={styles.supportCard}>
          <Text style={styles.supportTitle}>Build More Drones</Text>
          <Text style={styles.supportDesc}>Help scale our technology and reach.</Text>
        </View>
        <View style={styles.supportCard}>
          <Text style={styles.supportTitle}>Expand Access</Text>
          <Text style={styles.supportDesc}>Bring delivery to remote and underserved areas.</Text>
        </View>
        <View style={styles.supportCard}>
          <Text style={styles.supportTitle}>Empower Local Vendors</Text>
          <Text style={styles.supportDesc}>Enable small businesses to reach more customers.</Text>
        </View>
      </View>

      {/* Pricing Tiers */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support Tiers</Text>
        <View style={styles.tiersContainer}>
          {tiers.map((tier, index) => (
            <View key={index} style={styles.tierCard}>
              <Text style={styles.tierName}>{tier.name}</Text>
              <Text style={styles.tierPrice}>{tier.price}</Text>
              <TouchableOpacity style={styles.selectButton}>
                <Text style={styles.selectButtonText}>Select</Text>
              </TouchableOpacity>
              <View style={styles.benefitsList}>
                {tier.benefits.map((benefit, i) => (
                  <View key={i} style={styles.benefitItem}>
                    <Check color="#10b981" size={16} />
                    <Text style={styles.benefitText}>{benefit}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* CTA */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Support the Future of Delivery</Text>
        <Text style={styles.ctaDesc}>
          Every contribution directly fuels our mission to advance drone technology in Africa.
        </Text>
        <TouchableOpacity style={styles.donateButton}>
          <Text style={styles.donateButtonText}>Donate Now</Text>
        </TouchableOpacity>
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
    paddingVertical: 32,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 14,
    color: "#e5e7eb",
    lineHeight: 20,
  },
  statsSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#15803d",
  },
  statCard: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
  },
  statLabel: {
    fontSize: 12,
    color: "#dcfce7",
    marginTop: 4,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 12,
  },
  description: {
    fontSize: 13,
    color: "#6b7280",
    lineHeight: 18,
  },
  supportCard: {
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  supportTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 4,
  },
  supportDesc: {
    fontSize: 12,
    color: "#6b7280",
  },
  tiersContainer: {
    gap: 12,
  },
  tierCard: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#f9fafb",
  },
  tierName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1f2937",
  },
  tierPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#a855f7",
    marginVertical: 8,
  },
  selectButton: {
    backgroundColor: "#a855f7",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  selectButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  benefitsList: {
    gap: 6,
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  benefitText: {
    fontSize: 11,
    color: "#6b7280",
  },
  ctaSection: {
    marginHorizontal: 16,
    marginVertical: 24,
    backgroundColor: "#fef3c7",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  ctaTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 8,
  },
  ctaDesc: {
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 12,
  },
  donateButton: {
    backgroundColor: "#a855f7",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  donateButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 13,
  },
})
