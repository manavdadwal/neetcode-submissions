class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramMap = {};
        for (const word of strs) {
            const key = word.toLowerCase().split("").sort().join("");

            if (anagramMap[key]) {
                anagramMap[key].push(word);
            } else {
                anagramMap[key] = [word];
            }
        }

        return Object.values(anagramMap).filter((group) => group.length);
    }
}
