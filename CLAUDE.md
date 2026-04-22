# CLAUDE.md - Development Instructions

## Project Overview
You are building a **CA Notary Exam Prep App** using **React Native (Expo)**. This is an MVP focused on helping users pass the California Notary Public Exam with a professional, high-conversion design.

## Your Role
Act as a senior React Native developer with expertise in:
- Clean, modular component architecture
- Professional UI/UX design for educational apps
- Performance optimization for mobile
- Conversion-focused design patterns

## Core Principles

### 1. Code Quality
- **Functional Components Only:** Use React hooks (useState, useEffect, useContext)
- **Modular Design:** Every component should be reusable for future state apps
- **Self-Documenting Code:** Clear naming, minimal comments
- **Type Safety:** Use PropTypes for all components
- **Performance First:** Optimize re-renders, use React.memo where appropriate

### 2. Design Aesthetic
- **Professional Legal/Banking Feel:** Clean, trustworthy, premium
- **Color Palette:**
  - Primary: `#0F172A` (Navy)
  - Accent: `#FACC15` (Gold)
  - Secondary: `#1E293B` (Slate)
  - Success: `#10B981` (Green)
  - Error: `#EF4444` (Red)
  - Background: `#F8FAFC` (Light Gray)
- **Typography:** Inter font family (bold for headings, regular for body)
- **Spacing:** Use consistent scale (4, 8, 12, 16, 24, 32, 48)
- **Shadows:** Subtle, professional (avoid heavy drop shadows)

### 3. User Experience
- **Immediate Feedback:** Show answer correctness instantly
- **Progress Visibility:** Always show mastery score and streak
- **Conversion Optimization:** Make premium upsell prominent but not annoying
- **Accessibility:** Proper contrast ratios, touch target sizes (min 44x44)

## File Structure
```
Notary/
├── App.js                      # Entry point
├── app.json                    # Expo config
├── package.json
├── PRD.md                      # Product requirements
├── CLAUDE.md                   # This file
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.js       # Reusable button component
│   │   │   ├── Card.js         # Reusable card component
│   │   │   ├── ProgressBar.js  # Progress indicator
│   │   │   └── Header.js       # Sticky header
│   │   ├── quiz/
│   │   │   ├── QuestionCard.js # Question display
│   │   │   ├── AnswerOption.js # Answer button
│   │   │   └── Timer.js        # Countdown timer
│   │   └── stats/
│   │       ├── ProgressGauge.js # Circular progress
│   │       └── StatRow.js       # Stat display row
│   ├── screens/
│   │   ├── HomeScreen.js       # Main study screen
│   │   ├── QuizScreen.js       # Quiz interface
│   │   ├── ResultsScreen.js    # Score summary
│   │   └── StatsScreen.js      # Progress tracking
│   ├── data/
│   │   ├── app_config.js       # Colors, strings, constants
│   │   └── questions.json      # Question bank
│   ├── utils/
│   │   ├── storage.js          # AsyncStorage helpers
│   │   └── calculations.js     # Score/mastery logic
│   └── navigation/
│       └── AppNavigator.js     # React Navigation setup
└── assets/
    ├── fonts/
    └── images/
```

## Component Specifications

### Common Components

#### Button.js
```javascript
// Props: title, onPress, variant ('primary'|'secondary'|'outline'), disabled, icon
// Variants:
// - primary: Gold background (#FACC15), Navy text
// - secondary: Navy background (#0F172A), White text
// - outline: Transparent background, Navy border
```

#### Card.js
```javascript
// Props: children, onPress, style, variant ('default'|'premium'|'action')
// Features:
// - Rounded corners (12px)
// - Subtle shadow
// - Optional press animation
// - Premium variant has gold border
```

#### ProgressBar.js
```javascript
// Props: progress (0-100), color, height, showLabel
// Features:
// - Animated fill
// - Optional percentage label
// - Smooth transitions
```

