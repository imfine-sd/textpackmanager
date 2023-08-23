function send(message: string) {
  figma.ui.postMessage(message);
}

function updateUI(targetId: string, value: string) {
  const message = JSON.stringify({ type: "update", targetId, value });
  send(message);
}

function useMessenger() {
  return {
    send,
    updateUI,
  };
}

const messenger = useMessenger();

export default messenger;
