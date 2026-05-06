const wordSets = {
  1: [
    "cat",
    "dog",
    "sun",
    "map",
    "red",
    "box",
    "hat",
    "egg",
    "pen",
    "cup",
    "pig",
    "jam",
    "fox",
    "run",
    "big",
    "toy",
    "bed",
    "bus",
    "bag",
    "leg",
    "arm",
    "sit",
    "hop",
    "wet",
    "dry",
    "hot",
    "cold",
    "milk",
    "book",
    "desk",
    "fish",
  ],
  2: [
    "apple",
    "happy",
    "water",
    "green",
    "music",
    "school",
    "friend",
    "yellow",
    "pencil",
    "window",
    "rabbit",
    "family",
    "garden",
    "cookie",
    "soccer",
    "planet",
    "smile",
    "chair",
    "table",
    "lunch",
    "black",
    "white",
    "grape",
    "tiger",
    "zebra",
    "story",
    "beach",
    "river",
    "cloud",
    "dance",
    "dream",
    "house",
  ],
  3: [
    "animal",
    "banana",
    "camera",
    "circle",
    "doctor",
    "dragon",
    "flower",
    "jacket",
    "kitten",
    "ladder",
    "market",
    "orange",
    "pocket",
    "purple",
    "rocket",
    "silver",
    "summer",
    "turtle",
    "winter",
    "wonder",
    "basket",
    "castle",
    "forest",
    "island",
    "monkey",
    "pirate",
    "puppet",
    "travel",
    "violin",
    "yogurt",
    "button",
    "candle",
  ],
  4: [
    "airplane",
    "baseball",
    "birthday",
    "blanket",
    "camping",
    "cartoon",
    "chicken",
    "dolphin",
    "evening",
    "firefly",
    "glasses",
    "holiday",
    "kitchen",
    "library",
    "morning",
    "monster",
    "notebook",
    "octopus",
    "penguin",
    "rainbow",
    "sandwich",
    "teacher",
    "thunder",
    "treasure",
    "village",
    "weekend",
    "welcome",
    "whisper",
    "picture",
    "pumpkin",
    "bedroom",
    "captain",
  ],
  5: [
    "adventure",
    "beautiful",
    "butterfly",
    "chocolate",
    "classroom",
    "computer",
    "dinosaur",
    "favorite",
    "friendly",
    "homework",
    "keyboard",
    "magazine",
    "medicine",
    "mountain",
    "painting",
    "question",
    "saturday",
    "seashell",
    "snowball",
    "sunshine",
    "tomorrow",
    "umbrella",
    "vegetable",
    "waterfall",
    "wildlife",
    "backpack",
    "football",
    "birthday",
    "exercise",
    "storybook",
    "playground",
    "breakfast",
  ],
  6: [
    "alligator",
    "astronaut",
    "basketball",
    "blueberry",
    "campfire",
    "cheerful",
    "different",
    "discovery",
    "everybody",
    "fantastic",
    "fireworks",
    "important",
    "kangaroo",
    "newspaper",
    "pineapple",
    "porridge",
    "principal",
    "rectangle",
    "remember",
    "scientist",
    "september",
    "spaghetti",
    "strawberry",
    "telephone",
    "together",
    "wonderful",
    "yesterday",
    "excellent",
    "hamburger",
    "invisible",
    "jellyfish",
    "storybook",
  ],
  7: [
    "apartment",
    "brilliant",
    "carefully",
    "celebrate",
    "character",
    "community",
    "dangerous",
    "delicious",
    "detective",
    "direction",
    "education",
    "everywhere",
    "furniture",
    "important",
    "instrument",
    "interesting",
    "lightning",
    "magician",
    "microscope",
    "passenger",
    "playground",
    "pollution",
    "president",
    "recycling",
    "restaurant",
    "sometimes",
    "spaceship",
    "surprise",
    "telephone",
    "vegetarian",
    "volleyball",
    "watermelon",
  ],
  8: [
    "alphabet",
    "aquarium",
    "breakfast",
    "careless",
    "champion",
    "colorful",
    "dictionary",
    "elevator",
    "explorer",
    "fisherman",
    "friendship",
    "geography",
    "gymnasium",
    "happiness",
    "helicopter",
    "invention",
    "knowledge",
    "librarian",
    "marshmallow",
    "neighborhood",
    "paragraph",
    "photograph",
    "playful",
    "postcard",
    "saxophone",
    "skateboard",
    "snowflake",
    "spacesuit",
    "storybook",
    "telescope",
    "treasure",
    "volunteer",
  ],
  9: [
    "airconditioner",
    "announcement",
    "appreciate",
    "calculator",
    "comfortable",
    "conversation",
    "electricity",
    "environment",
    "experiment",
    "grandparents",
    "imagination",
    "invitation",
    "journalist",
    "kindergarten",
    "laboratory",
    "microphone",
    "organization",
    "playfulness",
    "population",
    "responsible",
    "temperature",
    "toothbrush",
    "traditional",
    "transportation",
    "understand",
    "vocabulary",
    "watercolor",
    "wonderland",
    "xylophone",
    "youthful",
  ],
  10: [
    "achievement",
    "architecture",
    "championship",
    "communication",
    "congratulations",
    "constellation",
    "determination",
    "entertainment",
    "extraordinary",
    "friendliness",
    "immediately",
    "independence",
    "international",
    "mathematics",
    "opportunity",
    "personality",
    "pronunciation",
    "responsibility",
    "satisfaction",
    "storytelling",
    "technology",
    "unbelievable",
    "university",
    "vegetables",
    "waterproof",
    "wonderfully",
    "yesterday",
    "zookeeper",
  ],
};

