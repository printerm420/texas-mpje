# How to Add Your 744 MPJE Questions to the App

## Quick Start
Your app is now set up with the Texas MPJE theme and structure. Follow these steps to add your questions:

## Step 1: Understand the Format

Each question in `App.js` follows this format:
```javascript
{ id: 1, q: "Question text here?", o: ["Option A", "Option B", "Option C", "Option D"], a: 2 }
```

Where:
- `id`: Unique question number (1-744)
- `q`: Question text
- `o`: Array of 4 options
- `a`: Index of correct answer (0=first option, 1=second, 2=third, 3=fourth)

## Step 2: Add Questions to App.js

1. Open `App.js`
2. Find the `QUESTIONS` array (around line 250)
3. Replace the placeholder with your questions

### Example:
```javascript
const QUESTIONS = [
  { id: 1, q: "Who of the following is NOT required to register with the DEA?", o: ["A pharmaceutical manufacturer", "A patient with a valid prescription", "An independent community pharmacy", "A research lab using CII substances"], a: 1 },
  { id: 2, q: "Which of the following carrier-related individuals is exempt from DEA registration?", o: ["A UPS delivery driver", "A warehouse worker for a drug wholesaler", "A long-haul truck driver for a manufacturer", "All of the above"], a: 3 },
  // ... add all 744 questions here
];
```

## Step 3: Update Topic Chapters with Question IDs

After adding questions, update the `TOPICS` array (around line 95) with the question IDs for each chapter.

### Based on QUESTION_ORGANIZATION.md:

```javascript
const TOPICS = [
  { 
    id: 1, 
    title: "Federal Pharmacy Law", 
    icon: "medical", 
    isFree: true,
    chapters: [
      { id: 101, title: "FDCA & FDA Regulations", questionIds: [316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 368, 369, 370, 371, 372, 373, 374, 375, 380, 384, 395] },
      { id: 102, title: "Controlled Substances Act", questionIds: [1, 2, 3, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 331, 332, 333, 334, 335, 336, 346, 347, 348, 349, 376, 377, 378, 379, 381, 382, 383, 385, 386, 387, 388, 389, 390, 391, 392, 394, 396, 397, 398, 399] }
    ]
  },
  // ... continue for all 10 topics
];
```

## Step 4: Test the App

1. Save your changes
2. Run `npm start` or `expo start`
3. Check that:
   - Questions load correctly
   - Topic cards show question counts
   - Quiz functionality works
   - All answers are correct

## Question Organization Reference

See `QUESTION_ORGANIZATION.md` for the complete mapping of which questions belong to which topics and chapters.

### Quick Reference:
- **Topic 1 (Federal Law)**: Questions 1-3, 46-70, 316-399 
- **Topic 2 (Texas Practice Act)**: Questions 82-220, 400-429
- **Topic 3 (Controlled Substances)**: Questions 4-79, 265-295, 415, 432-439
- **Topic 4 (Prescription Processing)**: Questions 101-159, 167-169, 220-244, 271-281
- **Topic 5 (Patient Safety)**: Questions 225-249, 298, 325-330, 355, 398, 401, 403-404, 419
- **Topic 6 (Compounding)**: Questions 56-62, 78, 121-125, 147, 201-203, 219, 247, 251, 276-277, 284-286, 300-303, 313-314, 351, 357, 391, 408-409
- **Topic 7 (Drug Distribution)**: Questions 27, 54, 232, 259-262, 280, 307-311, 322, 331, 362, 367-370, 405
- **Topic 8 (Professional Standards)**: Questions 99, 100, 107-108, 110, 113, 115-119, 181-184, 190, 192-195, 197, 233-234, 325-330
- **Topic 9 (Special Populations)**: Questions 43-44, 63-66, 126-133, 187, 263-267, 285-286, 320-321, 324, 398, 429
- **Topic 10 (Healthcare Programs)**: Questions 33, 296-322, 330, 428

## Tips

1. **Use Find/Replace** in your editor to quickly format questions
2. **Test in batches** - Add 50-100 questions at a time and test
3. **Check answer indices** - Remember 0=A, 1=B, 2=C, 3=D
4. **Verify IDs are sequential** - No gaps or duplicates

## Need Help?

- Check `QUESTION_ORGANIZATION.md` for detailed categorization
- Review `App.js.backup` if you need to restore
- Test with a small batch first (10-20 questions) to ensure format is correct

---

**Current Status**: App structure is complete, ready for your 744 questions!
