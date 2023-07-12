const num = [1, 2, 2, 4];
const findErrornum = (num) => {
    const res = [];
    for(let i = 0; i < num.length; i++) {
        const el = Math.abs(num[i]);
        if(num[el - 1] > 0) {
            num[el - 1] *= -1;
        } else {
            res.push(el);
        }
    }
    for(let i = 0; i < num.length; i++) {
        if(num[i] > 0) {
            res.push(i + 1);
        }
    }
    return res;
};

console.log(findErrornum(num)); 