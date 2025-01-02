// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const dots = document.getElementById("dots");
    const typedText = document.getElementById("typed-text");
    const darkModeButton = document.getElementById("toggle-dark-mode");
    const darkModeIcon = document.getElementById("dark-mode-icon");
    const body = document.body;

    let dotCount = 0;
    const messages = ["Connecting users...", "Building something great...", "Stay tuned!"];
    let messageIndex = 0;

    // Animate dots
    setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        dots.textContent = ".".repeat(dotCount) + "\u2003".repeat(3 - dotCount);
    }, 500);

    // Type text animation
    const typeMessage = () => {
        if (messageIndex < messages.length) {
            let currentMessage = messages[messageIndex];
            let typed = "";
            let i = 0;

            const typing = setInterval(() => {
                if (i < currentMessage.length) {
                    typed += currentMessage.charAt(i);
                    typedText.textContent = typed;
                    i++;
                } else {
                    clearInterval(typing);
                    messageIndex++;
                    setTimeout(() => {
                        typedText.textContent = "";
                        typeMessage();
                    }, 2000);
                }
            }, 100);
        } else {
            messageIndex = 0;
            typeMessage();
        }
    };

    typeMessage();

    // Toggle dark mode
    darkModeButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDarkMode = body.classList.contains("dark-mode");
        darkModeIcon.src = isDarkMode ? "dark-icon.png" : "light-icon.png";
    });
});
