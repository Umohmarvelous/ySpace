import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from "react-native"
import { ShoppingCart, Mail, Globe, Briefcase, Heart } from "lucide-react-native"

export default function ProfileScreen() {
  const menuItems = [
    { icon: Mail, label: "Contact Us", action: () => Linking.openURL("mailto:hello@yspace.inc") },
    { icon: Briefcase, label: "Careers", action: () => {} },
    { icon: Globe, label: "Blog", action: () => {} },
    { icon: Heart, label: "About Us", action: () => {} },
  ]

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Logo</Text>
        <ShoppingCart color="#1f2937" size={24} />
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileCard}>
          <Text style={styles.profileTitle}>Yspace</Text>
          <Text style={styles.profileSubtitle}>Africa's Drone Delivery Platform</Text>
        </View>
      </View>

      {/* Menu Items */}
      <View style={styles.menuSection}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={item.action}>
            <item.icon color="#a855f7" size={24} />
            <Text style={styles.menuLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Info Section */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>About Yspace</Text>
        <Text style={styles.infoText}>
          Yspace is building Africa's first indigenous drone delivery company. We're connecting businesses and
          communities through innovative drone-powered logistics.
        </Text>
      </View>

      {/* Social Links */}
      <View style={styles.socialSection}>
        <Text style={styles.socialTitle}>Follow Us</Text>
        <View style={styles.socialLinks}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Instagram</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Yspace Limited. All rights reserved.</Text>
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
  profileSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  profileCard: {
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
  },
  profileSubtitle: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 4,
  },
  menuSection: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  menuLabel: {
    fontSize: 16,
    color: "#1f2937",
    marginLeft: 16,
    fontWeight: "500",
  },
  infoSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 12,
  },
  infoText: {
    fontSize: 13,
    color: "#6b7280",
    lineHeight: 20,
  },
  socialSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  socialTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 12,
  },
  socialLinks: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  socialButton: {
    flex: 1,
    minWidth: "45%",
    backgroundColor: "#a855f7",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  socialButtonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 12,
    textAlign: "center",
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: "center",
  },
  footerText: {
    fontSize: 11,
    color: "#9ca3af",
  },
})
