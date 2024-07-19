function generateTable() {
  const number = document.getElementById("numberInput").value;
  const tableContainer = document.getElementById("tableContainer");
  tableContainer.innerHTML = ""; // Clear previous table

  if (number === "") {
    tableContainer.innerHTML = "<p>Please enter a number</p>";
    return;
  }

  const table = document.createElement("table");
  for (let i = 1; i <= 12; i++) {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    cell1.textContent = number;
    cell2.textContent = "x";
    cell3.textContent = i;
    cell4.textContent = "=";
    const cell5 = row.insertCell(4);
    cell5.textContent = number * i;
  }
  tableContainer.appendChild(table);

  tableContainer.style.marginTop = "1rem";
}
