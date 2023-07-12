function searchInsert(num, target) {
    let left = 0;
    let right = num.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (num[mid] === target) {
            return mid;
        } else if (num[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}
