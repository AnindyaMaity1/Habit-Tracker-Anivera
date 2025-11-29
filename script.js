// Simple localStorage-based habit tracker

const STORAGE_KEY = "habit-tracker-v2";

function formatDateKey(date) {
  return date.toISOString().slice(0, 10); // YYYY-MM-DD
}

function getToday() {
  const now = new Date();
  const offsetMs = now.getTimezoneOffset() * 60 * 1000;
  const local = new Date(now.getTime() - offsetMs);
  return local;
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) || {};
  } catch {
    return {};
  }
}

function saveData(allData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
  } catch {
    // ignore
  }
}

function getDayData(allData, key) {
  return (
    allData[key] || {
      skincare: false,
      water: 0,
      workout: false,
      studyHours: 0,
      mood: 0,
      meditation: false,
      readingPages: 0,
      sleepHours: 0,
    }
  );
}

function updateSummary(dayData) {
  const toggleHabits = ["skincare", "workout", "meditation"];
  const completed = toggleHabits.filter((h) => dayData[h]).length;
  
  document.getElementById(
    "completed-count"
  ).textContent = `${completed} / 3`;

  document.getElementById(
    "water-summary"
  ).textContent = `${dayData.water || 0} / 8 glasses`;

  document.getElementById("study-summary").textContent =
    (dayData.studyHours || 0) + " h";
}

function updateMoodLabel(mood) {
  const label = document.getElementById("mood-label");
  const map = {
    0: "No mood selected",
    1: "Very low",
    2: "Low",
    3: "Neutral",
    4: "Good",
    5: "Great",
  };
  label.textContent = map[mood] || "No mood selected";
}

function updateWaterUI(water) {
  const countEl = document.getElementById("water-count");
  const progress = document.getElementById("water-progress");
  if (countEl) countEl.textContent = water || 0;
  if (progress) {
    const pct = Math.max(0, Math.min(100, ((water || 0) / 8) * 100));
    progress.style.width = pct + "%";
  }
}

function updateStudyUI(hours) {
  const el = document.getElementById("study-hours");
  if (el) el.textContent = hours || 0;
}

function updateReadingUI(pages) {
  const el = document.getElementById("reading-pages");
  if (el) el.textContent = pages || 0;
}

function updateSleepUI(hours) {
  const el = document.getElementById("sleep-hours");
  if (el) el.textContent = hours || 0;
}

