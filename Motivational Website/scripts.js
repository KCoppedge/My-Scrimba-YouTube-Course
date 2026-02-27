const vibrantBackgrounds = [
    "#FF5733", // Sunset Orange
    "#33FF57", // Electric Lime
    "#3357FF", // Royal Blue
    "#F333FF", // Neon Magenta
    "#FFBD33", // Bright Amber
    "#00D4FF", // Deep Sky Blue
    "#7D3CFF", // Electric Purple
    "#FF007F", // Bright Rose
    "#00FFAB", // Aqua Mint
    "#FFD700", // Metallic Gold
    "#FF4500", // Orange Red
    "#1E90FF", // Dodger Blue
    "#ADFF2F", // Green Yellow
    "#FF1493", // Deep Pink
    "#00FA9A", // Medium Spring Green
    "#8A2BE2", // Blue Violet
    "#00BFFF", // Deep Sky Blue
    "#FF8C00", // Dark Orange
    "#9400D3", // Dark Violet
    "#00CED1", // Dark Turquoise
    // --- NEW ADDITIONS ---
    "#FF3131", // Neon Red
    "#0FF0FC", // Electric Cyan
    "#BC13FE", // Neon Purple
    "#8FFF00", // Bright Chartreuse
    "#FF6EC7", // Candy Pink
    "#4D4DFF", // Neon Blue
    "#FFFB00", // Laser Lemon
    "#00FF00", // Pure Green
    "#FF00FF", // Pure Magenta
    "#50C878", // Emerald Green
    "#E0B0FF", // Mauve
    "#008080", // Teal
    "#E6E6FA", // Lavender
    "#FF7F50", // Coral
    "#40E0D0"  // Turquoise
];

const positiveMessages = [
    "You're doing great!",
    "Keep pushing forward!",
    "Success is around the corner",
    "Your potential is limitless.",
    "Small progress is still progress!",
    "Believe in yourself!",
    "You've got this!",
    "You're incredible.",
    "Believe in yourself!",
    "Keep chipping away at your dreams.",
    "Even the smallest step towards your goal is progress.",
    "Don't give in.",
    "You have talent, you just need to find it.",
    "You're a pillar of strength.",
    "I've always believed in you.",
    "You're a great person.",
    "Struggling is never easy, but I believe in you.",
    "You're never truly alone.",
    "You're made of the cosmos.",
    "Anyone and everyone can succeed.",
    "Take care of yourself.",
    "It's okay to go slow.",
    "Remember to hydrate and exercise!",
    "You have such a kind heart.",
    "The world is better with you in it.",
    "You're more capable than you realize.",
    "You are worthy of all the good things coming your way.",
    "Your perspective is unique and valuable.",
    "You bring a special light to those around you.",
    "Be proud of how far you've come.",
    "You are enough, exactly as you are.",
    "Your resilience is truly inspiring.",
    "You deserve to take up space and be heard.",
    "The effort you put in matters.",
    "You're doing the best you can, and that is plenty.",
    "Your kindness is a gift to the world.",
    "You have a wonderful way of looking at things.",
    "I'm so glad you're here today.",
    "Behind... you..."
];



let messageEl = document.getElementById("message-el")
let newMessageBtn = document.getElementById("newMessage-btn")

newMessageBtn.addEventListener("click", function () {
    const randomBackgroundIndex = Math.floor(Math.random() * vibrantBackgrounds.length);
    const randomBackgroundItem = vibrantBackgrounds[randomBackgroundIndex];

    const randomQuoteIndex = Math.floor(Math.random() * positiveMessages.length);
    const chosenQuote = positiveMessages[randomQuoteIndex];

    if (chosenQuote === "Behind... you...") {
        // --- 1. THE VOID (Immediate) ---
        document.body.style.background = "#000000";
        messageEl.classList.add("fade-out"); // Fade out the PREVIOUS message
        newMessageBtn.style.visibility = "hidden"; // Button vanishes

        // Wait a moment for the fade-out to finish, then clear the text entirely
        setTimeout(() => { messageEl.textContent = ""; }, 1000);

        // --- 2. THE REVEAL (Starts after 4 seconds of total darkness) ---
        setTimeout(function () {
            messageEl.textContent = "RUN AWAY NOW";
            messageEl.style.color = "#FF0000";
            messageEl.classList.remove("fade-out"); // Slowly fades in
        }, 4000);

        // --- 3. THE ESCAPE BUTTON (Starts at 7 seconds) ---
        setTimeout(function () {
            newMessageBtn.textContent = "Escape";
            newMessageBtn.style.visibility = "visible";
            newMessageBtn.style.color = "#FF0000";
            newMessageBtn.style.borderColor = "#FF0000";
            newMessageBtn.style.background = "transparent";
        }, 7000);

        // --- 4. THE RESET (After 12 seconds total) ---
        setTimeout(function () {
            newMessageBtn.textContent = "New Message";
            newMessageBtn.style.color = "";
            newMessageBtn.style.borderColor = "";
            newMessageBtn.style.background = "";

            document.body.style.background = "#1a1a1a";
            messageEl.style.color = "#FFFFFF";
            messageEl.textContent = "Click for a message...";
        }, 12000);

    } else {
        // --- NORMAL MODE ---
        messageEl.classList.remove("fade-out"); // Ensure text is visible
        messageEl.textContent = chosenQuote;
        document.body.style.background = randomBackgroundItem;
        messageEl.style.color = "#FFFFFF";
        newMessageBtn.style.visibility = "visible";
        newMessageBtn.textContent = "New Message";
    }
});