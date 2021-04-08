import GameStream from './GameStream';

const gameStream = new GameStream('http://localhost:5555/sse');
gameStream.run();
