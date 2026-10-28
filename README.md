<div align="center">


</div>


## ✨ Core Features

*   🧠 **AI-Powered Aptitude Quiz & Stream Suggestion:** An intelligent quiz assessing students' interests and skills, suggesting the most suitable academic streams tailored to their unique profile.
*   🗺️ **Interactive Course-to-Career Mapping:** A highly visual, node-based interactive map tracking academic courses directly to their ultimate career paths.
*   🏫 **Comprehensive College Directory:** A rich, unified directory featuring government and private colleges. Filter by location, eligibility, cut-offs, and available courses seamlessly on an interactive map.
*   🤖 **Personalized AI College Recommendations:** Driven by **Google Genkit AI**, the system deeply analyzes a student's profile and location to recommend the most optimal colleges automatically.
*   📅 **Dynamic Timeline Tracker:** Never miss a deadline! Built-in tracking for critical admission dates, scholarships, and exam schedules with personalized reminders.
*   👨‍👩‍👦 **Multi-Role Access:** Dedicated portals for **Students** and **Parents**, alongside an easy-to-use **Guest Mode**.
*   🌍 **Multilingual Support:** Accessible to a broader audience across different regions, built with `next-intl`.

---

## 🛠️ Technology Stack

EduPath Navigator is built with modern, performant, and scalable technologies:

### **Frontend & Framework**
*   **Next.js 15.5** (App Router, Turbopack)
*   **React 18**
*   **Tailwind CSS** (Styling, Custom Themes, Animations)
*   **Radix UI / Shadcn UI** (Accessible Components)
*   **Framer Motion** (Subtle, engaging animations)

### **AI & Data**
*   **Google Genkit AI** (Agentic flows & personalized recommendations)
*   **Firebase** (Database, Authentication, Storage)

### **Interactive Visualization**
*   **React Flow / XYFlow** (Node-based mapping)
*   **React Leaflet** (Maps integration for college discovery)
*   **Recharts** (Data visualization)

---

## 🚀 Getting Started

Follow these steps to run the application locally.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/SIH-FINAL-IMPS-main.git
cd SIH-FINAL-IMPS-main
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root directory and add your Firebase and Google AI Genkit credentials:
```env
# Example
GOOGLE_GENAI_API_KEY="your-api-key"
NEXT_PUBLIC_FIREBASE_API_KEY="your-firebase-key"
# Add other necessary keys...
```

### 4. Run the Development Server
You can run the Next.js frontend alongside the Genkit Dev UI:
```bash
# Run Next.js App (on port 9002 as configured)
npm run dev

# Run Genkit AI Backend (In a separate terminal)
npm run genkit:dev
```
Open [http://localhost:9002](http://localhost:9002) in your browser to see the app!

---