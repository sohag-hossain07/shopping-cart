function productQuantity(inputId, isIncrease) {
  const productQuantityField = document.getElementById(inputId);
  const phoneQuantity = parseInt(productQuantityField.value);
  let quantity;
  if (isIncrease) {
    quantity = phoneQuantity + 1;
  } else {
    quantity = phoneQuantity - 1;
  }
  productQuantityField.value = quantity;
  return quantity;
}

// calculate single product total price
function singleProductTotalPrice(quantity, value) {
  const total = quantity * value;
  return total;
}

// set value
function setValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value.toFixed(2);
}

function subTotalValue() {
  const phoneTotalField = document.getElementById("phone-total");
  const phonePrice = parseFloat(phoneTotalField.innerText);
  const caseTotalField = document.getElementById("case-total");
  const casePrice = parseFloat(caseTotalField.innerText);
  const total = phonePrice + casePrice;
  return total;
}
