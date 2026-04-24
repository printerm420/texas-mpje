#!/bin/bash
# Extract just the questions (without const declaration)
tail -n +2 COMPLETE_429_QUESTIONS.js | head -n -1 > questions_only.txt

# Create new App.js with questions inserted
head -n 251 App.js > App_new.js
cat questions_only.txt >> App_new.js
tail -n +265 App.js >> App_new.js

# Backup and replace
mv App.js App.js.before_all_questions
mv App_new.js App.js

echo "✅ SUCCESS! All 429 questions added to App.js"
echo "Backup saved as: App.js.before_all_questions"
