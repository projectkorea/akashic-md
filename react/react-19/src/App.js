import { useState, useActionState, useRef } from "react";

function App() {
  const coffeeTypes = ["아메리카노", "라떼", "모카", "콜드브루"];
  const [coffeeImage, setCoffeeImage] = useState(null);
  const formRef = useRef(null);
  const [isPending2, setIsPending2] = useState(false);
  const [error2, setError2] = useState(null);

  const handleSubmitOld = async (e) => {
    e.preventDefault();
    setIsPending2(true);
    setError2(null);
    try {
      const coffeeSrc = await orderCoffee();
      if (!coffeeSrc) {
        setError2("Failed to fetch coffee image");
      } else {
        setCoffeeImage(coffeeSrc);
      }
    } catch (error) {
      setError2("Error fetching coffee image");
    }
    setIsPending2(false);
  };

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      if (!formData) {
        setCoffeeImage(null);
        return null;
      }
      const coffeeName = formData.get("coffee");
      const shot = formData.get("shot");
      const temperature = formData.get("temperature");

      console.log("TEST");
      const coffeeSrc = await orderCoffee(coffeeName, temperature, shot);
      console.log("TEST2");

      if (!coffeeSrc) {
        return "Failed to fetch coffee image";
      }

      setCoffeeImage(coffeeSrc);
      return null;
    },
    null,
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    submitAction(formData);
  };

  const resetOrder = () => {
    // Reset form fields
    if (formRef.current) {
      formRef.current.reset();
    }

    submitAction(null);
    // Reset state variables
    setCoffeeImage(null);
    const hForm = document.getElementById("hForm");
    if (!hForm) {
      console.error("hForm element not found");
    } else {
      hForm.querySelectorAll("img").forEach((img) => img.remove());
    }
  };

  /**
   * API로 커피 주문하기
   */
  const orderCoffee = async (coffeeName, temperature, shot) => {
    try {
      const response = await fetch("/random.json");
      const { file: src } = await response.json();
      return src;
    } catch (error) {
      console.error("Error fetching coffee image:", error);
      return null;
    }
  };

  const scribble = () => {
    // Create a new image element
    const hForm = document.getElementById("hForm");
    if (!hForm) {
      console.error("hForm element not found");
      return;
    }
    const img = document.createElement("img");

    img.src = "/scribble.png"; // Replace 'your-image-url.jpg' with the actual URL of your image

    const randomWidth = Math.floor(Math.random() * 100) + 50; // Random width between 50 and 150
    const randomHeight = Math.floor(Math.random() * 100) + 50; // Random height between 50 and 150

    img.style.width = `${randomWidth}px`;
    img.style.height = `${randomHeight}px`;

    const hFormRect = hForm.getBoundingClientRect();

    const randomTop = Math.floor(
      Math.random() * (hFormRect.height - randomHeight),
    );
    const randomLeft = Math.floor(
      Math.random() * (hFormRect.width - randomWidth),
    );

    img.style.position = "absolute";
    img.style.top = `${randomTop}px`;
    img.style.left = `${randomLeft}px`;

    hForm.appendChild(img);
  };

  return (
    <main>
      <h1>☕ 커피 가게 ☕</h1>
      <h3>🧑‍🍳 주문서를 작성하세요</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <section style={{ display: "flex", flexDirection: "column" }}>
          <button
            onClick={scribble}
            style={{ width: "200px", margin: "0 0 10px 10px" }}
          >
            주문서에 낙서하기
          </button>
          <button
            onClick={resetOrder}
            style={{ width: "200px", margin: "0 0 10px 10px" }}
          >
            주문서 초기화
          </button>
          {coffeeImage && (
            <div>
              <img src={coffeeImage} alt="Ordered Coffee" />
            </div>
          )}
        </section>
        <section>
          <div>
            {/* <form
              id="hFormOld"
              onSubmit={handleSubmitOld}
              ref={formRef}
              style={{
                width: "30vw",
                position: "relative",
                marginBottom: "20px",
              }}
            >
              <div>
                <label>커피 종류 (Old):</label>
                {coffeeTypes.map((coffee) => (
                  <div key={coffee}>
                    <input
                      style={{ width: "15px", height: "15px" }}
                      type="radio"
                      name="coffee"
                      value={coffee}
                      disabled={isPending2}
                      required
                    />
                    {coffee}
                  </div>
                ))}
              </div>
              <label>온도:</label>
              <div>
                <input
                  style={{ width: "15px", height: "15px" }}
                  type="radio"
                  name="temperature"
                  value="hot"
                  required
                />{" "}
                Hot
              </div>
              <div>
                <input
                  style={{ width: "15px", height: "15px" }}
                  type="radio"
                  name="temperature"
                  value="cold"
                  required
                />{" "}
                Cold
              </div>
              <div>
                <label>샷 추가:</label>
                <div>
                  <input
                    style={{ width: "15px", height: "15px" }}
                    type="radio"
                    name="shot"
                    value="추가"
                    required
                  />{" "}
                  추가
                </div>
                <div>
                  <input
                    style={{ width: "15px", height: "15px" }}
                    type="radio"
                    name="shot"
                    value="제외"
                    required
                  />{" "}
                  제외
                </div>
              </div>
              <div></div>
              <button type="submit" disabled={isPending2}>
                주문하기
              </button>
              {error2 && <p>{error2}</p>}
            </form> */}

            <form
              id="hForm"
              onSubmit={handleSubmit}
              ref={formRef}
              style={{ width: "30vw", position: "relative" }}
            >
              <div>
                <label>커피 종류 (New):</label>
                {coffeeTypes.map((coffee) => (
                  <div key={coffee}>
                    <input
                      style={{ width: "15px", height: "15px" }}
                      type="radio"
                      name="coffee"
                      value={coffee}
                      disabled={isPending}
                      required
                    />
                    {coffee}
                  </div>
                ))}
              </div>
              <label>온도:</label>
              <div>
                <input
                  style={{ width: "15px", height: "15px" }}
                  type="radio"
                  name="temperature"
                  value="hot"
                  required
                />{" "}
                Hot
              </div>
              <div>
                <input
                  style={{ width: "15px", height: "15px" }}
                  type="radio"
                  name="temperature"
                  value="cold"
                  required
                />{" "}
                Cold
              </div>
              <div>
                <label>샷 추가:</label>
                <div>
                  <input
                    style={{ width: "15px", height: "15px" }}
                    type="radio"
                    name="shot"
                    value="추가"
                    required
                  />{" "}
                  추가
                </div>
                <div>
                  <input
                    style={{ width: "15px", height: "15px" }}
                    type="radio"
                    name="shot"
                    value="제외"
                    required
                  />{" "}
                  제외
                </div>
              </div>
              <div></div>
              <button type="submit">
                주문하기
              </button>
              {error && <p>{error}</p>}
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
