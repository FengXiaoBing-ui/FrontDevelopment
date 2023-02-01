export default {
    /**
     * 生成小写a-z数组
     * @return {string[]}
     */
    generateArray() {
        let arrGenerate = [];
        for (let i = 0; i < 26; i++) {
            const letter = String.fromCharCode(97 + i);
            arrGenerate.push(letter);
        }
        return arrGenerate;
    },

    /**
     * 生成大写写a-z数组
     * @return {string[]}
     */
    generateArrayUpper() {
        let arrGenerate = [];
        for (let i = 0; i < 26; i++) {
            const letter = String.fromCharCode(65 + i);
            arrGenerate.push(letter);
        }
        return arrGenerate;
    },
};