#### Header.js
```javascript
// Props: masteryScore, dailyStreak, showBack
// Features:
// - Sticky positioning
// - Shows mastery % and streak icon
// - Optional back button
```

### Quiz Components

#### QuestionCard.js
```javascript
// Props: question, category, questionNumber, totalQuestions
// Features:
// - Category badge
// - Question number indicator
// - Clean typography
```

#### AnswerOption.js
```javascript
// Props: text, onPress, isSelected, isCorrect, isWrong, disabled
// States:
// - Default: White background, Navy border
// - Selected: Navy background, White text
// - Correct: Green background, White text
// - Wrong: Red background, White text
```

#### Timer.js
```javascript
// Props: duration (seconds), onExpire, isPaused
// Features:
// - Countdown display (MM:SS)
// - Warning state when < 5 minutes (red text)
// - Auto-pause on background
```

### Stats Components

#### ProgressGauge.js
```javascript
// Props: percentage, size, color, label
// Features:
// - Circular progress indicator
// - Animated fill
// - Center label with percentage
```

#### StatRow.js
```javascript
// Props: label, value, icon, trend ('up'|'down'|'neutral')
// Features:
// - Icon on left
// - Label and value
// - Optional trend indicator
```

## Screen Specifications

### HomeScreen.js
**Layout:**
1. Header (sticky)
   - Mastery Score: "72% Mastery"
   - Daily Streak: "🔥 5 days"
2. Premium Upsell Card (large, gold)
   - Lock icon
   - "UNLOCK ALL EXAM QUESTIONS"
   - Subtitle: "Get 200+ questions + detailed explanations"
3. Free Practice Card (blue)
   - "Take Free Practice Test"
   - "50 questions available"
4. Grid (2x2)
   - Daily Question: "📅 Today's Question"
   - Quick 10 Quiz: "⚡ Quick 10 Quiz"
   - Full Mock Exam: "📝 Full Mock Exam (45Q)"
   - Review Mistakes: "❌ Review Mistakes (12)"

**Behavior:**
- Load user progress from AsyncStorage on mount
- Update daily streak if last study date is yesterday
- Navigate to QuizScreen with appropriate mode on card press

### QuizScreen.js
**Layout:**
1. Header
   - Back button
   - Progress: "Question 5/10"
   - Timer (if mock exam)
2. Question Card
   - Category badge
   - Question text
3. Answer Options (4 buttons)
4. Bottom Actions
   - "Submit Answer" button (disabled until selection)
   - "Explanation" button (after submission)

**Behavior:**
- Show one question at a time
- Disable options after submission
- Show correct/wrong state immediately
- Track answered questions
- Navigate to ResultsScreen when complete

### ResultsScreen.js
**Layout:**
1. Score Display (large, centered)
   - Percentage: "82%"
   - Status: "PASS" (green) or "NEEDS WORK" (red)
   - Correct count: "37/45"
2. Category Breakdown
   - List of categories with accuracy
   - "Duties: 90%", "Journal: 75%", etc.
3. Actions
   - "Review Mistakes" button
   - "Retake Quiz" button
   - "Back to Home" button

**Behavior:**
- Calculate score and category breakdown
- Update user progress in AsyncStorage
- Update mastery score
- Save mistakes to review later

### StatsScreen.js
**Layout:**
1. Progress Gauge (large, centered)
   - "Test Readiness: 78%"
2. Stats Grid
   - Total Tests Taken
   - Average Accuracy
   - Current Streak
   - Questions Answered
3. Mastery by Topic (list)
   - Each category with progress bar
   - "Duties: 85%", "Journal: 70%", etc.

**Behavior:**
- Load all stats from AsyncStorage
- Calculate test readiness based on category mastery
- Show trends (up/down arrows)

## Data Specifications

