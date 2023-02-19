const daily_current = [];
const daily_previous = [];
const weekly_current = [];
const weekly_previous = [];
const monthly_current = [];
const monthly_previous = [];

// load data

const current_hrs = document.querySelectorAll(".current");
const previous_hrs = document.querySelectorAll(".previous");

// fecth data from file json
fetch("./data.json")
  .then((res) => res.json())
  .then((res) => {
    res.forEach((curr) => {
      daily_current.push(curr.timeframes.daily.current);
      daily_previous.push(curr.timeframes.daily.previous);
      weekly_current.push(curr.timeframes.weekly.current);
      weekly_previous.push(curr.timeframes.weekly.previous);
      monthly_current.push(curr.timeframes.monthly.current);
      monthly_previous.push(curr.timeframes.monthly.previous);
    });
  })
  .then(() => {
    for (let i = 0; i < 6; i++) {
      current_hrs[i].innerHTML = daily_current[i] + "hrs";
      previous_hrs[i].innerHTML =
        "Yesterday " + " - " + daily_previous[i] + "hrs";
    }
  });

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const slc_time = document.querySelectorAll(".time-slc");

daily.addEventListener("click", () => {
  slc_time.forEach((curr) => {
    curr.classList.remove("active");
  });
  daily.classList.add("active");
  for (let i = 0; i < 6; i++) {
    console.log(weekly_current[i]);
    current_hrs[i].innerHTML = daily_current[i] + "hrs";
    previous_hrs[i].innerHTML =
      "Yesterday " + " - " + daily_previous[i] + "hrs";
  }
});

weekly.addEventListener("click", () => {
  slc_time.forEach((curr) => {
    curr.classList.remove("active");
    console.log(curr);
  });
  weekly.classList.add("active");
  for (let i = 0; i < 6; i++) {
    console.log(weekly_current[i]);
    current_hrs[i].innerHTML = weekly_current[i] + "hrs";
    previous_hrs[i].innerHTML =
      "Last week " + " - " + weekly_previous[i] + "hrs";
  }
});

monthly.addEventListener("click", () => {
  slc_time.forEach((curr) => {
    curr.classList.remove("active");
  });
  monthly.classList.add("active");
  for (let i = 0; i < 6; i++) {
    console.log(weekly_current[i]);
    current_hrs[i].innerHTML = monthly_current[i] + "hrs";
    previous_hrs[i].innerHTML =
      "Last month " + " - " + monthly_previous[i] + "hrs";
  }
});
