import { useState, useActionState } from "react";

function App() {
  const coffeeTypes = ["아메리카노", "라떼", "모카", "콜드브루"];
  const [coffeeImage, setCoffeeImage] = useState(null);
  const [goDrink, setGoDrink] = useState(false);

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const coffeeName = formData.get("coffee");
      const shot = formData.get("shot");
      const temperature = formData.get("temperature");

      const coffeeSrc = await orderCoffee(coffeeName, temperature, shot);

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

  /**
   *
   *
   *
   * API로 커피 주문하기
   *
   *
   *
   */
  const orderCoffee = async () => {
    try {
      const response = await fetch(
        "/random.json",
      );
      const data = await response.json();
      setCoffeeImage(data.file);
    } catch (error) {
      console.error("Error fetching coffee image:", error);
    }
  };

  return (
    <section>
      <div>
        <h1>☕ 커피 가게 ☕</h1>
        <h3>🧑‍🍳 주문서를 작성하세요</h3>
        <form onSubmit={handleSubmit} style={{ width: "30vw" }}>
          <div>
            <label>커피 종류:</label>
            {coffeeTypes.map((coffee) => (
              <div key={coffee}>
                <input
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
            <input type="radio" name="temperature" value="hot" required /> Hot
          </div>
          <div>
            <input type="radio" name="temperature" value="cold" required /> Cold
          </div>
          <div>
            <label>샷 추가:</label>
            <div>
              <input type="radio" name="shot" value="추가" required /> 추가
            </div>
            <div>
              <input type="radio" name="shot" value="제외" required /> 제외
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
  );
}

export default App;
