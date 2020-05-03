
function ajax() {
//Creating XHR object
var xhttp = new XMLHttpRequest();
//EventListener
xhttp.onreadystatechange = function() {
    if(this.readyState==4&&this.status==200) {
        var response = JSON.parse(this.responseText);
        console.log(response);
        var Jgrocery =  response.ShoppingListItems;
        console.log(Jgrocery);
        var output ="";

        for(var i=0;i<Jgrocery.length;i++) {
            output += "<tr>";
            output += "<td>" + Jgrocery[i].SerialNumber +"</td>";
            output += "<td>" + Jgrocery[i].Name +"</td>";
            output += "<td>" + Jgrocery[i].Quantity +"</td>";
            output += "<td>" + Jgrocery[i].Unit +"</td>";
            output += "<td>" + Jgrocery[i].Department +"</td>";
            output += "<td>" + Jgrocery[i].Notes +"</td>";
            output+= "</tr>";
        }
    }
        document.getElementById("grocery_table").innerHTML=output;
}
xhttp .open("GET","grocery.json",true);
xhttp.send();
}
