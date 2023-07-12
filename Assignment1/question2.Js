function removeElement(nums, val) {
    let A = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[A] = nums[i];
            A++;
        }
    }
    return A;
}
