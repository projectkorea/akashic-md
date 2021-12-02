{
    const name = 'junha';
    const age = '20';
    const junha = { name, age };
    console.log(junha); // {name: 'junha', age: '20'}
}

{
    const car = { name: 'Auid', age: '2022' };
    const { name, age: newNAme } = car;
    console.log(name, newNAme);

    const animals = ['dog', 'cat'];
    const [first, second] = animals;
    console.log(first, second);
}

{
    console.clear();
    const person1 = {
        name: 'junha',
        job: {
            title: 'Engineer',
            manager: {
                name: 'Bob',
            },
        },
    };

    const person2 = {
        name: 'yunjung',
    };

    function print(person) {
        console.log(person.job?.manager?.name);
    }

    print(person1);
    print(person2);
}

{
    console.clear();
    const obj = {
        0: false,
        1: '',
        2: 0,
        3: null,
        4: undefined,
        5: NaN,
    };

    // console.log(...obj); 될리가 없잖아
    for (let key in obj) {
        console.log(`${obj[key]}: ${obj[key] ?? 'Nullish Coalescing'}`);
    }
}
