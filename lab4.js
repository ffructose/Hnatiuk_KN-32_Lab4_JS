

class Fridge{
    constructor( color, brand, model, price){
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    show(){
        let html = "";
        html += "<tr>";
        html += "<td>" + this.color + "</td>";
        html += "<td>" + this.brand + "</td>";
        html += "<td>" + this.model + "</td>";
        html += "<td>" + this.price + "</td>";
        html += "</tr>";
        return html;
    }
}

let fridges = [
    new Fridge("сріблястий", "GE", "GT180", 1000),
    new Fridge("чорний", "Maytag", "M200", 950),
    new Fridge("білий", "Electrolux", "E400", 1300),
    new Fridge("золотий", "Haier", "H300", 1200),
    new Fridge("сірий", "Amana", "A450", 1100),
    new Fridge("червоний", "Hotpoint", "HP150", 800),
    new Fridge("синій", "Panasonic", "P300", 1000),
    new Fridge("зелений", "Miele", "M450", 1400),
    new Fridge("чорний", "Kenmore", "K400", 1200),
    new Fridge("білий", "Viking", "V200", 1600),
    new Fridge("сріблястий", "Sub-Zero", "SZ1800", 2500),
    new Fridge("золотий", "Sharp", "S300", 900),
    new Fridge("червоний", "Daewoo", "D400", 1100),
    new Fridge("синій", "Siemens", "S200", 1300),
    new Fridge("зелений", "Whirlpool", "WR350", 1000),
    new Fridge("сріблястий", "LG", "LT300", 1200),
    new Fridge("чорний", "Samsung", "RS200", 950),
    new Fridge("синій", "Bosch", "B250", 1100),
    new Fridge("білий", "Frigidaire", "FG350", 900),
    new Fridge("зелений", "Frigidaire", "FG250", 850),
    new Fridge("червоний", "Bosch", "B120", 900),
    new Fridge("синій", "KitchenAid", "KA150", 1200),
    new Fridge("чорний", "Whirlpool", "WR300", 1100), 
    new Fridge("сріблястий", "LG", "LT200", 950),
    new Fridge("білий", "Samsung", "RS100", 800)
];

function showFridges(){

    var html = "<table class='table_fridge'>";

    html += "<tr class='table_fridge_th'> <td> колір </td> <td> марка </td> <td> модель </td> <td> ціна </td></tr>";

    for (let i = 0; i < fridges.length; i++) {
        html += fridges[i].show();
    }
    html += "</table>";

    document.getElementById("fridges").innerHTML = html;

}