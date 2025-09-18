const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let sum=0;
let prices=document.getElementsByClassName("prices");
   for(let i=0; i<prices.length; i++){
        sum += parseFloat(prices[i].textContent);
   }
  const table = document.querySelector("table"); // Assuming there's a table element
    const newRow = table.insertRow(); // Insert a new row at the end of the table
    const newCell = newRow.insertCell(0); // Insert a new cell in the row
    newCell.colSpan = 2; // Adjust colspan as necessary
    newCell.textContent = `Total Price: ${sum}`; // Set the total price text
};
getSumBtn.addEventListener("click", getSum);

