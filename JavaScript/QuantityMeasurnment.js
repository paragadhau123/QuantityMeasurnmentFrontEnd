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

populateSelect = (value) => {
    if (value == "Length") {
        method(Length);
        $('.length').click(function() {
            $('.length').removeClass('len');
            var el = $(this);
            el.addClass('len');
        })

    } else if (value == "Volume") {
        method(Volume);
        $('.volume').click(function() {
            $('.volume').removeClass('vol');
            var el = $(this);
            el.addClass('vol');
        })
    } else {
        method(Temperature);
        $('.temperature').click(function() {
            $('.temperature').removeClass('temp');
            var el = $(this);
            el.addClass('temp');
        })
    }
}

method = (unit) => {
    let emp = "";
    for (let i = 0; i < unit.length; i++) {

        emp += '<option value="">' + unit[i]['Unit_Name'] + '</option>';
    }
    document.getElementById('sel1').innerHTML = emp;
    document.getElementById('sel2').innerHTML = emp;
}

window.onload = function() {
    document.getElementById("model").click();
};