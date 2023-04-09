// const botones = document.querySelector('#botones')
// const nombreUsuario = document.querySelector('#nombreUsuario')


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCFd177rq6WNMEQWCOOPCDu7eiwtA8-Wlo",
//   authDomain: "chatweb-c00a1.firebaseapp.com",
//   projectId: "chatweb-c00a1",
//   storageBucket: "chatweb-c00a1.appspot.com",
//   messagingSenderId: "800250720582",
//   appId: "1:800250720582:web:66a252855fcc91d2817547"
// };

const chatInput = document.querySelector('.chat-input input');
const chatMessages = document.querySelector('.chat-messages');

chatInput.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) { // Enter key
    const message = this.value.trim();
    if (message !== '') {
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      messageElement.classList.add('chat-message');
      chatMessages.appendChild(messageElement);
      this.value = '';
    }
  }
});

