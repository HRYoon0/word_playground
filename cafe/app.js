const wordSets = {
  1: [
    "cat", "dog", "sun", "map", "red", "box", "hat", "egg", "pen", "cup",
    "pig", "jam", "fox", "run", "big", "toy", "bed", "bus", "bag", "leg",
    "arm", "sit", "hop", "wet", "dry", "hot", "cold", "milk", "book", "desk",
    "fish", "ant", "bat", "cow", "duck", "frog", "goat", "hen", "lion", "bird",
    "bear", "ball", "cake", "door", "face", "hand", "kite", "leaf", "moon", "rain",
  ],
  2: [
    "apple", "happy", "water", "green", "music", "school", "friend", "yellow", "pencil", "window",
    "rabbit", "family", "garden", "cookie", "soccer", "planet", "smile", "chair", "table", "lunch",
    "bread", "brown", "brush", "candy", "clock", "crayon", "dress", "drink", "fruit", "heart",
    "horse", "juice", "lemon", "light", "money", "mouse", "night", "paint", "paper", "party",
    "phone", "pizza", "plant", "robot", "sheep", "shirt", "shoes", "snake", "spoon", "train",
  ],
  3: [
    "animal", "banana", "camera", "circle", "doctor", "dragon", "flower", "jacket", "kitten", "ladder",
    "market", "orange", "pocket", "purple", "rocket", "silver", "summer", "turtle", "winter", "wonder",
    "artist", "bakery", "bottle", "branch", "bridge", "brother", "carrot", "cheese", "coffee", "corner",
    "desert", "farmer", "father", "finger", "garage", "guitar", "helmet", "jungle", "letter", "mother",
    "museum", "noodle", "number", "office", "people", "pepper", "picnic", "police", "potato", "pretty",
  ],
  4: [
    "airplane", "baseball", "birthday", "blanket", "camping", "cartoon", "chicken", "dolphin", "evening", "firefly",
    "glasses", "holiday", "kitchen", "library", "morning", "monster", "notebook", "octopus", "penguin", "rainbow",
    "sandwich", "teacher", "thunder", "treasure", "village", "weekend", "welcome", "picture", "pumpkin", "captain",
    "airport", "amazing", "another", "balloon", "bicycle", "careful", "college", "concert", "country", "drawing",
    "factory", "feather", "healthy", "history", "machine", "message", "outside", "present", "problem", "science",
  ],
  5: [
    "adventure", "beautiful", "butterfly", "chocolate", "classroom", "computer", "dinosaur", "favorite", "friendly", "homework",
    "keyboard", "magazine", "medicine", "mountain", "painting", "question", "saturday", "seashell", "snowball", "sunshine",
    "tomorrow", "umbrella", "vegetable", "waterfall", "wildlife", "backpack", "football", "exercise", "storybook", "playground",
    "breakfast", "activity", "bathroom", "building", "calendar", "children", "colorful", "customer", "daughter", "festival",
    "language", "learning", "midnight", "neighbor", "practice", "remember", "shopping", "swimming", "thankful", "vacation",
  ],
  6: [
    "alligator", "astronaut", "basketball", "blueberry", "campfire", "cheerful", "different", "discovery", "everybody", "fantastic",
    "fireworks", "important", "kangaroo", "newspaper", "pineapple", "principal", "rectangle", "scientist", "september", "spaghetti",
    "strawberry", "telephone", "together", "wonderful", "yesterday", "excellent", "hamburger", "invisible", "jellyfish", "adjective",
    "afternoon", "apologize", "attention", "blueprint", "brilliant", "classmate", "confident", "crocodile", "knowledge", "landscape",
  ],
  7: [
    "apartment", "carefully", "celebrate", "character", "community", "dangerous", "delicious", "detective", "direction", "education",
    "everywhere", "furniture", "instrument", "interesting", "lightning", "magician", "microscope", "passenger", "pollution", "recycling",
    "restaurant", "sometimes", "spaceship", "surprise", "vegetarian", "volleyball", "watermelon", "achievement", "calculator", "celebration",
    "comfortable", "connection", "dictionary", "difficulty", "earthquake", "experiment", "friendship", "graduation", "helicopter", "leadership",
  ],
  8: [
    "alphabet", "aquarium", "breakfast", "champion", "dictionary", "elevator", "explorer", "fisherman", "friendship", "geography",
    "gymnasium", "happiness", "helicopter", "invention", "knowledge", "librarian", "marshmallow", "paragraph", "photograph", "saxophone",
    "skateboard", "snowflake", "spacesuit", "telescope", "volunteer", "advertisement", "announcement", "appreciation", "architecture", "conversation",
    "cooperation", "description", "electricity", "environment", "explanation", "information", "instruction", "international", "kindergarten", "laboratory",
  ],
};

