/*-------------------------------------------------------------*/
/*-----Variable declaration------------------------------------*/
/*-------------------------------------------------------------*/
const genders = document.querySelectorAll(".switcher__item input");

const age = document.querySelector("#age");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");

const physicalActivities = document.querySelectorAll(".radio__wrapper input");
const physicalActivitiesArr = Array.from(physicalActivities);

const submitButton = document.querySelector(".form__submit-button");
const resetButton = document.querySelector(".form__reset-button");

const result = document.querySelector(".counter__result");

const normCalories = document.querySelector("#calories-norm");
const minCalories = document.querySelector("#calories-minimal");
const maxCalories = document.querySelector("#calories-maximal");

/*-------------------------------------------------------------*/
/*-----Event listeners-----------------------------------------*/
/*-------------------------------------------------------------*/
age.addEventListener("input", () => {
  checkData();
});

height.addEventListener("input", () => {
  checkData();
});

weight.addEventListener("input", () => {
  checkData();
});

submitButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  result.classList.remove("counter__result--hidden");
  calorieCalculate();
});

resetButton.addEventListener("click", () => {
  age.value = "";
  height.value = "";
  weight.value = "";
  physicalActivities[0].checked = true;
  checkData();
});

/*-------------------------------------------------------------*/
/*-----Functions-----------------------------------------------*/
/*-------------------------------------------------------------*/
function checkData() {
  if (!!age.value && !!height.value && !!weight.value) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "disabled");
  }

  if (!!age.value || !!height.value || !!weight.value) {
    resetButton.removeAttribute("disabled");
  } else {
    resetButton.setAttribute("disabled", "disabled");
  }
}

function calorieCalculate() {
  const activityCoef = calculateActivityCoef();
  const generalMeaning =
    10 * weight.value + 6.25 * height.value - 5 * age.value;

  if (genders[0].checked) {
    normCalories.textContent = `${Math.round((generalMeaning + 5) * activityCoef)}`;
  } else {
    normCalories.textContent = `${Math.round((generalMeaning - 161) * activityCoef)}`;
  }
  minCalories.textContent = Math.round(Number(normCalories.textContent) -  0.15 * Number(normCalories.textContent));
  maxCalories.textContent = Math.round(Number(normCalories.textContent) +  0.15 * Number(normCalories.textContent))
}

function calculateActivityCoef() {
  const activityCheck = physicalActivitiesArr.filter(
    (activity) => activity.checked === true
  );
  switch (activityCheck[0].value) {
    case "min":
      return 1.2;
    case "low":
      return 1.375;
    case "medium":
      return 1.55;
    case "high":
      return 1.725;
    case "max":
      return 1.9;
  }
}
