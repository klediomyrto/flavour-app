import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { categories, recipes } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import CategoryChip from "../components/CategoryChip";
import { colors, spacing, font } from "../theme/theme";

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Derive the visible list from state. Runs on every render.
  const visibleRecipes = recipes.filter((recipe) => {
    const matchesCategory = category === "All" || recipe.category === category;
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const Header = () => (
    <View>
      <Text style={styles.hello}>Hello, Chef</Text>
      <Text style={styles.title}>What are you{"\n"}cooking today?</Text>

      <SearchBar value={search} onChangeText={setSearch} />

      {/* Horizontal scrolling category chips */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chips}
        renderItem={({ item }) => (
          <CategoryChip
            label={item}
            active={item === category}
            onPress={() => setCategory(item)}
          />
        )}
      />

      <Text style={styles.sectionTitle}>
        {visibleRecipes.length} recipe{visibleRecipes.length !== 1 ? "s" : ""}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <FlatList
        data={visibleRecipes}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={Header}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            onPress={() => navigation.navigate("Detail", { recipe: item })}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No recipes found. Try another search.
          </Text>
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  hello: {
    ...font.small,
    color: colors.textMuted,
    marginTop: spacing.md,
  },
  title: {
    ...font.h1,
    color: colors.text,
    marginVertical: spacing.sm,
    lineHeight: 36,
  },
  chips: {
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  sectionTitle: {
    ...font.h3,
    color: colors.text,
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  empty: {
    ...font.body,
    color: colors.textMuted,
    textAlign: "center",
    marginTop: spacing.xl,
  },
});
