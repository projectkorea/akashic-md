class UserStroage {
    loginUser(id, pw) {
        return new Promise((resolve, reject) =>
            setTimeout(() => {
                if (
                    (id === 'junha' && pw === 'please') ||
                    (id === 'yunjung' && pw === 'please1')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('login failed'));
                }
            }, 2000)
        );
    }

    getRoles(user) {
        return new Promise((resolve, reject) =>
            setTimeout(() => {
                if (user === 'junha') {
                    resolve({ name: 'kim', role: 'admin' });
                } else if (user == 'yunjung') {
                    resolve({ name: 'park', role: 'host' });
                } else {
                    reject(new Error('role failed'));
                }
            }, 1000)
        );
    }
}

const user1 = new UserStroage();
const id = prompt('enter your id');
const pw = prompt('enter your pw');
user1
    .loginUser(id, pw)
    .then(user1.getRoles)
    .then((userObj) =>
        console.log(`hi ${userObj.name} your role is ${userObj.role}`)
    )
    .catch(console.log);
