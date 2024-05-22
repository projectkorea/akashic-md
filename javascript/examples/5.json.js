{
  const rabbit = {
    name: 'tori',
    color: 'white',
    size: 'null',
    birthDate: new Date(),
    jump: () => {
      console.log('JUMP!');
    },
  };
  jsonString = JSON.stringify(rabbit);
  const obj = JSON.parse(jsonString);
  console.log(obj);
}

{
  const jsonText = '{ "age": "27", "gender": "male" }';

  const jsObject = JSON.parse(jsonText);
  const jsonText2 = JSON.stringify(jsObject);

  console.log(jsObject); // Object {age: '27', gender: 'male'}
  console.log(jsonText2); // String {"age":"27","gender":"male"}
}

{
  let json = JSON.stringify(true);
  console.log(json);
  json = JSON.stringify(['apple', 'banana']);
  console.log(json);
  const rabbit = {
    name: 'tori',
    color: 'white',
    size: 'null',
    birthDate: new Date(),
    jump: () => {
      console.log('JUMP!');
    },
  };

  json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key:${key}, value:${value}`);
    return key === 'name' ? 'changed' : value;
  });
  console.log(json);
}

// {
//     const rabbit = {
//         name: 'tori',
//         color: 'white',
//         size: 'null',
//         birthDate: new Date(),
//         jump: () => {
//             console.log('JUMP!');
//         },
//     };

//     const json = JSON.stringify(rabbit, (key, value) => {
//         console.log(`key:${key}, value:${value}`);
//         return value;
//     });

//     console.log(json);
//     JSON.parse;
// }
