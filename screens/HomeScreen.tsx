"use client"

import { useRef } from "react"
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Animated } from "react-native"
// import { LinearGradient } from "expo-linear-gradient"
// import { ShoppingCart, Zap, Users } from "lucide-react-native"

const { width, height } = Dimensions.get("window")

export default function HomeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current

  const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })

  const heroOpacity = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 0.3],
    extrapolate: "clamp",
  })

  const heroScale = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 0.95],
    extrapolate: "clamp",
  })

  return (
    <ScrollView
      style={styles.container}
      scrollEventThrottle={16}
      onScroll={handleScroll}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Logo</Text>
        <ShoppingCart color="#1f2937" size={24} />
      </View>

      {/* Hero Section */}
      <Animated.View
        style={[
          styles.heroSection,
          {
            opacity: heroOpacity,
            transform: [{ scale: heroScale }],
          },
        ]}
      >
        <LinearGradient
          colors={["#6b21a8", "#4c1d95"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroGradient}
        >
          <Text style={styles.heroTitle}>Sell Smarter. Deliver Faster with Yspace</Text>
          <Text style={styles.heroSubtitle}>
            Join the future of delivery — connect your business to customers through drone-powered logistics.
          </Text>
          <TouchableOpacity style={styles.heroButton}>
            <Text style={styles.heroButtonText}>Become a Vendor</Text>
          </TouchableOpacity>
        </LinearGradient>
      </Animated.View>

      {/* Stats Section */}
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

      {/* Services Section */}
      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>Only Top notch Solution.</Text>
        <View style={styles.servicesGrid}>
          <View style={styles.serviceCard}>
            <ShoppingCart color="#a855f7" size={32} />
            <Text style={styles.serviceTitle}>Shop on Marketplace</Text>
            <Text style={styles.serviceDesc}>Discover local vendors, explore categories, and order what you need.</Text>
            <TouchableOpacity>
              <Text style={styles.learnMore}>Learn More →</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.serviceCard}>
            <Zap color="#a855f7" size={32} />
            <Text style={styles.serviceTitle}>Send Packages Instantly</Text>
            <Text style={styles.serviceDesc}>
              Need to get something across town? Book a drone, drop it off and track it.
            </Text>
            <TouchableOpacity>
              <Text style={styles.learnMore}>Learn More →</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.serviceCard}>
            <Users color="#a855f7" size={32} />
            <Text style={styles.serviceTitle}>Partner your Business</Text>
            <Text style={styles.serviceDesc}>
              Join Yspace to reach more customers and expand your delivery network.
            </Text>
            <TouchableOpacity>
              <Text style={styles.learnMore}>Learn More →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Any item at all, shop at Yspace.</Text>
        <View style={styles.categoryGrid}>
          <View style={styles.categoryCard}>
            <Text style={styles.categoryName}>Food & Groceries</Text>
          </View>
          <View style={styles.categoryCard}>
            <Text style={styles.categoryName}>Electronics</Text>
          </View>
          <View style={styles.categoryCard}>
            <Text style={styles.categoryName}>Fashion & Beauty</Text>
          </View>
          <View style={styles.categoryCard}>
            <Text style={styles.categoryName}>Health & Wellness</Text>
          </View>
        </View>
      </View>

      {/* How It Works */}
      <View style={styles.howItWorksSection}>
        <Text style={styles.sectionTitle}>How Yspace Works</Text>
        <View style={styles.stepContainer}>
          <View style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>1</Text>
            </View>
            <Text style={styles.stepTitle}>Shop or Send</Text>
            <Text style={styles.stepDesc}>Browse vendors or send your own items</Text>
          </View>

          <View style={styles.stepDivider} />

          <View style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>2</Text>
            </View>
            <Text style={styles.stepTitle}>Drone Takes Off</Text>
            <Text style={styles.stepDesc}>Our drone automatically delivers your order</Text>
          </View>

          <View style={styles.stepDivider} />

          <View style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>3</Text>
            </View>
            <Text style={styles.stepTitle}>Track & Receive</Text>
            <Text style={styles.stepDesc}>Real-time tracking to your doorstep</Text>
          </View>
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
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 16,
    overflow: "hidden",
  },
  heroGradient: {
    padding: 24,
    minHeight: 280,
    justifyContent: "center",
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
    marginBottom: 20,
    lineHeight: 20,
  },
  heroButton: {
    backgroundColor: "#a855f7",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  heroButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
  statsSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#f3f4f6",
  },
  statCard: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
  },
  statLabel: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },
  servicesSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 16,
  },
  servicesGrid: {
    gap: 12,
  },
  serviceCard: {
    backgroundColor: "#1f2937",
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 12,
    marginBottom: 8,
  },
  serviceDesc: {
    fontSize: 13,
    color: "#d1d5db",
    lineHeight: 18,
    marginBottom: 12,
  },
  learnMore: {
    color: "#a855f7",
    fontWeight: "600",
    fontSize: 13,
  },
  ctaSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#f0fdf4",
  },
  ctaTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 16,
  },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  categoryCard: {
    flex: 1,
    minWidth: "45%",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  categoryName: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1f2937",
  },
  howItWorksSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  stepContainer: {
    marginTop: 16,
  },
  step: {
    alignItems: "center",
    marginVertical: 12,
  },
  stepNumber: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#a855f7",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  stepNumberText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 4,
  },
  stepDesc: {
    fontSize: 13,
    color: "#6b7280",
    textAlign: "center",
  },
  stepDivider: {
    height: 24,
    width: 2,
    backgroundColor: "#e5e7eb",
    alignSelf: "center",
    marginVertical: 8,
  },
})
