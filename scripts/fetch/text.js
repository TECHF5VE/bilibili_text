'use script';

global.fetch = require('node-fetch');
let url = 'D:\Git\study\bilibili_text';
let data = { username: 'example' };

console.log("123");

fetch(url,{
  method: 'POST',
  body: JSON.stringify(data)
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));