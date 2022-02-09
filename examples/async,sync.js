const App = () => {
  const syncButton = document.getElementById('sync'); // 3초 동기 증가 버튼입니다.
  const asyncButton = document.getElementById('async'); // 3초 비동기 증가 버튼입니다.
  const result = document.getElementById('result'); // 카운트 횟수입니다.
  const blink = document.getElementById('blink'); // 반짝이는 박스 요소입니다.

  setInterval(() => {
    blink.style.background = blink.style.background === 'red' ? 'blue' : 'red';
  }, 500);

  syncButton.addEventListener('click', () => {
    Counter.incrementSync();
    result.innerHTML = Counter.getCount();
  });

  asyncButton.addEventListener('click', () => {
    Counter.incrementAsync(() => {
      result.innerHTML = Counter.getCount();
    });
  });

  result.innerHTML = 0;
};

const Counter = {
  count: 0,

  getCount: function () {
    return this.count;
  },

  resetCount: function () {
    this.count = 0;
  },

  incrementSync: function () {
    let start = Date.now();
    let end = Date.now();
    while (end - start <= 3000) {
      end = Date.now();
    } // 동기 코드: 3초가 끝나기전에 다른 코드들은 작동하지 않는다.
    this.count++;
  },

  incrementAsync: function (callback) {
    setTimeout(() => {
      this.count++;
      callback();
    }, 3000); // 비동기 코드: 3초가 지나면 카운트가 올라가는 코드는 setTimeout Web Api로 넘어가기 때문에 다른 코드들이 작동할 수 있다.
  },
};

export default Counter;
