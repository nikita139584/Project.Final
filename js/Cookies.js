function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/; SameSite=Lax";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(nameEQ)) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null;
}

const today = new Date().toDateString();

if (getCookie("date") !== today) {
  setCookie("date", today, 1);
  setCookie("timeOnSite", 0, 1);
}

const startTime = Date.now();

window.addEventListener("beforeunload", () => {
  let totalTime = Number(getCookie("timeOnSite")) || 0;

  const sessionTime = Math.floor((Date.now() - startTime) / 1000);

  totalTime += sessionTime;

  setCookie("timeOnSite", totalTime, 1);

  console.log("Время за сегодня:", totalTime, "секунд");
});
console.log(
  "Сегодня на сайте:",
  Number(getCookie("timeOnSite")) || 0,
  "секунд"
);
