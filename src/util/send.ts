type MessageType = "update";

function send(message: string) {
  figma.ui.postMessage(message);
}

function update(targetId: string, value: string) {
  const message = JSON.stringify({ type: "update", targetId, value });
  send(message);
}

function bind(type: MessageType) {
  switch (type) {
    case "update":
      return update;
  }
}

export default bind;
