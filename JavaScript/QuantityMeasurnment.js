let Length = [
    { "Unit_Name": "Metres" },
    { "Unit_Name": "Kilometres" },
    { "Unit_Name": "Centimetres" },
    { "Unit_Name": "Milimetres" },
    { "Unit_Name": "Micrometre" },
];

let Volume = [
    { "Unit_Name": "Litres" },
    { "Unit_Name": "MiliLitres" },
    { "Unit_Name": "Gallons" },
];

let Temperature = [
    { "Unit_Name": "Celsius" },
    { "Unit_Name": "Degree" },
    { "Unit_Name": "Kelvin" },
];

function populateSelect(Value) {
    if (Value == "Length") {
        Method(Length);
    }
    else if (Value == "Volume") {
        Method(Volume);
    }
    else {
        Method(Temperature);
    }
}

function Method(Unit) {
    var emp = "";
    var ele = document.getElementById('sel1');
    for (var i = 0; i < Unit.length; i++) {

        emp +=   ele.innerHTML = ele.innerHTML +
          '<option value="">' + Unit[i]['Unit_Name'] + '</option>';
    }
    var ele = document.getElementById('sel2');
    for (var i = 0; i < Unit.length; i++) {

        emp +=   ele.innerHTML = ele.innerHTML +
            '<option value="">' + Unit[i]['Unit_Name'] + '</option>';
    }
}

window.onload=function(){
    document.getElementById("model").click();
  };