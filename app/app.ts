const socket = new WebSocket("ws://localhost:8080/benni-socket");

socket.onopen = () => {
  console.log("Connected to server");
};

socket.onmessage = (message) => {
  console.log("Received message:", message.data);
};
const buttonHello = document.querySelector("button");
if (buttonHello) {
  buttonHello.onclick = () => {
    socket.send("Hello, server!");
  };
}
