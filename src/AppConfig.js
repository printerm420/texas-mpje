// AppConfig.js - Central configuration for Texas MPJE exam settings
export const AppConfig = {
  // State-specific settings (change for cloning)
  stateName: 'Texas',
  examQuestions: 90,
  examTimeMinutes: 150,
  passingScore: 0.75, // 75%

  // Theme colors (Medical/Pharmacy green theme)
  colors: {
    primary: '#059669',        // Emerald Green (header, buttons, accents)
    primaryDark: '#047857',    // Dark Green
    accent: '#FACC15',         // Gold (unlock button, highlights)
    accentDark: '#EAB308',     // Dark Gold
    background: '#F1F5F9',     // Light Gray (screen background)
    white: '#FFFFFF',          // White (cards, tab bar)
    green: '#22C55E',          // Green (promo card, success)
    greenDark: '#16A34A',      // Dark Green
    textDark: '#1E293B',       // Dark text
    textMuted: '#64748B',      // Muted text (secondary labels)
    border: '#E2E8F0',         // Border color
    cardYellow: '#FEF3C7',     // Yellow card background
    cardYellowBorder: '#FDE68A', // Yellow card border
    error: '#EF4444',          // Red (errors, missed questions)
  },

  // Typography
  fonts: {
    regular: 'Inter_400Regular',
    medium: 'Inter_500Medium',
    semibold: 'Inter_600SemiBold',
    bold: 'Inter_700Bold',
  },

  // Spacing scale
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },

  // UI Strings
  strings: {
    appName: 'Texas MPJE Prep',
    unlockCTA: 'Unlock all',
    freeTestCTA: 'Take a free test',
    studyTab: 'Study',
    statsTab: 'Stats',
  },
};
