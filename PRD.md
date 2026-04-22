# PRD: CA Notary Exam Prep App (MVP)

## 1. Goal
A high-conversion, professional React Native (Expo) app to help users pass the California Notary Public Exam.

## 2. Core Mechanics
- **Total Questions:** 45 (Multiple Choice, 4 options)
- **Time Limit:** 60 Minutes
- **Passing Score:** 70% (32 correct)
- **Content:** Based on the 2026 CA Notary Handbook (Duties, Journal, ID, Prohibited Acts)

## 3. Screen Requirements (Simplified for One-Shot)

### Home / Study Screen
- **Header:** Sticky top. Shows current "Mastery Score" % and a daily streak
- **Primary Action (The Gold Hook):** Large gold card (#FACC15) with text: "UNLOCK ALL EXAM QUESTIONS" and a lock icon
- **Secondary Action:** Blue card (#1E293B) with text: "Take Free Practice Test"
- **Grid (2x2):** 4 Cards: [Daily Question], [Quick 10 Quiz], [Full Mock Exam], [Mistakes]

### Stats Screen
- **Main View:** Large circular progress gauge for "Test Readiness %"
- **List View:** Rows for "Total Tests Taken", "Average Accuracy", and "Mastery by Topic"

## 4. Technical Constraints
- **Language:** React Native + Expo
- **Styling:** NativeWind (Tailwind) or Standard StyleSheet (Keep it simple)
- **Storage:** Local only (AsyncStorage). No Firebase/External DB for MVP
- **Data Source:** `src/data/app_config.js` for colors/strings and `src/data/questions.json` for questions

## 5. Design System

### Color Palette
- **Primary:** #3B4CCA (Blue) - Header, buttons, professional feel
- **Accent:** #FACC15 (Gold) - Premium, conversion-focused (unlock button)
- **Secondary:** #1E293B (Text Dark) - Text, supporting elements
- **Success:** #22C55E (Green) - Promo cards, achievements
- **Error:** #EF4444 (Red) - Wrong answers, missed questions
- **Background:** #F1F5F9 (Light Gray) - Screen background
- **White:** #FFFFFF - Cards, tab bar

### Typography
- **Font Family:** Inter
- **Headings:** Bold, Blue (#3B4CCA) or White (on blue backgrounds)
- **Body:** Regular, Dark (#1E293B)
- **Labels:** Medium, Muted (#64748B)

### Component Patterns
- **Cards:** Rounded corners (16px), subtle shadows, white background
- **Buttons:** 
  - Primary: Gold (#FACC15) with dark text
  - Secondary: White with dark text
  - Accent: Blue (#3B4CCA) with white text
- **Progress Indicators:** Gold accent on blue background
- **Icons:** Expo Ionicons (vector icons)

## 6. User Flow

### First Launch
1. Welcome screen with value proposition
2. Brief tutorial (optional skip)
3. Land on Home/Study screen

### Study Session
1. Select quiz type from Home screen
2. Answer questions with immediate feedback
3. Review results with explanations
4. Return to Home with updated stats

### Premium Upsell
1. Tap "UNLOCK ALL EXAM QUESTIONS" card
2. Show benefits modal (all questions, detailed explanations, offline access)
3. Present pricing (one-time purchase or subscription)
4. Complete purchase or dismiss

## 7. Data Structure

### Question Object
```json
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
  "explanation": "As of 2026, California notaries can charge a maximum of $15 per acknowledgment.",
  "difficulty": "easy",
  "isPremium": false
}
```

### User Progress Object (AsyncStorage)
```json
{
  "masteryScore": 0,
  "dailyStreak": 0,
  "lastStudyDate": "2026-01-25",
  "totalTestsTaken": 0,
  "averageAccuracy": 0,
  "categoryMastery": {
    "Duties": 0,
    "Journal": 0,
    "ID": 0,
    "ProhibitedActs": 0
  },
  "answeredQuestions": [],
  "mistakeQuestions": []
}
```

## 8. MVP Feature Checklist

### Must Have (v1.0)
- [ ] Home/Study screen with all cards
- [ ] Daily Question feature
- [ ] Quick 10 Quiz mode
- [ ] Full Mock Exam (45 questions, 60 min timer)
- [ ] Question display with 4 options
- [ ] Immediate answer feedback
- [ ] Results screen with score
- [ ] Stats screen with progress tracking
- [ ] Local storage for progress
- [ ] Premium upsell card (UI only, no payment)
- [ ] At least 50 free questions
- [ ] Basic onboarding

### Nice to Have (v1.1+)
- [ ] Detailed explanations for all questions
- [ ] Bookmark/flag questions
- [ ] Study mode (no timer, review mode)
- [ ] Dark mode
- [ ] Push notifications for daily reminders
- [ ] Share results
- [ ] In-app purchase integration
- [ ] 200+ premium questions

### Future Enhancements (v2.0+)
- [ ] Flashcard mode
- [ ] Video explanations
- [ ] Community features
- [ ] Multi-state support (NY, TX, FL)
- [ ] AI-powered weak area detection
- [ ] Spaced repetition algorithm

## 9. Success Metrics

### Engagement
- Daily Active Users (DAU)
- Average session length > 10 minutes
- Daily streak retention > 30%
- Questions answered per session > 15

### Conversion
- Premium upsell card tap rate > 15%
- Free-to-paid conversion > 5%
- Time to first purchase < 7 days

### Learning Outcomes
- Average mastery score improvement > 20% in 2 weeks
- Full mock exam completion rate > 60%
- User-reported pass rate > 85%

## 10. Development Phases

### Phase 1: Foundation (Week 1)
- Set up Expo project
- Create design system and reusable components
- Build Home screen UI
- Implement basic navigation

### Phase 2: Core Features (Week 2)
- Question display and answer logic
- Timer functionality
- Results calculation
- Local storage integration

### Phase 3: Polish (Week 3)
- Stats screen
- Onboarding flow
- Premium upsell UI
- Bug fixes and testing

### Phase 4: Launch Prep (Week 4)
- App store assets
- Beta testing
- Performance optimization
- Final QA

## 11. Coding Standards

### File Structure
```
src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── quiz/            # Quiz-specific components
│   └── stats/           # Stats-specific components
├── screens/
│   ├── HomeScreen.js
│   ├── QuizScreen.js
│   ├── ResultsScreen.js
│   └── StatsScreen.js
├── data/
│   ├── app_config.js    # Colors, strings, constants
│   └── questions.json   # Question bank
├── utils/
│   ├── storage.js       # AsyncStorage helpers
│   └── calculations.js  # Score/mastery calculations
└── navigation/
    └── AppNavigator.js
```

### Component Guidelines
- Use functional components with hooks
- PropTypes for type checking
- Meaningful component and variable names
- Extract magic numbers to constants
- Keep components under 200 lines
- One component per file

### State Management
- Use React hooks (useState, useEffect, useContext)
- Context API for global state (user progress, theme)
- No Redux for MVP (keep it simple)

### Styling
- Use StyleSheet.create for performance
- Define colors/spacing in app_config.js
- Consistent spacing scale (4, 8, 12, 16, 24, 32, 48)
- Responsive design (consider tablet layouts)

### Code Quality
- ESLint with Airbnb config
- Prettier for formatting
- Meaningful commit messages
- Comment complex logic only
- Write self-documenting code

## 12. Legal & Compliance
- Disclaimer: "This app is for study purposes only and does not guarantee exam success"
- Privacy policy for data collection (even if local-only)
- Terms of service
- Proper attribution for CA Notary Handbook content
- App store compliance (age rating, content description)

## 13. Monetization Strategy (Post-MVP)
- **Free Tier:** 50 questions, basic stats, ads
- **Premium (One-Time):** $29.99 - All questions, no ads, detailed explanations
- **Subscription:** $9.99/month - All premium features + monthly updated content
- **Upsells:** State-specific add-ons ($14.99 each)

## 14. Risk Mitigation
- **Content Accuracy:** Verify all questions against official 2026 handbook
- **Performance:** Test on older devices (iPhone 8, Android equivalents)
- **Storage Limits:** Monitor AsyncStorage size, implement cleanup
- **User Frustration:** Ensure free tier provides real value
- **Competition:** Differentiate with superior UX and legal aesthetic
