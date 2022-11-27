const myURL = "https://www.whenismylove.com";

function shareTwitter() {
  const sendText = "솔로탈출 테스트";
  const sendUrl = myURL;
  window.open(
    "https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl
  );
}

function shareFacebook() {
  const sendUrl = myURL;
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

function shareKakao() {
  Kakao.init("385da167d8702da5c0abc1de73b3a36e");
  Kakao.Link.createDefaultButton({
    container: "#btnKakao", // 카카오공유버튼ID
    objectType: "feed",
    content: {
      title: "솔로탈출 테스트",
      description: "솔로탈출 테스트",
      imageUrl: myURL,
      link: {
        mobileWebUrl: myURL,
        webUrl: myURL,
      },
    },
  });
}

function shareLink() {
  const dummy = document.createElement("input");
  const text = location.href;
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  alert("주소가 복사되었습니다.");
}

// if (0) {
//   window.open(
//     "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(myURL)
//   );
//   window.open(
//     "https://twitter.com/intent/tweet?url=" + encodeURIComponent(myURL)
//   );
// }