### app_config.js
```javascript
export const COLORS = {
  primary: '#0F172A',
  accent: '#FACC15',
  secondary: '#1E293B',
  success: '#10B981',
  error: '#EF4444',
  background: '#F8FAFC',
  white: '#FFFFFF',
  gray: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
};

export const TYPOGRAPHY = {
  fontFamily: 'Inter',
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

export const QUIZ_CONFIG = {
  dailyQuestion: { count: 1, timer: null },
  quick10: { count: 10, timer: null },
  mockExam: { count: 45, timer: 3600 }, // 60 minutes
  passingScore: 0.7, // 70%
};

export const STRINGS = {
  appName: 'CA Notary Prep',
  premiumUpsell: 'UNLOCK ALL EXAM QUESTIONS',
  premiumSubtitle: 'Get 200+ questions + detailed explanations',
  // ... more strings
};
```

### questions.json
```json
[
  {
    "id": "q001",
    "category": "Duties",
    "question": "What is the maximum fee a California notary can charge for an acknowledgment?",
    "options": [
      "$10",
      "$15",
      "$20",
      "$25"
    ],
    "correctAnswer": 1,
    "explanation": "As of 2026, California notaries can charge a maximum of $15 per acknowledgment according to Government Code Section 8211.",
    "difficulty": "easy",
    "isPremium": false
  },
  {
    "id": "q002",
    "category": "Journal",
    "question": "How long must a notary keep their journal after their commission expires?",
    "options": [
      "1 year",
      "5 years",
      "10 years",
      "Permanently"
    ],
    "correctAnswer": 2,
    "explanation": "California law requires notaries to keep their journals for at least 10 years after the date of the last entry.",
    "difficulty": "medium",
    "isPremium": false
  }
]
```

## Storage Utilities (storage.js)

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  USER_PROGRESS: '@user_progress',
  ANSWERED_QUESTIONS: '@answered_questions',
  MISTAKES: '@mistakes',
};

export const getUserProgress = async () => {
  // Returns user progress object or default
};

export const updateUserProgress = async (updates) => {
  // Merges updates with existing progress
};

export const saveQuizResult = async (result) => {
  // Saves quiz result and updates mastery scores
};

export const getMistakes = async () => {
  // Returns array of question IDs answered incorrectly
};

export const clearMistakes = async () => {
  // Clears mistake list
};
```

## Calculation Utilities (calculations.js)

```javascript
export const calculateMasteryScore = (categoryScores) => {
  // Returns overall mastery percentage (0-100)
  // Weighted average of all category scores
};

export const calculateCategoryMastery = (questionResults, category) => {
  // Returns mastery for specific category (0-100)
  // Based on recent performance (last 20 questions)
};

export const calculateTestReadiness = (masteryScore, testsTaken) => {
  // Returns readiness percentage (0-100)
  // Considers mastery score and practice volume
};

export const isPassingScore = (score, totalQuestions) => {
  // Returns true if score >= 70%
};

