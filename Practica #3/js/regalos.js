
function agregarRegalo() {

    var regalo = document.getElementById("regalo").value;

    if (regalo == "") {

        alert("Escribe un regalo");

    } else {

        document.getElementById("lista").innerHTML +=
        "<li>" + regalo + "</li>";

        document.getElementById("regalo").value = "";

    }

}
