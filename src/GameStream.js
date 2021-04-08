export default class GameStream {
  constructor(backendUrl) {
    const addToChatMessage = document.querySelector('.online-widget__messages');
    const source = new EventSource(backendUrl);

    source.onmessage = (message) => {
      const gameEvent = JSON.parse(message.data);

      const newContainer = document.createElement('div');
      newContainer.classList.add('newContainer');

      const timeContainer = document.createElement('div');
      timeContainer.classList.add('time');
      timeContainer.textContent = `${gameEvent.timestamp}`;

      const textContainer = document.createElement('div');
      textContainer.classList.add('content');
      textContainer.textContent = `${gameEvent.text}`;

      addToChatMessage.appendChild(newContainer);
      newContainer.appendChild(timeContainer);
      newContainer.appendChild(textContainer);

      if (gameEvent.type === 'goal') {
        const newContainerGoal = document.createElement('img');
        newContainerGoal.setAttribute('src', 'football.png');
        newContainerGoal.classList.add('goal');
        addToChatMessage.appendChild(newContainerGoal);
      }

      if (gameEvent.type === 'freekick') {
        const newContainerFreekick = document.createElement('img');
        newContainerFreekick.setAttribute('src', 'bad_mark.png');
        newContainerFreekick.classList.add('freekick');
        addToChatMessage.appendChild(newContainerFreekick);
      }
    };
  }
}
