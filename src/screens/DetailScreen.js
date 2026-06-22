import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius, font } from '../theme/theme';

// A tiny inline helper component for the meta info pills.
function MetaItem({ icon, label }) {
  return (
    <View style={styles.metaItem}>
      <Ionicons name={icon} size={18} color={colors.primary} />
      <Text style={styles.metaItemText}>{label}</Text>
    </View>
  );
}

export default function DetailScreen({ route, navigation }) {
  // The recipe object was passed in when we navigated here.
  const { recipe } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero image */}
        <Image source={{ uri: recipe.image }} style={styles.hero} />

        {/* Floating top buttons (back + favorite) */}
        <SafeAreaView style={styles.topBar} edges={['top']}>
          <TouchableOpacity style={styles.roundBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={22} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.roundBtn}
          >
            <Ionicons
              name={'heart'}
              size={22}
              color={colors.primary}
            />
          </TouchableOpacity>
        </SafeAreaView>

        {/* Content sheet that overlaps the image slightly */}
        <View style={styles.sheet}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{recipe.category}</Text>
          </View>

          <Text style={styles.title}>{recipe.title}</Text>
          <Text style={styles.description}>{recipe.description}</Text>

          {/* Meta row */}
          <View style={styles.metaRow}>
            <MetaItem icon="time-outline" label={recipe.time} />
            <MetaItem icon="speedometer-outline" label={recipe.difficulty} />
            <MetaItem icon="people-outline" label={`${recipe.servings} serv.`} />
            <MetaItem icon="flame-outline" label={`${recipe.calories} kcal`} />
          </View>

          {/* Ingredients */}
          <Text style={styles.sectionTitle}>Ingredients</Text>
          {recipe.ingredients.map((item, index) => (
            <View key={index} style={styles.ingredientRow}>
              <View style={styles.dot} />
              <Text style={styles.ingredientText}>{item}</Text>
            </View>
          ))}

          {/* Steps */}
          <Text style={styles.sectionTitle}>Steps</Text>
          {recipe.steps.map((step, index) => (
            <View key={index} style={styles.stepRow}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  hero: {
    width: '100%',
    height: 320,
    backgroundColor: colors.surfaceAlt,
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
  },
  roundBtn: {
    width: 42,
    height: 42,
    borderRadius: radius.pill,
    backgroundColor: 'rgba(255,255,255,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.sm,
  },
  sheet: {
    marginTop: -spacing.lg,
    backgroundColor: colors.background,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primarySoft,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radius.pill,
    marginBottom: spacing.sm,
  },
  badgeText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 12,
  },
  title: {
    ...font.h1,
    color: colors.text,
  },
  description: {
    ...font.body,
    color: colors.textMuted,
    lineHeight: 22,
    marginTop: spacing.sm,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
  },
  metaItemText: {
    ...font.small,
    color: colors.text,
    marginLeft: 6,
  },
  sectionTitle: {
    ...font.h2,
    color: colors.text,
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },
  ingredientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginRight: spacing.md,
  },
  ingredientText: {
    ...font.body,
    color: colors.text,
  },
  stepRow: {
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  stepNumberText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },
  stepText: {
    ...font.body,
    color: colors.text,
    flex: 1,
    lineHeight: 22,
  },
});
