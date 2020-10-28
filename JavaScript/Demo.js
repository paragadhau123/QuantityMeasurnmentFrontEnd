function populateSelect(Value) {

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

    if (Value == "Length") {
        var ele = document.getElementById('sel1');
        for (var i = 0; i < Length.length; i++) {

            ele.innerHTML = ele.innerHTML +
                '<option value="">' + Length[i]['Unit_Name'] + '</option>';
        }
        var ele = document.getElementById('sel2');
        for (var i = 0; i < Length.length; i++) {

            ele.innerHTML = ele.innerHTML +
                '<option value="">' + Length[i]['Unit_Name'] + '</option>';
        }
    }
    else if (Value == "Volume") {
        var ele = document.getElementById('sel1');
        for (var i = 0; i < Volume.length; i++) {

            ele.innerHTML = ele.innerHTML +
                '<option value="">' + Volume[i]['Unit_Name'] + '</option>';
        }
        var ele = document.getElementById('sel2');
        for (var i = 0; i < Volume.length; i++) {

            ele.innerHTML = ele.innerHTML +
                '<option value="">' + Volume[i]['Unit_Name'] + '</option>';
        }
    }
    else {
        var ele = document.getElementById('sel1');
        for (var i = 0; i < Temperature.length; i++) {

            ele.innerHTML = ele.innerHTML +
                '<option value="">' + Temperature[i]['Unit_Name'] + '</option>';
        }
        var ele = document.getElementById('sel2');
        for (var i = 0; i < Temperature.length; i++) {

            ele.innerHTML = ele.innerHTML +
                '<option value="">' + Temperature[i]['Unit_Name'] + '</option>';
        }
    }

}

