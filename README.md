# Anivera - Personal Habit Tracker

**One step today, stronger tomorrow.**

Anivera is a beautiful, minimalist personal habit tracking web application that helps you build and maintain healthy daily routines. Track your progress across multiple habits with an intuitive, colorful interface designed for both desktop and mobile devices.

![Anivera Habit Tracker](https://img.shields.io/badge/Status-Active-success) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📋 Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage Guide](#usage-guide)
- [Habits Tracked](#habits-tracked)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Data Storage](#data-storage)
- [Responsive Design](#responsive-design)
- [Browser Support](#browser-support)
- [Future Enhancements](#future-enhancements)

---

## ✨ Features

### Core Functionality
- **8 Pre-built Habit Cards**: Track multiple aspects of your daily routine
- **Date Navigation**: View and edit habits for any date using the calendar picker
- **Real-time Updates**: Instant visual feedback as you track your habits
- **Daily Summary Dashboard**: Quick overview of your progress at a glance
- **Local Storage**: All data is saved automatically in your browser
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful UI**: Colorful cards with modern gradients and smooth animations

### Habit Types
- **Toggle Habits**: Simple on/off switches for binary habits (Skincare, Workout, Meditation)
- **Counter Habits**: Increment/decrement counters for numeric tracking (Water, Study, Reading, Sleep)
- **Mood Tracker**: Emoji-based mood selection with 5 levels

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or setup required!

### Installation

1. **Clone or Download** this repository
   ```bash
   git clone <repository-url>
   cd "Habit Tracker"
   ```

2. **Open the Application**
   - Simply open `index.html` in your web browser
   - Or use a local server (optional):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **Start Tracking!**
   - The app loads with today's date selected
   - Begin tracking your habits immediately

---

## 📖 Usage Guide

### Basic Navigation

1. **Select a Date**
   - Click the calendar icon in the top-right corner
   - Choose any date to view or edit habits
   - Use "Jump to today" button to quickly return to the current date

2. **Track Toggle Habits** (Skincare, Workout, Meditation)
   - Click the toggle switch to mark as done/not done
   - The label updates instantly to show status

3. **Track Counter Habits** (Water, Study, Reading, Sleep)
   - Click the `-` button to decrease the count
   - Click the `+` button to increase the count
   - Values update in real-time

4. **Track Your Mood**
   - Click any of the 5 emoji buttons (😞 🙁 😐 🙂 😄)
   - Selected mood is highlighted
   - Mood label updates below the buttons

5. **View Summary**
   - Check the "Today at a Glance" section for quick stats:
     - Habits done: Count of completed toggle habits
     - Water: Current water intake vs. goal (8 glasses)
     - Study: Total study hours logged

### Data Persistence
- All changes are automatically saved to your browser's local storage
- Data persists between browser sessions
- Each date maintains its own independent data
- No account or internet connection required

---

## 🎯 Habits Tracked

Anivera tracks 8 essential daily habits:

| Habit | Type | Color | Description |
|-------|------|-------|-------------|
| **Skincare** | Toggle | Yellow | Morning/night routine completion |
| **Water Intake** | Counter | Blue | Track daily water consumption (Goal: 8 glasses) |
| **Workout** | Toggle | Red | Exercise/physical activity done |
| **Study Hours** | Counter | Violet | Log focused study time |
| **Mood** | Emoji | Green | Track daily emotional state (5 levels) |
| **Meditation** | Toggle | Yellow | Mindfulness practice completion |
| **Reading** | Counter | Violet | Pages read per day |
| **Sleep Hours** | Counter | Red | Hours of sleep logged |

### Habit Details

#### Toggle Habits
- **Skincare**: Toggle on when you complete your morning or night skincare routine
- **Workout**: Mark as done when you complete any form of physical exercise
- **Meditation**: Toggle on after completing a meditation or mindfulness session

#### Counter Habits
- **Water Intake**: 
  - Increment each time you drink a glass of water
  - Goal: 8 glasses per day
  - Progress bar shows completion percentage
  
- **Study Hours**: 
  - Track hours of focused study time
  - Range: 0-16 hours
  
- **Reading**: 
  - Log pages read throughout the day
  - Range: 0-1000 pages
  
- **Sleep Hours**: 
  - Record total hours of sleep
  - Range: 0-24 hours

#### Mood Tracker
- Select from 5 mood levels:
  - 😞 Very Low
  - 🙁 Low
  - 😐 Neutral
  - 🙂 Good
  - 😄 Great

---

## 📁 Project Structure

```
Habit Tracker/
│
├── index.html          # Main HTML structure and layout
├── style.css           # All styling, responsive design, and animations
├── script.js           # Application logic, data management, and event handlers
└── README.md           # This file
```

### File Descriptions

- **index.html**: Contains the complete HTML structure including:
  - Header with app title and date picker
  - Summary dashboard section
  - All 8 habit cards
  - Bottom navigation button

- **style.css**: Comprehensive styling including:
  - CSS custom properties (variables) for colors
  - Card designs with gradients
  - Responsive breakpoints for mobile/tablet/desktop
  - Animations and transitions
  - Toggle switches and button styles

- **script.js**: JavaScript functionality including:
  - Local storage data management
  - Date handling and formatting
  - UI update functions
  - Event listeners for all interactions
  - Summary calculations

---

## 🛠 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: 
  - Custom properties (CSS variables)
  - Flexbox and Grid layouts
  - Gradients and animations
  - Media queries for responsiveness
- **Vanilla JavaScript (ES6+)**:
  - Local Storage API
  - DOM manipulation
  - Event handling
  - Date manipulation

**No frameworks or external dependencies required!** This is a pure, lightweight web application.

---

## 💾 Data Storage

### Local Storage
- All habit data is stored in the browser's `localStorage`
- Storage key: `habit-tracker-v2`
- Data format: JSON object with date keys (YYYY-MM-DD)
- Each date contains an object with all habit values

### Data Structure Example
```javascript
{
  "2025-11-29": {
    "skincare": true,
    "water": 5,
    "workout": false,
    "studyHours": 3,
    "mood": 4,
    "meditation": true,
    "readingPages": 25,
    "sleepHours": 7
  }
}
```

### Privacy
- All data stays on your device
- No data is sent to any server
- No tracking or analytics
- You can clear data by clearing browser local storage

---

## 📱 Responsive Design

Anivera is fully responsive and optimized for all screen sizes:

### Desktop (> 720px)
- Multi-column card grid layout
- Side-by-side summary items
- Full header with date picker

### Tablet (480px - 720px)
- Responsive grid adjusts to 2 columns
- Optimized spacing and padding

### Mobile (< 480px)
- Single column layout
- Stacked summary items
- Full-width buttons
- Touch-friendly interface
- Optimized font sizes

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ⚠️ Internet Explorer (not supported)

**Note**: Requires a browser with Local Storage support (all modern browsers).

---

## 🎨 Design Philosophy

Anivera follows a clean, minimalist design philosophy:

- **White Background**: Clean, distraction-free interface
- **Colorful Cards**: Each habit has a unique color theme:
  - Yellow: Skincare, Meditation
  - Blue: Water Intake
  - Red: Workout, Sleep Hours
  - Violet: Study Hours, Reading
  - Green: Mood
- **Smooth Animations**: Subtle transitions for better UX
- **Clear Typography**: Easy-to-read fonts and hierarchy
- **Intuitive Icons**: Visual cues for better understanding

---

## 🔮 Future Enhancements

Potential features for future versions:

- [ ] Weekly and monthly statistics
- [ ] Habit streaks tracking
- [ ] Export data to CSV/JSON
- [ ] Dark mode theme
- [ ] Custom habit goals
- [ ] Reminder notifications
- [ ] Data visualization charts
- [ ] Habit templates
- [ ] Multi-language support

---

## 📝 License

This project is open source and available for personal use.

---

## 👤 Author

Created with ❤️ for building better habits, one day at a time.

---

## 🙏 Acknowledgments

- Inspired by the need for a simple, beautiful habit tracking solution
- Built with vanilla web technologies for maximum compatibility
- Designed with user experience and simplicity in mind

---

## 📞 Support

For issues, questions, or suggestions:
- Open an issue in the repository
- Check existing documentation
- Review the code comments for implementation details

---

**Remember**: "One step today, stronger tomorrow." 🌟

Start tracking your habits today and build a better version of yourself!