const foodIcons = ["🍎", "🥛", "🍪", "🥪", "🍓", "🍰", "🥞", "🍕", "🥤", "🍩", "🥗", "🍌"];

const customerImages = [
  "./assets/customer-green.svg",
  "./assets/customer-blue.svg",
  "./assets/customer-yellow.svg",
];

const maxMisses = 5;

const elements = {
  orderBelt: document.querySelector("#orderBelt"),
  customerLine: document.querySelector("#customerLine"),
  plate: document.querySelector("#plate"),
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
  missLabel: document.querySelector("#missLabel"),
  chanceDots: document.querySelector("#chanceDots"),
  servedList: document.querySelector("#servedList"),
  servedCount: document.querySelector("#servedCount"),
  wordBank: document.querySelector("#wordBank"),
  wordLevelLabel: document.querySelector("#wordLevelLabel"),
};

let state = createInitialState();
let spawnTimerId = 0;
let tickTimerId = 0;

function createInitialState() {
  return {
    running: false,
    level: 1,
    score: 0,
    combo: 0,
    served: 0,
    levelServed: 0,
    attempts: 0,
    correct: 0,
    misses: 0,
    orders: [],
    usedWords: new Set(),
    recentIcons: [],
  };
}

function getLevelGoal(level) {
  return Math.min(7 + Math.floor(level * 1.4), 20);
}

function getLevelSettings(level) {
  const clampedLevel = Math.min(level, 10);
  return {
    spawnMs: Math.max(1500, 3300 - clampedLevel * 130),
    patienceMs: Math.max(9200, 17600 - clampedLevel * 520),
    maxOrders: Math.min(6, 3 + Math.floor(clampedLevel / 2)),
    points: 8 + clampedLevel * 3,
  };
}

function getWordsForLevel(level) {
  const clampedLevel = Math.min(level, 8);
  const words = [];

  for (let currentLevel = 1; currentLevel <= clampedLevel; currentLevel += 1) {
    words.push(...wordSets[currentLevel]);
  }

  return [...new Set(words)];
}

function getNextWord() {
  const words = getWordsForLevel(state.level);

  if (state.usedWords.size > words.length * 0.72) {
    state.usedWords.clear();
  }

  const availableWords = words.filter((word) => !state.usedWords.has(word));
  const wordPool = availableWords.length > 0 ? availableWords : words;
  const word = wordPool[Math.floor(Math.random() * wordPool.length)];
  state.usedWords.add(word);
  return word;
}

function getNextFoodIcon() {
  const availableIcons = foodIcons.filter((icon) => !state.recentIcons.includes(icon));
  const iconPool = availableIcons.length > 0 ? availableIcons : foodIcons;
  const icon = iconPool[Math.floor(Math.random() * iconPool.length)];
  state.recentIcons.push(icon);

  if (state.recentIcons.length > 4) {
    state.recentIcons.shift();
  }

  return icon;
}

function renderWordBank() {
  const visibleWords = getWordsForLevel(state.level);
  elements.wordBank.innerHTML = "";
  elements.wordLevelLabel.textContent = `${visibleWords.length} words`;

  visibleWords.forEach((word) => {
    const chip = document.createElement("span");
    chip.textContent = word;
    elements.wordBank.append(chip);
  });
}

