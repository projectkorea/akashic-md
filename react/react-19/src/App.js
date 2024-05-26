import { useState, useActionState, useRef } from "react";
import { orderCoffee, scribble } from "./module";

function App() {
  const coffeeTypes = ["아메리카노", "라떼", "모카", "콜드브루"];
  const [coffeeImage, setCoffeeImage] = useState(null);
  const formRef = useRef(null);

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      if (!formData) {
        setCoffeeImage(null);
        return null;
      }
      const coffeeName = formData.get("coffee");
      const shot = formData.get("shot");
      const temperature = formData.get("temperature");
      const coffeeSrc = await orderCoffee(coffeeName, temperature, shot);

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
    if (formRef.current) {
      formRef.current.reset();
      formRef.current.querySelectorAll("img").forEach((img) => img.remove());
    }
    submitAction(null);
  };

  return (
    <main>
      <h1>☕ 커피 가게 ☕</h1>
      <h3>🧑‍🍳 주문서를 작성하세요</h3>
      <p>
        {isPending
          ? "🧑‍🍳 제조중..."
          : "📝 주문서를 작성하고 주문하기 버튼을 누르세요"}
      </p>
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
            onClick={() => scribble("hForm")}
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
          {coffeeImage && <img src={coffeeImage} alt="Ordered Coffee" />}
        </section>
        <section>
          <div>
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
              <button type="submit">주문하기</button>
              {error && <p>{error}</p>}
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
