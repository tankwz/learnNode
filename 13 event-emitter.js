const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('respone', (name, age) => {
  console.log(`gottcha ${name} age: ${age}`);
});

customEmitter.on('respone', (name, age) => {
  console.log(`huh ${name} age: ${age}`);
});
customEmitter.emit('respone', 'tan', 23);

console.log('async test');
