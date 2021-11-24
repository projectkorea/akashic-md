function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms)); // ms가 지나면 resolve함수를 실행시켜라
}
function getApple() {
    return delay(1500).then(() => '🍎');
}
function getBanana() {
    return delay(500).then(() => '🍌');
}
function pickFruits() {
    return getApple().then((apple) => {
        return getBanana().then((banana) => `promise ${apple}+${banana}`);
    });
}
async function asyncPickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `async ${apple} + ${banana}`;
}

async function effPickFruits() {
    const applePromise = getApple(); //execute immediately
    const bananaPromise = getBanana(); //execute immediately
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `immediately ${apple} + ${banana}`;
}
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(
        (fruits) => `promise all${fruits.join('+')}`
    );
}
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickFruits().then(console.log);
asyncPickFruits().then(console.log);
effPickFruits().then(console.log);
pickAllFruits().then(console.log);
pickOnlyOne().then(console.log);
