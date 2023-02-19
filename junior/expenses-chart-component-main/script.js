// const chart = document.querySelector('.chart');

const fecthData = await fetch("./data.json");
const data = await fecthData.json();
const maxData = Math.max(...data.map((object) => object.amount));
// console.log(maxData)
const chart = document.querySelector(".chart");

function render(day, amount) {
    console.log(day);
  // container of eache bar
  const cont = document.createElement("div");
  // number when hove
  const labelElement = document.createElement("p");
  labelElement.setAttribute("class", "number");
  labelElement.innerHTML = `$${amount}`;
  //bar 
  const barElement = document.createElement('div');
  // height
  const height = (amount / maxData) * 150 + "px";
  barElement.setAttribute('class', 'column');
  barElement.style.height = height;
  if(amount == maxData){
    barElement.style.backgroundColor = 'Cyan';
  }
//day below of the bar
  const dayElement = document.createElement("p");
  dayElement.setAttribute("class", "day");
  dayElement.innerHTML = day;
  cont.appendChild(labelElement);
  cont.appendChild(barElement);
  cont.appendChild(dayElement);
  return cont;
}

for (let item in data){
    const i = render(data[item].day, data[item].amount);
    chart.appendChild(i);

}