"use client"

import React from "react"
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { ShoppingCart } from "lucide-react-native"

const { width } = Dimensions.get("window")

export default function ServicesScreen() {
  const [expandedFAQ, setExpandedFAQ] = React.useState<number | null>(null)

  const faqs = [
    {
      question: "How does Yspace delivery work?",
      answer:
        "Once you place an order or schedule a pickup, our drones handle the delivery - fast, safe, and reliable.",
    },
    {
      question: "Can I shop and send packages on the same account?",
      answer: "Yes, one account lets you do both - shop from vendors or send your own items anytime.",
    },
    {
      question: "How fast is drone delivery?",
      answer: "Most deliveries arrive within 30 minutes to 2 hours, depending on distance and location.",
    },
    {
      question: "Is drone delivery safe?",
      answer:
        "Absolutely. Our drones follow strict safety regulations with obstacle detection and real-time monitoring.",
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
        colors={["#4c1d95", "#6b21a8"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.heroSection}
      >
        <Text style={styles.heroTitle}>Services</Text>
        <Text style={styles.heroSubtitle}>Shop from trusted vendors or send packages fast with drone delivery.</Text>
        <View style={styles.heroButtons}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Shop on Marketplace</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Send a Package</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Shop on Marketplace */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shop on Marketplace</Text>
        <View style={styles.marketplaceCard}>
          <View style={styles.categoryTags}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Food & Groceries</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Electronics</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Fashion & Beauty</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Health & Wellness</Text>
            </View>
          </View>
          <Text style={styles.marketplaceDesc}>
            Discover local vendors, explore categories, and order what you need - delivered by drone to your doorstep.
          </Text>
        </View>
      </View>

      {/* FAQs */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FAQs</Text>
        <Text style={styles.faqSubtitle}>Everything You Need to Know</Text>
        <View style={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <TouchableOpacity
              key={index}
              style={styles.faqItem}
              onPress={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
            >
              <View style={styles.faqHeader}>
                <Text style={styles.faqQuestion}>{faq.question}</Text>
                <Text style={styles.faqToggle}>{expandedFAQ === index ? "−" : "+"}</Text>
              </View>
              {expandedFAQ === index && <Text style={styles.faqAnswer}>{faq.answer}</Text>}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* CTA */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Send Packages</Text>
        <Text style={styles.ctaDesc}>
          Need to send something fast? Yspace delivers documents, gifts, and parcels to any location - securely and
          without delay.
        </Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Start Today</Text>
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
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 14,
    color: "#e5e7eb",
    marginBottom: 20,
    lineHeight: 20,
  },
  heroButtons: {
    gap: 12,
  },
  primaryButton: {
    backgroundColor: "#a855f7",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  secondaryButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  secondaryButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 16,
  },
  marketplaceCard: {
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    padding: 16,
  },
  categoryTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
  },
  tag: {
    backgroundColor: "#e5e7eb",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  tagText: {
    fontSize: 12,
    color: "#1f2937",
    fontWeight: "500",
  },
  marketplaceDesc: {
    fontSize: 13,
    color: "#6b7280",
    lineHeight: 18,
  },
  faqSubtitle: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 16,
  },
  faqContainer: {
    gap: 12,
  },
  faqItem: {
    backgroundColor: "#fce7f3",
    borderRadius: 8,
    padding: 12,
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  faqQuestion: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1f2937",
    flex: 1,
    marginRight: 12,
  },
  faqToggle: {
    fontSize: 18,
    color: "#a855f7",
    fontWeight: "bold",
  },
  faqAnswer: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 8,
    lineHeight: 18,
  },
  ctaSection: {
    marginHorizontal: 16,
    marginVertical: 24,
    backgroundColor: "#f0fdf4",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 8,
  },
  ctaDesc: {
    fontSize: 13,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 18,
  },
  ctaButton: {
    backgroundColor: "#a855f7",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
})
