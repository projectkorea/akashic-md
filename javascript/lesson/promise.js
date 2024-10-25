// readFile, writeFile -> 비동기적으로 실행되는 코드
// readFileSync, writeFileSync -> 비동기적으로 실행되는 코드
import {readFile, writeFile, readFileSync, writeFileSync} from 'fs';

console.log("1");

writeFile('bori.txt', 'bori bye bye', null, (err)=>{
  console.log("2","write done");
  if (err) {
    console.log("3", err);
  }
})

console.log("4");

readFile('bori2.txt', 'utf-8', (err, data)=> {
  console.log("5", data);
})

console.log("6");