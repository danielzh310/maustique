document.addEventListener("DOMContentLoaded", () => {
    const typedText = document.getElementById("typed-text");
    const darkModeButton = document.getElementById("toggle-dark-mode");
    const body = document.body;

    const messages = ["Brainstorming ideas...", "Building interfaces...", "Stay tuned!"];
    let messageIndex = 0;

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
        darkModeButton.textContent = body.classList.contains("dark-mode") ? "🌙" : "🌞";
    });
});
