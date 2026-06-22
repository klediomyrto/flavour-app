// ============================================================
// theme.js  —  One place for all colors, spacing and fonts.
// Keeping design values here means the whole app stays
// consistent and is easy to re-skin later.
// ============================================================

export const colors = {
  background: '#FFFBF5', // warm cream
  surface: '#FFFFFF',
  surfaceAlt: '#F4ECE2', // soft beige for chips / placeholders

  text: '#2B2622', // near-black, warm
  textMuted: '#9A8F84', // soft grey-brown

  primary: '#E8553B', // terracotta / coral
  primarySoft: '#FCE9E3', // light tint of primary

  accent: '#F2A93B', // amber (used for ratings)
  border: '#EEE6DB',
  shadow: '#2B2622',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 10,
  md: 16,
  lg: 24,
  pill: 999,
};

export const font = {
  // We use system fonts but lean on size + weight for hierarchy.
  h1: { fontSize: 30, fontWeight: '800' },
  h2: { fontSize: 22, fontWeight: '700' },
  h3: { fontSize: 18, fontWeight: '700' },
  body: { fontSize: 15, fontWeight: '400' },
  small: { fontSize: 13, fontWeight: '500' },
};
