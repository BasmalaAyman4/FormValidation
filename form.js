let Allcountry =
{
    "Egypt": {
        "Cairo": ["Helwan", "Maddi"],
        "Gharbiya": ["El Mahalla", "Tanta"]
    },
    "KSA": {
        "Riyadh": ["Yanbu", "Ay 7aga"],
        "Tabuk": ["blabla", "mafesh"]
    }
}

let countryValue = Object.keys(Allcountry);
let stateValue = Object.keys(Allcountry).map(key => {
    return Allcountry[key]
});



window.onload = function () {
    let country = document.getElementById("country");
    let state = document.getElementById("state");
    let city = document.getElementById("city");
    countryValue.forEach(data => {
        country.innerHTML += `<option value="${data}">${data}</option>`
    })
    country.onchange = function (e) {
        state.length = 1;
        city.length = 1;
        //console.log(Object.keys(Allcountry[`${e.target.value}`]))
        Object.keys(Allcountry[`${e.target.value}`]).forEach(statee => {
            state.innerHTML += `<option value=${statee} data-country='${e.target.value}'>${statee}</option>`

        })
        state.onchange = function (e) {
            city.length = 1;

            (Allcountry[`${state[e.target.selectedIndex].dataset.country}`][`${e.target.value}`]).forEach(cityy => {
                city.innerHTML += `<option value=${cityy}'>${cityy}</option>`
            })

        }

        /*console.log(Allcountry[e.target.selectedIndex].dataset.country);
        console.log(e.target)
        console.log(Object.keys(Allcountry[`${e.dataCountry}`][`${e.target.value}`]))*/
        // for (i = 0; i < stateValue.length; i++) {

        //     state.innerHTML += `<option>${Object.keys(stateValue[i])}</option>`
        // }
        /*  keysValue.forEach(val => {
 
             state.innerHTML += `<option>${val}</option>`
         }) */
    }
}


/*var Allcountry = {
    "Egypt": {
        "Cairo": ["Helwan", "Maddi"],
        "Gharbiya": ["El Mahalla", "Tanta"]
    },
    "KSA": {
        "Riyadh": ["Yanbu", "Ay 7aga"],
        "Tabuk": ["blabla", "mafesh"]
    }
}
 window.onload = function () {
    var country = document.getElementById("country");
    var state = document.getElementById("state");
    var city = document.getElementById("city");
    for (var x in Allcountry) {
        country.options[country.options.length] = new Option(x, x);
    }
    country.onchange = function () {
        //empty Chapters- and Topics- dropdowns
        city.length = 1;
        state.length = 1;
        //display correct values
        for (var y in Allcountry[this.value]) {
            state.options[state.options.length] = new Option(y, y);
        }
    }
    state.onchange = function () {
        //empty Chapters dropdown
        city.length = 1;
        //display correct values
        var z = Allcountry[country.value][this.value];
        for (var i = 0; i < z.length; i++) {
            city.options[city.options.length] = new Option(z[i], z[i]);
        }
    }
} */



let fname = document.querySelector("[name='Fname']")
let lname = document.querySelector("[name='Lname']")
let email = document.querySelector("[name='Email']")
let pass = document.querySelector("[name='password']")
let conpass = document.querySelector("[name='conPassword']")
let fnameerror = document.querySelector(".fnamError")
let lnameerror = document.querySelector(".lnamError")
let emailerror = document.querySelector(".emailError")
let passerror = document.querySelector(".passError")
let conpasserror = document.querySelector(".conPassError")
let gender = document.querySelectorAll("[name='gender']")
let gen = document.querySelector(".gen")

function validation(event) {
    let Fname = false;
    let Lname = false;
    let Em = false;
    let P = false;
    let cP = false;
    let gn = false;
    let validname = /^[A-Za-z]+$/;
    let validationFname = validname.test(fname.value)
    let validationLname = validname.test(lname.value)
    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let validationEmail = validEmail.test(email.value)
    var validPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (fname.value == "") {
        fnameerror.innerHTML = "First name is required";
    } else if (validationFname === false) {
        fnameerror.innerHTML = "First Name must be only string without spaces";
    } else {
        fnameerror.innerHTML = "";
        Fname = true;
    }

    if (lname.value == "") {
        lnameerror.innerHTML = "Last name is required";
    } else if (validationLname === false) {
        lnameerror.innerHTML = "First Name must be only string without spaces";
    } else {
        lnameerror.innerHTML = "";
        Lname = true;
    }

    if (email.value == "") {
        emailerror.innerHTML = "Email is required";
    } else if (validationEmail === false) {
        emailerror.innerHTML = "Invalid Email";
    } else {
        emailerror.innerHTML = "";
        Em = true
    }

    if (pass.value == "") {
        passerror.innerHTML = "password is required";
    } else if (pass.value.match(validPass)) {
        passerror.innerHTML = "";
        P = true;
    } else {
        passerror.innerHTML = "Password must have at least one<br> Uppercase, lowercase, digit,<br> special characters& 8 characters ";
    }

    if (conpass.value == "") {
        conpasserror.innerHTML = "please enter password";
    } else if (conpass.value !== pass.value) {
        conpasserror.innerHTML = "Confirm Password does not match";
    } else {
        conpasserror.innerHTML = "";
        cp = true;
    }

    if ((gender[0].checked == false) && (gender[1].checked == false)) {
        gen.innerHTML = "Please choose your Gender: Male or Female";
    } else {
        gen.innerHTML = "";
        gn = true;
    }

    if (Fname === false || Lname === false || Em === false || P === false || cP === false || gn === false) {
        event.preventDefault();
    }
}


