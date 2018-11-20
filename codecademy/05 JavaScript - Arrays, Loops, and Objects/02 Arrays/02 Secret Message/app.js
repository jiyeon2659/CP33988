let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);
// remove the last string of the array secretMessage
secretMessage.pop();
console.log(secretMessage.length);

// add the words 'to', 'Program' to the end of the secretMessage array
secretMessage.push('to', 'Program');

// change the world easily to the word right
secretMessage[7] = 'right';
console.log(secretMessage);

// remove the first string of the array
secretMessage.shift();
console.log(secretMessage[0]);

// add the string 'Programming' to the beginning of the array
secretMessage.unshift('Programming');
console.log(secretMessage[0]);

// remove strings 'get', 'right', 'the', 'first', 'time', and replace
// them with the single string 'know,'
secretMessage.splice(6, 5, 'know,');
console.log(secretMessage);

// on one line, use join() to print the secret message as a sentence
console.log(secretMessage.join(' '));
