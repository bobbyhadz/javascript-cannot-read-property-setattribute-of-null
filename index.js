// Cannot read properties of null (reading 'setAttribute')

console.log('bobbyhadz.com');

const el = document.getElementById('box');
console.log(el); // 👉️ div#box

// ✅ works
el.setAttribute('style', 'color: green');
