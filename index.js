const examples = [
    '1.callback',
    '2.callback-to-promise',
    '3.promise',
    '4.async',
    '5.json',
    '6.arrayAPIs',
    '7.class',
    '8.object',
    '9.operator',
    '10.tips',
];

const addButton = (args) => {
    args.forEach((element) => {
        const button = document.createElement('button');
        button.innerText = element;
        button.addEventListener('click', () => addScript(element));
        document.querySelector('body').appendChild(button);
    });
};

const addScript = (element) => {
    const script = document.createElement('script');
    script.setAttribute('src', `examples/${element}.js`);
    document.querySelector('head').appendChild(script);
};

addButton(examples);
