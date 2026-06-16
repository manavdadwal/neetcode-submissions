class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let data = nums.sort((a, b) => b - a);
        let count = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i] === data[i + 1]) {
                count++;
            }
        }
        return count > 0 ? true : false;
    }
}
