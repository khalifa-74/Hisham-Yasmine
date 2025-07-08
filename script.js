
function countdownTimer() {
  const targetDate = new Date("2025-08-09T21:00:00").getTime();
  const countdown = document.getElementById("countdown");

  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML =
      "العد التنازلي: " + days + " يوم " + hours + " ساعة " + minutes + " دقيقة " + seconds + " ثانية ";

    if (distance < 0) {
      clearInterval(x);
      countdown.innerHTML = "تم الحفل! 🎉";
    }
  }, 1000);
}

countdownTimer();
