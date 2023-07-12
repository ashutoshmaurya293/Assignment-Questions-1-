const num = [0, 1, 0, 3, 12];
const moveZeroes = (num) => {
    const res = [];
    let count = 0;
    for(let i = 0; i < num.length; i++) {
        const el = num[i];
        if(el === 0) {
            count++;
        } else {
            res.splice(res.length - count, undefined, el);
        }
    }
    for(let i = 0; i < count; i++) {
        res.push(0);
    }
    return res;
};

console.log(moveZeroes(num)); 
