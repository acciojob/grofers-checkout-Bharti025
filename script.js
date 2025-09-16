const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let prices=document.getElementsByClassName("price");
const getSum = () => {
	let sum=0;
   for(let i=0; i<prices.length; i++){
     sum+=prices[i].value;
   }
  return sum;
};
getSumBtn.addEventListener("click", getSum);


