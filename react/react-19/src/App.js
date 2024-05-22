import { useState, useActionState, useRef } from "react";

function App() {
  const coffeeTypes = ["아메리카노", "라떼", "모카", "콜드브루"];
  const [coffeeImage, setCoffeeImage] = useState(null);
  const [goDrink, setGoDrink] = useState(false);
  const formRef = useRef(null);

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      if (!formData) {
        return null;
      }
      const coffeeName = formData.get("coffee");
      const shot = formData.get("shot");
      const temperature = formData.get("temperature");

      const coffeeSrc = await orderCoffee(coffeeName, temperature, shot);

      console.log("previousState:", previousState);
      if (!coffeeSrc) {
        return error;
      }

      return coffeeSrc;
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
    setGoDrink(false);
  };

  /**
   * API로 커피 주문하기
   */
  const orderCoffee = async () => {
    try {
      const response = await fetch("/random.json");
      const { file: src } = await response.json();
      return src;
    } catch (error) {
      console.error("Error fetching coffee image:", error);
    }
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
          <button onClick={resetOrder} style={{ margin: "0 0 10px 10px" }}>
            주문서에 낙서하기
          </button>
          <button onClick={resetOrder} style={{ margin: "0 0 10px 10px" }}>
            주문서 초기화
          </button>
        </section>
        <section>
          <div>
            <form
              onSubmit={handleSubmit}
              ref={formRef}
              style={{ width: "30vw" }}
            >
              <div>
                <label>커피 종류:</label>
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
              <button type="submit" disabled={isPending}>
                주문하기
              </button>
            </form>
            {error && <p>{error}</p>}
            {coffeeImage && (
              <div>
                <button onClick={() => setGoDrink(true)}>먹으러 가기</button>
                {goDrink && <img src={coffeeImage} alt="Ordered Coffee" />}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