export const updateDailyStreak = (lastStudyDate) => {
  // Returns new streak count
  // Increments if studied yesterday, resets if gap > 1 day
};
```

## Development Workflow

### Phase 1: Setup
1. Initialize Expo project: `npx create-expo-app Notary`
2. Install dependencies:
   - `@react-navigation/native`
   - `@react-navigation/stack`
   - `@react-native-async-storage/async-storage`
   - `expo-font` (for Inter)
   - `react-native-svg` (for icons)
3. Set up file structure
4. Create `app_config.js` with all constants
5. Create sample `questions.json` (at least 50 questions)

### Phase 2: Common Components
1. Build `Button.js` with all variants
2. Build `Card.js` with press animations
3. Build `ProgressBar.js` with animations
4. Build `Header.js` with mastery/streak display
5. Test all components in isolation

### Phase 3: Quiz Components
1. Build `QuestionCard.js`
2. Build `AnswerOption.js` with all states
3. Build `Timer.js` with countdown logic
4. Test quiz flow

### Phase 4: Stats Components
1. Build `ProgressGauge.js` with circular animation
2. Build `StatRow.js`
3. Test with sample data

### Phase 5: Screens
1. Build `HomeScreen.js` with all cards
2. Build `QuizScreen.js` with question flow
3. Build `ResultsScreen.js` with score calculation
4. Build `StatsScreen.js` with progress display
5. Wire up navigation

### Phase 6: Storage & Logic
1. Implement all storage utilities
2. Implement all calculation utilities
3. Connect screens to storage
4. Test full user flow

### Phase 7: Polish
1. Add loading states
2. Add error handling
3. Add animations and transitions
4. Test on iOS and Android
5. Optimize performance

## Testing Checklist

### Functionality
- [ ] Questions load correctly
- [ ] Answer selection works
- [ ] Correct/wrong feedback shows
- [ ] Score calculates accurately
- [ ] Progress saves to AsyncStorage
- [ ] Mastery score updates
- [ ] Daily streak increments correctly
- [ ] Timer counts down (mock exam)
- [ ] Navigation works between all screens

### UI/UX
- [ ] All colors match design system
- [ ] Typography is consistent
- [ ] Spacing is consistent
- [ ] Touch targets are >= 44x44
- [ ] Animations are smooth
- [ ] Loading states are clear
- [ ] Error messages are helpful
- [ ] Premium upsell is prominent but not annoying

### Performance
- [ ] App loads in < 3 seconds
- [ ] No jank during scrolling
- [ ] Animations run at 60fps
- [ ] Memory usage is reasonable
- [ ] Works on older devices (iPhone 8, Android 8)

### Edge Cases
- [ ] Handles empty AsyncStorage (first launch)
- [ ] Handles app backgrounding during quiz
- [ ] Handles timer expiration
- [ ] Handles all questions answered
- [ ] Handles no mistakes to review

## Common Pitfalls to Avoid

1. **Over-Engineering:** Keep it simple for MVP. No Redux, no complex state machines.
2. **Inconsistent Styling:** Always use values from `app_config.js`, never hardcode colors/spacing.
3. **Poor Performance:** Avoid inline functions in render, use React.memo for expensive components.
4. **Bad UX:** Always show loading states, never leave user wondering what's happening.
5. **Hardcoded Strings:** All user-facing text should be in `app_config.js` for easy updates.
6. **Ignoring Accessibility:** Use proper contrast ratios, touch target sizes, and semantic labels.
7. **Not Testing on Device:** Always test on real devices, not just simulator.

## Questions to Ask Before Starting

1. Do you have the 2026 CA Notary Handbook content ready for questions?
2. Should the premium upsell be functional (with payment) or just UI for MVP?
3. Do you want iOS-first, Android-first, or simultaneous development?
4. Should we include analytics tracking (e.g., Expo Analytics)?
5. Do you want a dark mode toggle or just light mode for MVP?
6. Should the app work offline completely, or is internet required for first launch?

## Success Criteria

The MVP is complete when:
- [ ] All screens are built and functional
- [ ] User can take all quiz types (daily, quick 10, mock exam)
- [ ] Progress saves and persists across app restarts
- [ ] Stats screen shows accurate data
- [ ] Premium upsell is visible and prominent
- [ ] App runs smoothly on iOS and Android
- [ ] Code is clean, modular, and well-documented
- [ ] Design matches the professional legal aesthetic
- [ ] At least 50 questions are available in free tier

## Next Steps After MVP

1. Add 150+ premium questions
2. Integrate in-app purchases (RevenueCat or Expo IAP)
3. Add detailed explanations for all questions
4. Implement push notifications for daily reminders
5. Add dark mode
6. Expand to other states (NY, TX, FL)
7. Submit to App Store and Google Play

---

**Remember:** This is an MVP. Focus on core functionality and professional design. Avoid feature creep. Ship fast, iterate based on user feedback.
