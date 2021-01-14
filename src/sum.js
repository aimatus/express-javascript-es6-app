import * as emailUtil from './email-util/emailUtil';

const sum = (a, b) => {
    emailUtil.sendEmail('a@a.com', 'Hello!', 'Here be dragons');
    return a + b;
};

export default sum;
