# **App Name**: SafeBite

## Core Features:

- Multi-Profile Barcode Scanner: A camera-based UI with a barcode overlay and a 'Profile Selector' to toggle scanning for different allergy profiles.
- Instant Allergy Verdict: Displays a full-screen safety verdict (Green: Success, Red: Danger, Yellow: Caution) immediately after scanning a product.
- Detailed Match Breakdown: Presents a clear list showing which specific ingredients matched which user's allergy profile(s).
- Smart Ingredient Parsing Tool: A tool to analyze product labels, highlight allergens, and provide a parsed, clickable ingredient list for deep insight.
- Scientific Rationale Tool: An expandable tool that explains why a product is flagged by linking to official food safety databases or manufacturer statements.
- Allergy Profile Management: A step-by-step wizard for setting up and managing multiple allergy profiles, including severity levels and cross-reactivity options.
- Evidence-Based Safety Badges: Visual indicators such as 'Certified Vegan' or 'Nut-Free Facility' based on validated evidence.
- Data Error/Omission Reporting: A quick-entry modal to report missing allergens or incorrect data, including a photo upload placeholder.
- Safety Alerts Feed: A notification-style UI showing recent community reports or manufacturer recalls relevant to the user's saved allergens.
- Shareable Safety Card: A 'Verified Safe' summary card optimized for sharing with teachers or grandparents via Kakao/SMS.
- Allergy Profile Wizard: A step-by-step onboarding flow to set up a child's profile, including severity levels and cross-reactivity options.
- Admin Command Center: A verification queue for user-reported ingredient errors and a dashboard to manage the master allergen database and cross-contamination flags.

## Style Guidelines:

- Primary Color: A calming, deep slate blue (#455A64) to convey stability and a professional, clinical foundation. This color forms the core of the app's structure and background elements, ensuring high readability and trust.
- Background Color: A light, neutral off-white (#F5F5F5) for spaciousness and high contrast with text and primary elements, maintaining a clean and accessible interface.
- Accent Color: A vibrant, clear yellow (#FFC107) for interactive elements, highlights, and calls-to-action. This introduces the requested 'yellow tone' and provides an energetic yet controlled warmth, also serving as the primary color for 'Caution' states.
- Semantic Colors: Bright red (#FF0000) for 'Danger' verdicts, ensuring immediate and unambiguous safety alerts. The vibrant yellow accent will be used for 'Caution' messages.
- Body and Headline font: 'Inter', a grotesque-style sans-serif. Its modern, objective, and neutral look is ideal for delivering critical information clearly, enhancing the high-stakes aesthetic and ensuring readability for both main content and warnings.
- Icons will be clear, high-contrast, and universally understandable, designed not to rely solely on color for conveying meaning, aligning with WCAG compliance (e.g., using symbols like 'X' or checkmarks in addition to color coding).
- Mobile-first approach with an emphasis on quick scanning and clear visual hierarchy. Layouts will feature large touch targets and intuitive placement of critical information, optimized for grocery store or childcare environments.
- Smooth, subtle transitions between different app states (e.g., scanning to result screen) to provide a fluid user experience. Shimmer or skeleton loaders will be employed during API calls to indicate loading content.