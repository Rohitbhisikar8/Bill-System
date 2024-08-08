let total = 0;

function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemPrice = parseFloat(document.getElementById('item-price').value);

    if(itemName === '' || isNaN(itemPrice)) {
        alert('Please enter a valid item name and price.');
        return;
    }

    // Add item to bill
    const table = document.getElementById('bill-items');
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = itemName;
    cell2.textContent = `$${itemPrice.toFixed(2)}`;

    // Update total
    total += itemPrice;
    document.getElementById('total-price').textContent = total.toFixed(2);

    // Clear input fields
    document.getElementById('item-name').value = '';
    document.getElementById('item-price').value = '';
}
