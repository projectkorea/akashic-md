const TimeMap = (() => {
  let min = 60;
  let hour = min * 60;
  let day = hour * 24;
  let week = day * 7;
  let month = week * 4;
  let year = month * 12;
  return { min, hour, day, week, month, year };
})();

const TimeTextMap = {
  [TimeMap.min]: '분',
  [TimeMap.hour]: '시간',
  [TimeMap.day]: '일',
  [TimeMap.week]: '주',
  [TimeMap.month]: '개월',
  [TimeMap.year]: '년',
};

function createTimeText(time, standard, suffix) {
  return `${Math.floor(time / standard)}${suffix} 전`;
}

const RelativeTime = {
  diff: (date) => {
    const seconds = (new Date() - date) / 1000;
    Object.entries(TimeMap).reduce((text, [time, value]) => {
      if (seconds >= value) {
        return createTimeText(seconds, value, TimeTextMap[value]);
      }
      return text;
    }, '방금 전');
  },
};

export default RelativeTime;
