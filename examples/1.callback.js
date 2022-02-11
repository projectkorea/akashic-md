class UserStroage {
    loginUser(id, pw, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'junha' && pw === 'please') ||
                (id === 'yunjung' && pw === 'please1')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('login failed'));w
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'junha') {
                onSuccess({ name: 'kim', role: 'admin' });
            } else if (user == 'yunjung') {
                onSuccess({ name: 'park', role: 'host' });
            } else {
                onError(new Error('role failed'));
            }
        }, 1000);
    }
}

const user1 = new UserStroage();
const id = prompt('enter your id');
const pw = prompt('enter your pw');
user1.loginUser(
    id,
    pw,
    (user) => {
        user1.getRoles(
            user,
            (userObj) => {
                console.log(`hi ${userObj.name} your role is ${userObj.role}`);
            },
            (error) => {
                console.log(error);
            }
        );
    },
    (error) => {
        console.log(error);
    }
);
