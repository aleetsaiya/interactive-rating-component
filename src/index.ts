import "./main.scss";

const rateBtns: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".card__rate-btn");
const submitBtn = document.getElementById("submit");

let isRate = false;

function rateBtnsClickHandler(event: Event) {
  const target = event.target;
  if (target instanceof HTMLButtonElement) {
    isRate = true;
    // active
    target.classList.add("active");
    rateBtns.forEach((btn) => {
      if (btn !== target) btn.classList.remove("active");
    });
    // set value to the badge in thanks page
    const value = target.dataset.value;
    const badge = document.querySelector(".card__badge");
    badge.innerHTML = `You selected ${value} out of 5`;
  }
}

function submitHandler() {
  if (isRate) {
    const cards = document.querySelectorAll(".card");
    cards[0].classList.add("hide");
    cards[1].classList.remove("hide");
  }
}

rateBtns.forEach((btn) => {
  btn.addEventListener("click", rateBtnsClickHandler);
});
submitBtn.addEventListener("click", submitHandler);
