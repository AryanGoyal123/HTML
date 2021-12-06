var name = document.getElementById("name");
var email = document.getElementById("email");
var address = document.getElementById("address");
var zip = document.getElementById("zipcode");

function placeOrder() {
        window.open("completepay.html");
}
function printInfo() {
        document.getElementById("printAddress").innerHTML = address + "," + zip;
        document.getElementById("printName").innerHTML = name1;
        document.getElementById("printEmail").innerHTML = email;
}
