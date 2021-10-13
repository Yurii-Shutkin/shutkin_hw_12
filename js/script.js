const userNum = +prompt ('Введи число');

for (let i = 2; i <= userNum; i++) {
    if (userNum % i === 0) {
        console.log (i);
        break;
    }
}

if (userNum <= 1) {
    console.log (NaN);
}