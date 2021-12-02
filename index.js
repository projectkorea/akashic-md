const examples = [
    'class',
    '1.callback',
    '2.callback-to-promise',
    '3. promise',
    '4.async',
    'json',
    'hoisting',
    'operator',
    'function',
    'object',
    'array',
    'arrayAPIs',
    'arrayAPIsAnswer',
    'tips',
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