const extraWordSets = {
  1: [
    "ant",
    "bat",
    "cow",
    "duck",
    "frog",
    "goat",
    "hen",
    "lion",
    "bird",
    "bear",
    "ball",
    "bell",
    "cake",
    "door",
    "face",
    "foot",
    "hand",
    "kite",
    "king",
    "leaf",
    "moon",
    "nose",
    "rain",
    "ring",
    "ship",
    "star",
    "tree",
    "wall",
    "wind",
    "yard",
    "zero",
    "blue",
    "pink",
    "gray",
    "gold",
    "slow",
    "fast",
    "soft",
    "hard",
    "warm",
  ],
  2: [
    "bread",
    "brown",
    "brush",
    "candy",
    "clock",
    "crayon",
    "dress",
    "drink",
    "fruit",
    "goose",
    "heart",
    "horse",
    "juice",
    "lemon",
    "light",
    "money",
    "mouse",
    "night",
    "paint",
    "paper",
    "party",
    "phone",
    "pizza",
    "plant",
    "queen",
    "robot",
    "sheep",
    "shirt",
    "shoes",
    "snake",
    "spoon",
    "stone",
    "teeth",
    "train",
    "truck",
    "watch",
    "whale",
    "world",
    "write",
    "young",
  ],
  3: [
    "artist",
    "bakery",
    "bottle",
    "branch",
    "bridge",
    "brother",
    "carrot",
    "cheese",
    "church",
    "coffee",
    "corner",
    "desert",
    "farmer",
    "father",
    "finger",
    "garage",
    "guitar",
    "helmet",
    "jungle",
    "letter",
    "little",
    "mother",
    "museum",
    "noodle",
    "number",
    "office",
    "people",
    "pepper",
    "picnic",
    "police",
    "potato",
    "pretty",
    "sister",
    "square",
    "street",
    "strong",
    "supper",
    "ticket",
    "tomato",
    "yellow",
  ],
  4: [
    "airport",
    "amazing",
    "another",
    "balloon",
    "between",
    "bicycle",
    "blanket",
    "cabinet",
    "careful",
    "college",
    "concert",
    "costume",
    "country",
    "curtain",
    "diamond",
    "drawing",
    "evening",
    "factory",
    "feather",
    "healthy",
    "history",
    "hundred",
    "machine",
    "message",
    "morning",
    "outside",
    "package",
    "present",
    "problem",
    "quietly",
    "reading",
    "science",
    "seaweed",
    "special",
    "station",
    "student",
    "sunrise",
    "uniform",
    "weather",
    "without",
  ],
  5: [
    "activity",
    "bathroom",
    "building",
    "calendar",
    "children",
    "colorful",
    "customer",
    "daughter",
    "favorite",
    "festival",
    "football",
    "friendly",
    "language",
    "learning",
    "midnight",
    "neighbor",
    "notebook",
    "ordinary",
    "painting",
    "practice",
    "question",
    "remember",
    "sandwich",
    "shopping",
    "snowball",
    "sunshine",
    "surprise",
    "swimming",
    "thankful",
    "thousand",
    "together",
    "treasure",
    "vacation",
    "vegetable",
    "waterfall",
    "whatever",
    "workbook",
    "yourself",
    "backyard",
    "campground",
  ],
  6: [
    "adjective",
    "afternoon",
    "apologize",
    "attention",
    "blueprint",
    "breakfast",
    "brilliant",
    "butterfly",
    "chocolate",
    "classmate",
    "confident",
    "crocodile",
    "different",
    "excellent",
    "fantastic",
    "fireplace",
    "footprint",
    "important",
    "jellyfish",
    "kangaroo",
    "knowledge",
    "landscape",
    "newspaper",
    "pineapple",
    "rectangle",
    "saxophone",
    "scientist",
    "snowflake",
    "spaceship",
    "staircase",
    "strawberry",
    "telephone",
    "timetable",
    "toothpaste",
    "wonderful",
    "workplace",
    "yesterday",
    "adventure",
    "bookstore",
    "cafeteria",
  ],
  7: [
    "achievement",
    "basketball",
    "calculator",
    "celebration",
    "comfortable",
    "connection",
    "dictionary",
    "difficulty",
    "disappear",
    "earthquake",
    "everywhere",
    "experiment",
    "friendship",
    "graduation",
    "helicopter",
    "instrument",
    "interesting",
    "leadership",
    "lighthouse",
    "membership",
    "microscope",
    "neighborhood",
    "playground",
    "population",
    "president",
    "restaurant",
    "responsible",
    "skateboard",
    "storytelling",
    "temperature",
    "understand",
    "volleyball",
    "watermelon",
    "wheelchair",
    "wonderland",
    "xylophone",
    "youthfulness",
    "zookeeper",
    "photograph",
    "postoffice",
  ],
  8: [
    "advertisement",
    "announcement",
    "appreciation",
    "architecture",
    "championship",
    "conversation",
    "cooperation",
    "description",
    "electricity",
    "environment",
    "explanation",
    "grandparent",
    "imagination",
    "information",
    "instruction",
    "international",
    "kindergarten",
    "laboratory",
    "mathematics",
    "microphone",
    "organization",
    "opportunity",
    "personality",
    "playfulness",
    "pronunciation",
    "relationship",
    "responsibility",
    "satisfaction",
    "subtraction",
    "temperature",
    "traditional",
    "transportation",
    "unbelievable",
    "university",
    "vocabulary",
    "watercolor",
    "wonderfully",
    "yesterday",
    "technology",
    "friendliness",
  ],
  9: [
    "accomplishment",
    "airconditioner",
    "communication",
    "congratulation",
    "constellation",
    "determination",
    "disagreement",
    "entertainment",
    "extraordinary",
    "familiarity",
    "independence",
    "investigation",
    "mathematical",
    "multiplication",
    "nevertheless",
    "participation",
    "possibility",
    "preparation",
    "professional",
    "recommendation",
    "refrigerator",
    "representation",
    "respectfully",
    "storyteller",
    "thunderstorm",
    "transformation",
    "understanding",
    "unforgettable",
    "unfortunately",
    "waterproof",
    "wonderfulness",
    "workstation",
    "zoologist",
  ],
  10: [
    "alphabetically",
    "characteristic",
    "concentration",
    "congratulations",
    "environmental",
    "experimentation",
    "extraordinarily",
    "immediately",
    "internationally",
    "misunderstanding",
    "organizational",
    "pronunciation",
    "responsibilities",
    "transportation",
    "university",
    "visualization",
    "weatherproof",
    "wonderfully",
  ],
};

