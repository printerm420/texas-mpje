#!/usr/bin/env python3
"""
Insert all 429 questions into App.js
"""

# Read the complete questions file
with open('COMPLETE_429_QUESTIONS.js', 'r') as f:
    questions_content = f.read()

# Extract just the questions array content (between [ and ])
start_marker = 'const QUESTIONS = ['
end_marker = '];'

start_idx = questions_content.find(start_marker) + len(start_marker)
end_idx = questions_content.rfind(end_marker)
questions_only = questions_content[start_idx:end_idx].strip()

# Read App.js
with open('App.js', 'r') as f:
    app_content = f.read()

# Find and replace the QUESTIONS array
app_start = app_content.find('// ========== QUESTION BANK')
app_questions_start = app_content.find('const QUESTIONS = [', app_start)
app_questions_end = app_content.find('];', app_questions_start) + 2

# Build new App.js
new_app = app_content[:app_questions_start]
new_app += 'const QUESTIONS = [\n'
new_app += questions_only + '\n'
new_app += '];\n'
new_app += app_content[app_questions_end+1:]

# Write to new file
with open('App.js.new', 'w') as f:
    f.write(new_app)

print("✅ Created App.js.new with all 429 questions")
print("Review the file and if it looks good, run:")
print("  mv App.js App.js.backup && mv App.js.new App.js")
