// click on the phone quality increase button
document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const phoneQuantity = productQuantity("phone-number-field", true);
    // product price
    const totalPrice = singleProductTotalPrice(phoneQuantity, 1219);
    // set phone total cost value
    setValue("phone-total", totalPrice);
    // subtotal value
    const subtotal = subTotalValue();
    // set subtotal value
    setValue("sub-total", subtotal);
  });

// click on the phone quality decrease button
document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const phoneQuantity = productQuantity("phone-number-field", false);
    // product total price
    const totalPrice = singleProductTotalPrice(phoneQuantity, 1219);
    // set phone total value
    setValue("phone-total", totalPrice);
    // subtotal value
    const subtotal = subTotalValue();
    // set subtotal value
    setValue("sub-total", subtotal);
  });

// click on the case quality increase button
document.getElementById("btn-case-plus").addEventListener("click", function () {
  const caseQuantity = productQuantity("case-number-field", true);
  // product total price
  const totalPrice = singleProductTotalPrice(caseQuantity, 59);
  // set casing total value
  setValue("case-total", totalPrice);
  // subtotal value
  const subtotal = subTotalValue();
  // set subtotal value
  setValue("sub-total", subtotal);
});

// click on the case quality decrease button
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const caseQuantity = productQuantity("case-number-field", false);
    // product total price
    const totalPrice = singleProductTotalPrice(caseQuantity, 59);
    // set casing value
    setValue("case-total", totalPrice);
    // subtotal value
    const subtotal = subTotalValue();
    // set subtotal value
    setValue("sub-total", subtotal);
  });

// check out button
document
  .getElementById("check-out-button")
  .addEventListener("click", function () {
    // subtotal value
    const subtotal = subTotalValue();
    // set subtotal value
    // tax
    const tax = (subtotal / 100) * 10;
    // set tax value
    setValue("tax-amount", tax);

    // final value
    const finalPrice = subtotal + tax;
    setValue("final-total", finalPrice);
  });

// remove element from cart
/* const productItems = document.getElementsByClassName("remove-item");
for (const item of productItems) {
  item.addEventListener("click", function () {
    const products = item.closest("div#products");
    products.remove();
  });
} */

const productItems = document.getElementsByClassName("remove-item");
for (const item of productItems) {
  item.addEventListener("click", function () {
    item.closest("div.cart-item").remove();
  });
}
