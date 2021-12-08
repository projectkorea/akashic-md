const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });

const getEgg = (hen) =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('egg is not exist')));
        // resolve(`${hen} => '🥚'`), 1000);
    });

const getFry = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => '🥯'`), 1000);
    });

getHen()
    .then((hen) => getEgg(hen))
    .catch((error) => {
        return '🍕';
    })
    .then((egg) => getFry(egg))
    .then((meal) => console.log(meal));
{
    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function getApple() {
        return delay(2000).then(() => '🍎');
    }

    function getBanana() {
        return delay(1000).then(() => '🍌');
    }

    function pickFruits() {
        return getApple().then((apple) => {
            return getBanana().then((banana) => `${apple} + ${banana}`);
        });
    }

    pickFruits().then(console.log);
}