const fishColors = [
  "#ffcf5f",
  "#ff7b7b",
  "#88df83",
  "#7dc9ff",
  "#ffa7d1",
  "#b89cff",
  "#ffad66",
  "#70e0cc",
  "#f5a3ff",
  "#9ce36f",
];

const fishShapes = [
  "fish-shape-long",
  "fish-shape-round",
  "fish-shape-spiky",
  "fish-shape-flat",
  "fish-shape-tiny",
  "fish-shape-big",
];

const fishTypes = [
  { className: "fish-speed-slow", label: "slow", speedMultiplier: 0.72, scoreMultiplier: 1 },
  { className: "fish-speed-normal", label: "steady", speedMultiplier: 1, scoreMultiplier: 1 },
  { className: "fish-speed-fast", label: "fast", speedMultiplier: 1.32, scoreMultiplier: 1.25 },
  { className: "fish-speed-quick", label: "quick", speedMultiplier: 1.62, scoreMultiplier: 1.55 },
];

const elements = {
  pond: document.querySelector("#pond"),
  startButton: document.querySelector("#startButton"),
  levelSelect: document.querySelector("#levelSelect"),
  wordInput: document.querySelector("#wordInput"),
  typingForm: document.querySelector("#typingForm"),
  scoreValue: document.querySelector("#scoreValue"),
  comboValue: document.querySelector("#comboValue"),
  accuracyValue: document.querySelector("#accuracyValue"),
  levelValue: document.querySelector("#levelValue"),
  messageCard: document.querySelector("#messageCard"),
  feedbackText: document.querySelector("#feedbackText"),
  goalLabel: document.querySelector("#goalLabel"),
  goalBar: document.querySelector("#goalBar"),
  tank: document.querySelector("#tank"),
  caughtCount: document.querySelector("#caughtCount"),
  wordBank: document.querySelector("#wordBank"),
  wordLevelLabel: document.querySelector("#wordLevelLabel"),
};