function updateStats() {
  const goal = getLevelGoal(state.level);
  const accuracy = state.attempts === 0 ? 100 : Math.round((state.correct / state.attempts) * 100);
  const progress = Math.min((state.levelServed / goal) * 100, 100);

  elements.scoreValue.textContent = state.score;
  elements.comboValue.textContent = state.combo;
  elements.accuracyValue.textContent = `${accuracy}%`;
  elements.levelValue.textContent = state.level;
  elements.goalLabel.textContent = `${state.levelServed} / ${goal}`;
  elements.goalBar.style.width = `${progress}%`;
  elements.servedCount.textContent = `${state.served} orders`;
  elements.missLabel.textContent = `${Math.max(maxMisses - state.misses, 0)} left`;
  elements.chanceDots.innerHTML = "";

  for (let index = 0; index < maxMisses; index += 1) {
    const dot = document.createElement("span");
    dot.classList.toggle("lost", index < state.misses);
    elements.chanceDots.append(dot);
  }
}

function setMessage(title, body, isVisible = true) {
  elements.messageCard.innerHTML = `<strong>${title}</strong><span>${body}</span>`;
  elements.messageCard.classList.toggle("hidden", !isVisible);
}

function scheduleOrders() {
  window.clearInterval(spawnTimerId);
  spawnTimerId = window.setInterval(spawnOrder, getLevelSettings(state.level).spawnMs);
}

function registerMiss(message) {
  state.misses += 1;
  state.combo = 0;
  elements.feedbackText.textContent = message;
  updateStats();

  if (state.misses >= maxMisses) {
    gameOver();
  }
}

function gameOver() {
  stopGame();
  clearOrders();
  elements.wordInput.value = "";
  setMessage("Game Over", `You served ${state.served} orders and scored ${state.score}.`);
  elements.feedbackText.textContent = "Press Start to try again.";
}

function showCustomerReaction(order, reaction) {
  const bubble = document.createElement("span");
  bubble.className = "customer-reaction";
  bubble.textContent = reaction;
  order.customerNode.parentElement.append(bubble);

  const left = order.customerNode.offsetLeft + order.customerNode.offsetWidth / 2;
  bubble.style.left = `${left}px`;
  setTimeout(() => bubble.remove(), 1200);
}

function spawnOrder() {
  if (!state.running) return;

  const settings = getLevelSettings(state.level);
  if (state.orders.length >= settings.maxOrders) return;

  const word = getNextWord();
  const icon = getNextFoodIcon();
  const customerImage = customerImages[Math.floor(Math.random() * customerImages.length)];
  const node = document.createElement("div");
  const customerNode = document.createElement("img");

  customerNode.className = "waiting-customer";
  customerNode.src = customerImage;
  customerNode.alt = "";
  customerNode.setAttribute("aria-hidden", "true");

  node.className = "order-ticket";
  node.innerHTML = `
    <div class="food-icon" aria-hidden="true">${icon}</div>
    <div class="order-word">${word}</div>
    <div class="patience"><span></span></div>
  `;

  elements.orderBelt.append(node);
  elements.customerLine.append(customerNode);
  state.orders.push({
    id: crypto.randomUUID(),
    word,
    icon,
    customerImage,
    node,
    customerNode,
    patienceNode: node.querySelector(".patience span"),
    createdAt: performance.now(),
    patienceMs: settings.patienceMs,
  });
}

function tickOrders() {
  if (!state.running) return;

  const now = performance.now();
  const survivors = [];

  state.orders.forEach((order) => {
    const remainingRatio = Math.max(0, 1 - (now - order.createdAt) / order.patienceMs);
    order.patienceNode.style.transform = `scaleX(${remainingRatio})`;

    if (remainingRatio <= 0) {
      showCustomerReaction(order, "💢");
      order.node.remove();
      order.customerNode.classList.add("served");
      setTimeout(() => order.customerNode.remove(), 900);
      registerMiss(`"${order.word}" waited too long. Serve the next order.`);
    } else {
      survivors.push(order);
    }
  });

  state.orders = survivors;
}

