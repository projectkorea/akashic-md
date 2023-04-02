// 클릭했을 때 캡쳐
document.querySelectorAll(".imgButton").forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.parentElement.nextElementSibling.id === "plus") {
            html2canvas(document.querySelector("#plus"), { backgroundColor: "#05022d" })
                .then((canvas) => {
                    const link = document.createElement("a"); //a라는 태그를 만들어 준 후 canvas정보를 지정
                    link.download = "captureFile"; //캡쳐된 파일 명
                    link.href = canvas.toDataURL(); //캔버스를 이미지로 변환
                    document.body.appendChild(link); //a태그를 마지막 자식으로 붙힘
                    link.click(); //a태그 클릭
                })
                .catch((error) => {
                    console.error("미안 캡쳐가 안돼!", error);
                });
        } else {
            const logic = event.target.parentElement.nextElementSibling.id.slice(4, 5);
            html2canvas(document.querySelector(`#main${logic}`), { backgroundColor: "#05022d" })
                .then((canvas) => {
                    const link = document.createElement("a");
                    link.download = "captureFile";
                    link.href = canvas.toDataURL();
                    document.body.appendChild(link);
                    link.click();
                })
                .catch((error) => {
                    console.error("미안 캡쳐가 안돼!", error);
                });
        }
    });
});

//클릭했을 때 PDF
document.querySelectorAll(".pdfButton").forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.parentElement.nextElementSibling.nextElementSibling.id === "plus") {
            html2canvas(document.querySelector("#plus"), { backgroundColor: "#05022d" })
                .then((canvas) => {
                    window.jsPDF = window.jspdf.jsPDF; //jsPDF라이브러리 필요
                    const imgData = canvas.toDataURL("image/png"); //캔버스를 이미지로 변환
                    const doc = new jsPDF("p", "mm"); //문서의 너비와 높이값
                    const width = doc.internal.pageSize.getWidth(); //화면 페이지 넓이값
                    const height = doc.internal.pageSize.getHeight(); //화면 페이지 높이값
                    doc.addImage(imgData, "PNG", 0, 0, width, height); //페이지 출력 (이미지, 문서크기, 캡쳐 크기, 넓이, 높이)
                    doc.save("chart.pdf"); //파일 저장
                })
                .catch((error) => {
                    console.error("미안 실행이 안돼!", error);
                });
        } else {
            const logic = event.target.parentElement.nextElementSibling.nextElementSibling.id.slice(4, 5);
            html2canvas(document.querySelector(`#main${logic}`), { backgroundColor: "#05022d" })
                .then((canvas) => {
                    window.jsPDF = window.jspdf.jsPDF;
                    const imgData = canvas.toDataURL("image/png");
                    const doc = new jsPDF("p", "mm");
                    const width = doc.internal.pageSize.getWidth();
                    const height = doc.internal.pageSize.getHeight();
                    doc.addImage(imgData, "PNG", 0, 0, width, height);
                    doc.save("chart.pdf");
                })
                .catch((error) => {
                    console.error("미안 실행이 안돼!", error);
                });
        }
    });
});