let state = createInitialState();
let animationFrameId = 0;
let spawnTimerId = 0;
let lastFrameTime = 0;

function createInitialState() {
  return {
    running: false,
    level: 1,
    score: 0,
    combo: 0,
    caught: 0,
    levelCaught: 0,
    attempts: 0,
    correct: 0,
    fish: [],
    usedWords: new Set(),
  };
}

function getLevelGoal(level) {
  return Math.min(8 + Math.floor(level * 1.5), 22);
}

function getLevelSettings(level) {
  const clampedLevel = Math.min(level, 10);
  return {
    spawnMs: Math.max(590, 1620 - clampedLevel * 95),
    speedMin: 0.42 + clampedLevel * 0.13,
    speedMax: 0.78 + clampedLevel * 0.2,
    maxFish: Math.min(9, 4 + Math.floor(clampedLevel / 2)),
    points: 7 + clampedLevel * 3,
  };
}

function getWordsForLevel(level) {
  const clampedLevel = Math.min(level, 10);
  const words = [];

  for (let currentLevel = 1; currentLevel <= clampedLevel; currentLevel += 1) {
    words.push(...wordSets[currentLevel]);
    words.push(...extraWordSets[currentLevel]);
  }

  return [...new Set(words)];
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function getFishTextSize(word) {
  if (word.length >= 18) return "0.68rem";
  if (word.length >= 15) return "0.74rem";
  if (word.length >= 12) return "0.84rem";
  if (word.length >= 8) return "0.96rem";
  return "1.05rem";
}

function getFishWidth(word) {
  return Math.min(310, Math.max(108, word.length * 12 + 64));
}

function getNextWord() {
  const words = getWordsForLevel(state.level);

  if (state.usedWords.size > words.length * 0.75) {
    state.usedWords.clear();
  }

  const availableWords = words.filter((word) => !state.usedWords.has(word));
  const wordPool = availableWords.length > 0 ? availableWords : words;
  const word = wordPool[Math.floor(Math.random() * wordPool.length)];
  state.usedWords.add(word);
  return word;
}

function renderWordBank() {
  const visibleWords = getWordsForLevel(state.level);
  const fragment = document.createDocumentFragment();
  elements.wordBank.innerHTML = "";
  elements.wordLevelLabel.textContent = `${visibleWords.length} words`;

  visibleWords.forEach((word) => {
    const chip = document.createElement("span");
    chip.textContent = word;
    fragment.append(chip);
  });

  elements.wordBank.append(fragment);
}

function updateStats() {
  const goal = getLevelGoal(state.level);
  const accuracy = state.attempts === 0 ? 100 : Math.round((state.correct / state.attempts) * 100);
  const progress = Math.min((state.levelCaught / goal) * 100, 100);

  elements.scoreValue.textContent = state.score;
  elements.comboValue.textContent = state.combo;
  elements.accuracyValue.textContent = `${accuracy}%`;
  elements.levelValue.textContent = state.level;
  elements.goalLabel.textContent = `${state.levelCaught} / ${goal}`;
  elements.goalBar.style.width = `${progress}%`;
  elements.caughtCount.textContent = `${state.caught} fish`;
}

function setMessage(title, body, isVisible = true) {
  elements.messageCard.innerHTML = `<strong>${title}</strong><span>${body}</span>`;
  elements.messageCard.classList.toggle("hidden", !isVisible);
}

function scheduleSpawning() {
  window.clearInterval(spawnTimerId);
  spawnTimerId = window.setInterval(spawnFish, getLevelSettings(state.level).spawnMs);
}

function spawnFish() {
  if (!state.running) return;

  const settings = getLevelSettings(state.level);
  if (state.fish.length >= settings.maxFish) return;

  const pondRect = elements.pond.getBoundingClientRect();
  const word = getNextWord();
  const fish = document.createElement("div");
  const laneTop = randomBetween(pondRect.height * 0.45, pondRect.height - 84);
  const fromLeft = Math.random() > 0.5;
  const color = fishColors[Math.floor(Math.random() * fishColors.length)];
  const shape = fishShapes[Math.floor(Math.random() * fishShapes.length)];
  const type = fishTypes[Math.floor(Math.random() * fishTypes.length)];
  const speed = randomBetween(settings.speedMin, settings.speedMax) * type.speedMultiplier;

  fish.className = `fish ${shape} ${type.className}`;
  fish.textContent = word;
  fish.title = `${type.label} fish`;
  fish.style.setProperty("--fish-x", `${fromLeft ? -180 : pondRect.width + 55}px`);
  fish.style.setProperty("--fish-y", `${laneTop}px`);
  fish.style.background = color;
  fish.style.minWidth = `${getFishWidth(word)}px`;
  fish.style.fontSize = getFishTextSize(word);

  elements.pond.append(fish);

  state.fish.push({
    id: crypto.randomUUID(),
    word,
    node: fish,
    x: fromLeft ? -180 : pondRect.width + 55,
    direction: fromLeft ? 1 : -1,
    speed,
    color,
    shape,
    type,
  });
}

function animate(timestamp = 0) {
  if (!state.running) return;

  const delta = lastFrameTime === 0 ? 1 : Math.min((timestamp - lastFrameTime) / 16.67, 2);
  lastFrameTime = timestamp;
  const pondRect = elements.pond.getBoundingClientRect();
  const survivors = [];

  state.fish.forEach((fish) => {
    fish.x += fish.direction * fish.speed * delta;
    fish.node.style.setProperty("--fish-x", `${fish.x}px`);

    const isGoneRight = fish.direction === 1 && fish.x > pondRect.width + 190;
    const isGoneLeft = fish.direction === -1 && fish.x < -260;

    if (isGoneRight || isGoneLeft) {
      fish.node.remove();
      state.combo = 0;
      elements.feedbackText.textContent = `${fish.word} swam away. That was a ${fish.type.label} fish.`;
      updateStats();
    } else {
      survivors.push(fish);
    }
  });

  state.fish = survivors;
  animationFrameId = requestAnimationFrame(animate);
}

function addMiniFish(word, color, shape, type) {
  const miniFish = document.createElement("div");
  miniFish.className = `mini-fish ${shape} ${type.className}`;
  miniFish.style.background = color;
  miniFish.textContent = word;
  elements.tank.prepend(miniFish);

  if (elements.tank.children.length > 20) {
    elements.tank.lastElementChild.remove();
  }
}

function levelUpIfReady() {
  const goal = getLevelGoal(state.level);

  if (state.levelCaught < goal) return;

  state.level += 1;
  state.levelCaught = 0;
  state.combo += 2;
  state.usedWords.clear();
  clearFish();
  renderWordBank();
  updateStats();
  scheduleSpawning();
  setMessage(`Level ${state.level}!`, "Fish are faster now. Keep your eyes on the words.");
  elements.feedbackText.textContent = `Great work. Level ${state.level} has faster fish and more words.`;
  window.setTimeout(() => setMessage("", "", false), 1200);
  spawnFish();
}

function catchWord(rawWord) {
  if (!state.running) return;

  const typedWord = rawWord.trim().toLowerCase();
  if (!typedWord) return;

  state.attempts += 1;
  const match = state.fish.find((fish) => fish.word === typedWord);

  if (!match) {
    state.combo = 0;
    elements.feedbackText.textContent = `"${typedWord}" is not on a fish right now.`;
    updateStats();
    return;
  }

  const settings = getLevelSettings(state.level);
  const comboBonus = Math.min(state.combo, 15);
  const typeBonus = Math.round(settings.points * (match.type.scoreMultiplier - 1));
  state.correct += 1;
  state.combo += 1;
  state.caught += 1;
  state.levelCaught += 1;
  state.score += settings.points + comboBonus + typeBonus;
  state.fish = state.fish.filter((fish) => fish.id !== match.id);

  match.node.classList.add("caught");
  setTimeout(() => match.node.remove(), 180);
  addMiniFish(match.word, match.color, match.shape, match.type);
  elements.feedbackText.textContent = `Nice catch! "${match.word}" was a ${match.type.label} fish.`;
  updateStats();
  levelUpIfReady();
}

function clearFish() {
  state.fish.forEach((fish) => fish.node.remove());
  state.fish = [];
}

function stopGame() {
  state.running = false;
  lastFrameTime = 0;
  window.cancelAnimationFrame(animationFrameId);
  window.clearInterval(spawnTimerId);
  elements.startButton.textContent = "Start";
}

function startGame() {
  stopGame();
  clearFish();

  state = {
    ...createInitialState(),
    running: true,
    level: Number(elements.levelSelect.value),
  };

  elements.tank.innerHTML = "";
  elements.wordInput.value = "";
  elements.wordInput.focus();
  elements.startButton.textContent = "Restart";
  elements.feedbackText.textContent = "Catch enough fish to move to the next level.";
  setMessage("", "", false);
  renderWordBank();
  updateStats();

  spawnFish();
  scheduleSpawning();
  animationFrameId = requestAnimationFrame(animate);
}

elements.startButton.addEventListener("click", startGame);

elements.levelSelect.addEventListener("change", () => {
  if (state.running) {
    startGame();
    return;
  }

  state.level = Number(elements.levelSelect.value);
  renderWordBank();
  updateStats();
});

elements.typingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  catchWord(elements.wordInput.value);
  elements.wordInput.value = "";
  elements.wordInput.focus();
});

elements.wordInput.addEventListener("input", () => {
  const typedWord = elements.wordInput.value.trim().toLowerCase();
  const match = state.fish.find((fish) => fish.word === typedWord);

  if (match) {
    catchWord(typedWord);
    elements.wordInput.value = "";
  }
});

state.level = Number(elements.levelSelect.value);
renderWordBank();
updateStats();
