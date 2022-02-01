const AlphabetCounter = {
  sentence: '',
  alphabetMap: {},

  setSentence: function (sentence) {
    this.sentence = sentence;
    return this;
  },

  buildAlphabetMap: function () {
    this.alphabetMap = this.sentence
      .trim()
      .toLowerCase()
      .split('')
      .filter((c) => c >= 'a' && c <= 'z')
      .reduce((map, char) => {
        if (!map[char]) map[char] = 0;
        map[char]++;
        return map;
      }, {});
    return this;
  },

  buildResult: function () {
    const resultString = Object.entries(this.alphabetMap)
      .reduce((acc, [alphabet, freq]) => `${acc} [${alphabet}: ${freq}]`, '')
      .trim();
    return `결과는 : ${resultString} 입니다.`;
  },
};

export default AlphabetCounter;