function bindEvents() {
  const dateInput = document.getElementById("date");
  const todayBtn = document.getElementById("today-btn");

  function refreshUIForSelectedDate() {
    const allData = loadData();
    const key = dateInput.value || formatDateKey(getToday());
    const dayData = getDayData(allData, key);

    // Skincare
    const skincareInput = document.getElementById("skincare");
    if (skincareInput) {
      skincareInput.checked = dayData.skincare;
      const label = document.getElementById("skincare-label");
      if (label) label.textContent = dayData.skincare ? "Done" : "Not done";
    }

    // Workout
    const workoutInput = document.getElementById("workout");
    if (workoutInput) {
      workoutInput.checked = dayData.workout;
      const label = document.getElementById("workout-label");
      if (label) label.textContent = dayData.workout ? "Done" : "Not done";
    }

    // Meditation
    const meditationInput = document.getElementById("meditation");
    if (meditationInput) {
      meditationInput.checked = dayData.meditation;
      const label = document.getElementById("meditation-label");
      if (label) label.textContent = dayData.meditation ? "Done" : "Not done";
    }

    // Water
    updateWaterUI(dayData.water);

    // Study
    updateStudyUI(dayData.studyHours);

    // Reading
    updateReadingUI(dayData.readingPages);

    // Sleep
    updateSleepUI(dayData.sleepHours);

    // Mood
    document
      .querySelectorAll("#mood-options .mood-btn")
      .forEach((btn) => btn.classList.remove("selected"));
    if (dayData.mood) {
      const active = document.querySelector(
        `#mood-options .mood-btn[data-mood="${dayData.mood}"]`
      );
      if (active) active.classList.add("selected");
    }
    updateMoodLabel(dayData.mood);

    updateSummary(dayData);
  }

  // Initialize date input to today
  const todayKey = formatDateKey(getToday());
  dateInput.value = todayKey;

  dateInput.addEventListener("change", refreshUIForSelectedDate);

  todayBtn.addEventListener("click", () => {
    const today = formatDateKey(getToday());
    dateInput.value = today;
    refreshUIForSelectedDate();
  });

  // Skincare toggle
  const skincareInput = document.getElementById("skincare");
  if (skincareInput) {
    skincareInput.addEventListener("change", (e) => {
      const allData = loadData();
      const key = document.getElementById("date").value || todayKey;
      const dayData = getDayData(allData, key);
      dayData.skincare = e.target.checked;
      allData[key] = dayData;
      saveData(allData);
      const label = document.getElementById("skincare-label");
      if (label) label.textContent = e.target.checked ? "Done" : "Not done";
      updateSummary(dayData);
    });
  }

  // Workout toggle
  const workoutInput = document.getElementById("workout");
  if (workoutInput) {
    workoutInput.addEventListener("change", (e) => {
      const allData = loadData();
      const key = document.getElementById("date").value || todayKey;
      const dayData = getDayData(allData, key);
      dayData.workout = e.target.checked;
      allData[key] = dayData;
      saveData(allData);
      const label = document.getElementById("workout-label");
      if (label) label.textContent = e.target.checked ? "Done" : "Not done";
      updateSummary(dayData);
    });
  }

  // Meditation toggle
  const meditationInput = document.getElementById("meditation");
  if (meditationInput) {
    meditationInput.addEventListener("change", (e) => {
      const allData = loadData();
      const key = document.getElementById("date").value || todayKey;
      const dayData = getDayData(allData, key);
      dayData.meditation = e.target.checked;
      allData[key] = dayData;
      saveData(allData);
      const label = document.getElementById("meditation-label");
      if (label) label.textContent = e.target.checked ? "Done" : "Not done";
      updateSummary(dayData);
    });
  }

  // Counters
  document.querySelectorAll(".btn.icon").forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-action");
      const target = btn.getAttribute("data-target");
      const allData = loadData();
      const key = document.getElementById("date").value || todayKey;
      const dayData = getDayData(allData, key);

      if (target === "water") {
        const delta = action === "increase" ? 1 : -1;
        dayData.water = Math.max(0, Math.min(20, (dayData.water || 0) + delta));
        updateWaterUI(dayData.water);
      } else if (target === "study") {
        const delta = action === "increase" ? 1 : -1;
        dayData.studyHours = Math.max(0, Math.min(16, (dayData.studyHours || 0) + delta));
        updateStudyUI(dayData.studyHours);
      } else if (target === "reading") {
        const delta = action === "increase" ? 1 : -1;
        dayData.readingPages = Math.max(0, Math.min(1000, (dayData.readingPages || 0) + delta));
        updateReadingUI(dayData.readingPages);
      } else if (target === "sleep") {
        const delta = action === "increase" ? 1 : -1;
        dayData.sleepHours = Math.max(0, Math.min(24, (dayData.sleepHours || 0) + delta));
        updateSleepUI(dayData.sleepHours);
      }

      allData[key] = dayData;
      saveData(allData);
      updateSummary(dayData);
    });
  });

  // Mood buttons
  document
    .querySelectorAll("#mood-options .mood-btn")
    .forEach((btn) =>
      btn.addEventListener("click", () => {
        const moodValue = Number(btn.getAttribute("data-mood"));
        const allData = loadData();
        const key = document.getElementById("date").value || todayKey;
        const dayData = getDayData(allData, key);
        dayData.mood = moodValue;
        allData[key] = dayData;
        saveData(allData);

        document
          .querySelectorAll("#mood-options .mood-btn")
          .forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
        updateMoodLabel(moodValue);
        updateSummary(dayData);
      })
    );

  // Initial load
  refreshUIForSelectedDate();
}

document.addEventListener("DOMContentLoaded", bindEvents);
