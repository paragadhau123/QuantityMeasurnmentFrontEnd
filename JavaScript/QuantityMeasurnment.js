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

populateSelect = (Value) => {
    if (Value == "Length") {
        Method(Length);
    } else if (Value == "Volume") {
        Method(Volume);
    } else {
        Method(Temperature);
    }
}

Method = (Unit) => {
    let emp = "";
    for (let i = 0; i < Unit.length; i++) {

        emp += '<option value="">' + Unit[i]['Unit_Name'] + '</option>';
    }
    document.getElementById('sel1').innerHTML = emp;
    let emp2 = "";
    for (let i = 0; i < Unit.length; i++) {
        emp2 += '<option value="">' + Unit[i]['Unit_Name'] + '</option>';
    }
    document.getElementById('sel2').innerHTML = emp2
}

window.onload = function() {
    document.getElementById("model").click();
};