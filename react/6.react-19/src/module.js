export const orderCoffee = async (coffeeName, temperature, shot) => {
  try {
    console.log(
      `Ordering ${temperature} ${coffeeName} coffee with ${shot} shot(s)`,
    );
    const response = await fetch("/random.json");
    const { file: src } = await response.json();
    return src;
  } catch (error) {
    console.error("Error fetching coffee image:", error);
    return null;
  }
};

export const scribble = (formId) => {

  const hForm = document.getElementById(formId);
  if (!hForm) {
    console.error("hForm element not found");
    return;
  }
  const img = document.createElement("img");

  img.src = "/scribble.png";

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
