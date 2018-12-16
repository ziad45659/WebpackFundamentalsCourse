console.log('logging from login.es6');

let login = (username, password) => {
    if (username == 'zuzu') {
        console.log('nioch');
    } else {
        console.log('blah');
    }
};

export {login};