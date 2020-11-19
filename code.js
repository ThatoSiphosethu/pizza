$(document).ready(
    function () {
$("#tabs a").click(showTab);
       $("#order").click(goToMenu);
       $("#deliver").click(goToInformation);
$("input").change(prices)

        $("#confirm1").click(output);

function goToMenu() {
           $(".nav-link").eq(1).click();

}
function goToInformation() {
    $(".nav-link").eq(2).click();
}
function showTab(event) {
    event.preventDefault()
    $(this).tab("show");
}
       function prices () {

        var size = document.getElementById("size").value;
        size = parseFloat(size)
        var beef = document.getElementById("beef").value;
        beef = parseFloat(beef)
        var chicken = document.getElementById("chicken").value;
        chicken = parseFloat(chicken)
        var pork = document.getElementById("pork").value;
        pork = parseFloat(pork)
        var pepperoni = document.getElementById("pepperoni").value;
        pepperoni = parseFloat(pepperoni)
        var bacon = document.getElementById("bacon").value;
        bacon = parseFloat(bacon)
        var olives = document.getElementById("olives").value;
        olives = parseFloat(olives)
        var onions = document.getElementById("onions").value;
        onions = parseFloat(onions)
        var pepper = document.getElementById("pepper").value;
        pepper = parseFloat(onions)
        var tomato = document.getElementById("tomato").value;
        tomato = parseFloat(tomato)
        var pineapple = document.getElementById("pineapple").value;
        pineapple = parseFloat(pineapple)
        var total = size + beef + chicken + pork + pepperoni + bacon + olives + onions + pepper + tomato + pineapple;
        total = parseFloat(total)

        var taxincl = total * 1.051;

        var sum = taxincl + 2;

        $("#nameLabel").text($("#name").val())
           $("#addressLabel").text($("#address").val())
           $("#phoneLabel").text($("#phone").val())
           $("#pizzaLabel").text("Pizza Total:"+ taxincl.toFixed(2))
           $("#totalLabel").text("Total" + sum.toFixed(2))

           $("#total").text(sum.toFixed(2));

        }
function output() {
    $("span").last().show();
}


    });