$(document).ready(
    function () {
$("#tabs a").click(showTab);
       $("#order").click(goToMenu);
       $("#dine").click(goToInformation);
$("#quantity").change(prices)

function goToMenu() {
           $(".nav-link").eq(1).click();

}
function goToInformation() {
    $(".nav-link").eq(3).click();
}
function showTab(event) {
    event.preventDefault()
    $(this).tab("show");
}
       function prices () {
           var mealOne = $("#meal1:checked").length;
           var mealTwo = $("#meal2:checked").length;
           var mealThree = $("#meal3:checked").length;

           var pizzaTotal = parseInt($("#quantity").val());

           var finalPrice = (pizzaTotal * 10.99 * mealOne) + (pizzaTotal * 8.99 * mealTwo) + (pizzaTotal * 5.99 * mealThree);

           $("#total").text(finalPrice.toFixed(2));

        }

    });