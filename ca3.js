document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    
    if (message === '') {
        return;
    }

    displayMessage(message, 'user');
    input.value = '';

    setTimeout(() => {
        displayMessage("Bot: I received your message!", 'bot');
    }, 500);
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    
    messageDiv.classList.add('message');
    if (sender === 'user') {
        messageDiv.classList.add('user');
    }

    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}