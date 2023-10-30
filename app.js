// using math to get the numbers of how many hours are in a day, how many minutes are in a hour and so on and saving them in a const
const main = () => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //assigning date
  const finalTime = new Date("Dec 09, 2023").toUTCString(); //work in any timezone

  const countDown = new Date(finalTime).getTime();
  const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDown - now;
    //getting date dd/hh/mm/ss
    document.getElementById("days").innerText = Math.floor(distance / day);
    document.getElementById("hours").innerText = Math.floor(
      (distance % day) / hour
    );
    document.getElementById("minutes").innerText = Math.floor(
      (distance % hour) / minute
    );
    document.getElementById("seconds").innerText = Math.floor(
      (distance % minute) / second
    );

    //what happens after the time is up
    if (distance < 0) {
      document.getElementById("heading").innerText =
        "So it begins! The great battle of our semester.";
      document.getElementById("main-div").style.display = "none";
      document.getElementById("content").style.display = "block";

      clearInterval(x);
    }
    //seconds

    //delay in milliseconds
  }, 0);
};

main();
