// Example1
function printImmediately(print) {
    print();
}

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

// 동기 콜백 setTimeout webapi사용 안한 콜백함수
printImmediately(() => console.log('hi'));
// 비동기 콜백 setTimeout webapi사용한 콜백함수
printWithDelay(() => console.log('hellod'), 2000);

// Example2) CallBack Hell example
class UserStroage {
    loginUser(id, pw, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'junha' && pw === 'please') ||
                (id === 'twmw' && pw === 'please')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, OnError) {
        setTimeout(() => {
            if (user === 'junha') {
                onSuccess({ name: 'junha', role: 'adming' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStroage = new UserStroage();
const id = prompt('enter your id');
const pw = prompt('enter your pw');
userStroage.loginUser();
