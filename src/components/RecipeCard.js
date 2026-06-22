import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, spacing, radius, font } from "../theme/theme";
import { Ionicons } from '@expo/vector-icons';

const RecipeCard = ({ recipe, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress}>
      {/* Food photo */}
      <Image source={{ uri: recipe.image }} style={styles.image} />

      {/* Favorite heart sits on top of the image */}
      <TouchableOpacity
        style={styles.heart}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Ionicons name={"heart"} size={20} color={colors.primary} />
      </TouchableOpacity>

      {/* Category badge */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{recipe.category}</Text>
      </View>

      {/* Text content */}
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={1}>
          {recipe.title}
        </Text>

        <View style={styles.metaRow}>
          <Ionicons name="time-outline" size={15} color={colors.textMuted} />
          <Text style={styles.metaText}>{recipe.time}</Text>

          <Ionicons
            name="flame-outline"
            size={15}
            color={colors.textMuted}
            style={{ marginLeft: spacing.md }}
          />
          <Text style={styles.metaText}>{recipe.calories} kcal</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    marginBottom: spacing.md,
    overflow: "hidden",
    // soft shadow (iOS) + elevation (Android)
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 170,
    backgroundColor: colors.surfaceAlt,
  },
  heart: {
    position: "absolute",
    top: spacing.sm,
    right: spacing.sm,
    backgroundColor: "rgba(255,255,255,0.92)",
    width: 36,
    height: 36,
    borderRadius: radius.pill,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    position: "absolute",
    top: spacing.sm,
    left: spacing.sm,
    backgroundColor: "rgba(43,38,34,0.78)",
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radius.pill,
  },
  badgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  body: {
    padding: spacing.md,
  },
  title: {
    ...font.h3,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaText: {
    ...font.small,
    color: colors.textMuted,
    marginLeft: 4,
  },
});
