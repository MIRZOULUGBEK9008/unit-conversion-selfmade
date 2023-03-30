const elInput = document.querySelector(".js-input"),
elLoader = document.querySelector(".js-loader"),
elButton = document.querySelector(".js-button"),
elForm = document.querySelector(".js-form"),
elLength = document.querySelector(".length"),
elVolume = document.querySelector(".volume"),
elMass = document.querySelector(".mass"),
elInfo = document.querySelectorAll(".item__info");

// LOADER
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    elLoader.classList.add("loader-wrapper--none");
  }, 2000);
});


elInput.addEventListener("input", () => {
  let value = elInput.value;

  const sm = value * 100;
  const m = value / 100;

  const l = value * 1000;
  const fgr = value / 1000;

  const sgr = value * 1000;
  const kg = value / 1000;


  elInfo.forEach(info => {
    elForm.addEventListener("submit", (form) => {
      form.preventDefault();
      elLength.textContent = `${value} m = ${sm} sm | ${value} sm = ${m} m`;
      elVolume.textContent = `${value} l = ${l} gr | ${value} gr = ${fgr} kg`;
      elMass.textContent = `${value} kg = ${sgr} gr | ${value} gr = ${kg} kg`;
      info.classList.add("item__info--show");
    });
  });
});

elButton.addEventListener("dblclick", () => {
  document.body.classList.toggle("dark")
});
