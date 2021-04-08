import GameStream from './GameStream';

const gameStream = new GameStream('https://daria-chizh-online-reporting.herokuapp.com/sse');
gameStream.run();