function addServedItem(icon) {
  const item = document.createElement("div");
  item.className = "served-item";
  item.textContent = icon;
  elements.servedList.prepend(item);

  if (elements.servedList.children.length > 20) {
    elements.servedList.lastElementChild.remove();
  }
}

function popPlate(icon) {
  elements.plate.innerHTML = `<span class="plate-food">${icon}</span>`;
  elements.plate.classList.remove("pop");
  window.requestAnimationFrame(() => elements.plate.classList.add("pop"));
}

function levelUpIfReady() {
  const goal = getLevelGoal(state.level);
  if (state.levelServed < goal) return;

  state.level += 1;
  state.levelServed = 0;
  state.combo += 2;
  state.usedWords.clear();
  clearOrders();
  renderWordBank();
  updateStats();
  scheduleOrders();
  setMessage(`Level ${state.level}!`, "Orders arrive faster now. Keep serving.");
  elements.feedbackText.textContent = `Great service. Level ${state.level} has faster orders and more words.`;
  window.setTimeout(() => setMessage("", "", false), 1200);
  spawnOrder();
}

function serveWord(rawWord) {
  if (!state.running) return;

  const typedWord = rawWord.trim().toLowerCase();
  if (!typedWord) return;

  state.attempts += 1;
  const match = state.orders.find((order) => order.word === typedWord);

  if (!match) {
    state.combo = 0;
    elements.feedbackText.textContent = `"${typedWord}" is not on an order ticket right now.`;
    updateStats();
    return;
  }

  const settings = getLevelSettings(state.level);
  const patienceRatio = Math.max(0, 1 - (performance.now() - match.createdAt) / match.patienceMs);
  const speedBonus = Math.round(settings.points * patienceRatio * 0.7);
  const comboBonus = Math.min(state.combo, 15);

  state.correct += 1;
  state.combo += 1;
  state.served += 1;
  state.levelServed += 1;
  state.score += settings.points + speedBonus + comboBonus;
  state.orders = state.orders.filter((order) => order.id !== match.id);

  showCustomerReaction(match, "♥");
  match.node.classList.add("served");
  match.customerNode.classList.add("served");
  setTimeout(() => match.node.remove(), 320);
  setTimeout(() => match.customerNode.remove(), 900);
  addServedItem(match.icon);
  popPlate(match.icon);
  elements.feedbackText.textContent = `Served "${match.word}" with a ${speedBonus} point speed bonus.`;
  updateStats();
  levelUpIfReady();
}

function clearOrders() {
  state.orders.forEach((order) => order.node.remove());
  state.orders.forEach((order) => order.customerNode.remove());
  state.orders = [];
}

function stopGame() {
  state.running = false;
  window.clearInterval(spawnTimerId);
  window.clearInterval(tickTimerId);
  elements.startButton.textContent = "Start";
}

function startGame() {
  stopGame();
  clearOrders();

  state = {
    ...createInitialState(),
    running: true,
    level: Number(elements.levelSelect.value),
  };

  elements.servedList.innerHTML = "";
  elements.plate.innerHTML = "";
  elements.wordInput.value = "";
  elements.wordInput.focus();
  elements.startButton.textContent = "Restart";
  elements.feedbackText.textContent = "Serve enough orders to move to the next level.";
  setMessage("", "", false);
  renderWordBank();
  updateStats();

  spawnOrder();
  scheduleOrders();
  tickTimerId = window.setInterval(tickOrders, 80);
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
  serveWord(elements.wordInput.value);
  elements.wordInput.value = "";
  elements.wordInput.focus();
});

elements.wordInput.addEventListener("input", () => {
  const typedWord = elements.wordInput.value.trim().toLowerCase();
  const match = state.orders.find((order) => order.word === typedWord);

  if (match) {
    serveWord(typedWord);
    elements.wordInput.value = "";
  }
});

state.level = Number(elements.levelSelect.value);
renderWordBank();
updateStats();
