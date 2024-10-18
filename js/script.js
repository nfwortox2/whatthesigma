document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.animated-text');
    messages.forEach((message, index) => {
        setTimeout(() => {
            message.classList.add('visible');
        }, index * 1000); // Delay each message by 2 seconds
    });
});
