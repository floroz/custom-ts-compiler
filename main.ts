import fs from 'node:fs';
import { tokenizer } from './src/lexer/lexer'

// Should work
// console.log(tokenizer('let a = (1 + 2) * 3'));
// console.log(tokenizer('123'))
// console.log(tokenizer('let 123 = 0'))
// console.log(tokenizer('lt 123 = 0'))
// console.log(tokenizer('let a = 123'));
// console.log(tokenizer('let a = 123 + 456'));
// console.log(tokenizer('let a = 123 + 456 * 789'));

fs.readFile('./custom.floroz', 'utf8', (err, data) => { 
    if (err) {
        console.error(err)
        return
    }

    console.log(tokenizer(data))
});