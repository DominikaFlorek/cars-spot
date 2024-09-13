// selecting cars in the gallery
const cars = document.querySelector("#cars");
const vans = document.querySelector("#deliveryVans");
const carBtn = document.querySelector("#carBtn");
const vanBtn = document.querySelector("#vanBtn");

vanBtn.addEventListener("click", function () {
  cars.classList.add("hidden");
  vans.classList.remove("hidden");

  carBtn.classList.remove(
    "border-b",
    "border-cornflower-blue",
    "font-semibold",
    "tracking-[-0.3px]",
    "text-cornflower-blue",
  );

  vanBtn.classList.add(
    "border-b",
    "border-cornflower-blue",
    "font-semibold",
    "tracking-[-0.3px]",
    "text-cornflower-blue",
  );
});

carBtn.addEventListener("click", function () {
  cars.classList.remove("hidden");
  vans.classList.add("hidden");

  carBtn.classList.add(
    "border-b",
    "border-cornflower-blue",
    "font-semibold",
    "tracking-[-0.3px]",
    "text-cornflower-blue",
  );

  vanBtn.classList.remove(
    "border-b",
    "border-cornflower-blue",
    "font-semibold",
    "tracking-[-0.3px]",
    "text-cornflower-blue",
  );
});

// opening paragraphs

const paragraphs1 = document.querySelectorAll(".paragraph1");
const paragraphs2 = document.querySelectorAll(".paragraph2");
const showParagraphs1 = document.querySelectorAll(".btn1");
const showParagraphs2 = document.querySelectorAll(".btn2");

showParagraphs1.forEach((btn) => {
  btn.addEventListener("click", function () {
    paragraphs1.forEach((p) => p.classList.toggle("hidden"));

    showParagraphs1.forEach((btn) => btn.classList.toggle("hidden"));
  });
});

showParagraphs2.forEach((btn) => {
  btn.addEventListener("click", function () {
    paragraphs2.forEach((p) => p.classList.toggle("hidden"));

    showParagraphs2.forEach((btn) => btn.classList.toggle("hidden"));
  });
});
