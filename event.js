const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Myevent', () => {
  console.log('an event occurred!');
  setTimeout(() => {
    console.log('yes event is occuringgg');
  }, 2000);
});
console.log('scripting is comtinuing eunning');

// whwn you eill fire this even then only trigger that emit function
myEmitter.emit('Myevent');