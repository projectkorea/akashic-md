const rabbit = {
    name: 'tori',
    color: 'white',
    size: 'null',
    birthDate: new Date(),
    jump: () => {
        console.log('JUMP!');
    },
};

const json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key:${key}, value:${value}`);
    return value;
});
console.log(json);
