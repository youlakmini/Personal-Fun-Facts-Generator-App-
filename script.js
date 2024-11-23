// script.js
document.addEventListener('DOMContentLoaded', function() {
    const facts = [
        "I've hiked the challenging Angels Landing trail in Zion National Park!",
        "Yellowstone was the first National Park I ever visited.",
        "My favorite hike was the Rim-to-Rim trail at the Grand Canyon.",
        "I once spotted three black bears while hiking in Yosemite National Park.",
        "Rocky Mountain National Park has my favorite sunrise views from any trail."
    ];

    const factDisplay = document.getElementById('fact-display');
    const generateBtn = document.getElementById('generate-btn');

    function getRandomFact() {
        const randomIndex = Math.floor(Math.random() * facts.length);
        return facts[randomIndex];
    }

    generateBtn.addEventListener('click', function() {
        factDisplay.textContent = getRandomFact();
        // Add simple animation
        factDisplay.style.opacity = 0;
        setTimeout(() => {
            factDisplay.style.opacity = 1;
        }, 100);
    });
});
