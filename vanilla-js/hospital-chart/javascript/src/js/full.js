const left = document.querySelector(".left ");
const right = document.querySelector(".right ");
const center = document.querySelector(".center");

const zoomIn = document.querySelector(".zoomIn");
const zoomOut = document.querySelector(".zoomOut");
const img = document.querySelector(".imgButton");
const pdf = document.querySelector(".pdfButton");

//fullscreen으로 전환
window.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement) {
        //해당 요소의 클래스 속성값을 추가
        left.classList.add("fullscreen");
        right.classList.add("fullscreen");
        center.classList.add("fullscreen");

        zoomIn.classList.add("fullscreen");
        zoomOut.classList.add("fullscreen");

        pdf.classList.add("fullscreen");
        img.classList.add("fullscreen");
    } else {
        left.classList.remove("fullscreen");
        right.classList.remove("fullscreen");
        center.classList.remove("fullscreen");
    }
});

//esc 막아주기도 함
document.querySelectorAll(".btn_image").forEach((button) => {
    button.addEventListener(
        "click",
        (event) => {
            if (document.fullscreenElement) {
                document.exitFullscreen(); //전체화면에서 나가기
            } else if (!document.fullscreenElement) {
                //요소를 전체화면 모드로 표시하게 만들어 줌
                if (event.target.parentElement.id === "startCButton") {
                    window[event.target.parentElement.id.slice(5, 6)].requestFullscreen(); //C
                } else {
                    window[event.target.parentElement.id.slice(5, 7)].requestFullscreen(); //L1,L2..
                }
            }
        },
        false
    );
});
