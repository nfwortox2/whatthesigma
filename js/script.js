document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const message = "This is a sample message that will appear word by word.";
    const words = message.split(" ");
    let delay = 5000; // 5 seconds delay

    words.forEach((word, index) => {
        const wordElement = document.createElement("div");
        wordElement.className = `word ${index % 2 === 0 ? 'left' : 'right'}`;
        wordElement.textContent = word;
        container.appendChild(wordElement);

        setTimeout(() => {
            wordElement.style.opacity = 1;
        }, delay + index * 1000); // 1 second interval between words
    });
});
