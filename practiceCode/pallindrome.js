const str = "DEVED";
let reversedStr = '';

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

if (str === reversedStr) {
    console.log('Pallindrome');
}else {console.log('Not a Pallindrome')}