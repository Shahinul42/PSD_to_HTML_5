
let Massage_icon = document.querySelector(".Massage_icon");
let Btn = document.querySelector(".Buttons .Btn");

let Hero_btn_relative = document.querySelector(".Hero_btn_relative");

let Hero_btn_areya = document.querySelector(".Hero_btn_areya");

let Buttons = document.querySelector(".Buttons");

let Btn_arya_offset_top = Hero_btn_relative.offsetTop + 200;
let Offset_height = document.body.offsetHeight;
// let Offset_body = window.scrollY;
let Scroll_bottom;
let Scrollable_inner_height;


window.addEventListener("scroll", function () {
    Scroll_bottom = window.scrollY;
    Scrollable_inner_height = window.scrollY + window.innerHeight;

    if (Scroll_bottom > Btn_arya_offset_top) {
        Btn.style.cssText = `opacity:0;visibility:hidden;`
        Massage_icon.style.cssText = `opacity:1;visibility:visible;`;
        Hero_btn_areya.style.cssText = `position:fixed;`;
        Buttons.classList.add("Floting");
        // Buttons.style.cssText = `--X:45vw;--Y:85vh;`;
    } else {
        Btn.style.cssText = `opacity:1;visibility:visible;`
        Massage_icon.style.cssText = `opacity:0;visibility:hidden;`
        Hero_btn_areya.style.cssText = `position:absolute;`;
        Buttons.style.cssText = `--X:0;--Y:0`;
        Buttons.classList.remove("Floting");
    }

    if ((Offset_height - 200) < Scrollable_inner_height) {
        Buttons.style.cssText = `transform:translate(45vw, 110vh); opacity:0;`
    } else {
        Buttons.style.cssText = `transforms:none`
    }
})




let Humbargar = document.querySelector(".Humbargar");
let Body = document.querySelector("body");
let Nav = document.querySelector(".Nav");
let Switch = false;


Humbargar.addEventListener("click", Mobile_nav)
function Mobile_nav() {
    Body.classList.toggle("Mobile");
    if (Switch === true) {
        Nav.style.cssText = "transform:translate(100%, -100%);";
        Switch = false
    } else {
        Nav.style.cssText = "transform:translate(0, 0);";
        Switch = true
    }
}
window.addEventListener("resize", function () {
    if (window.innerWidth >= 550) {
        location.reload();
    }
})


// ==========================================================
// =========== MAKE FORM INPUT AREA ACTIVE ANIMATION ============
let Main_website = document.querySelector(".Main_website");
let Massage_pop_up = document.querySelector(".Massage_pop_up");
let Div_active;
let Clicked_index_of_div;
let Chenged_index_of_Inpute = undefined;
let Chenged_index_of_Inpute_value = "";
let Turn_up_mass = false;

let Divs = document.querySelectorAll("form div");
Divs = Array.from(Divs);

////////////////////////////////////////////////////////
let Inputes = document.querySelectorAll("form input");
let Textarea = document.querySelector("form textarea");
Inputes = Array.from(Inputes);            //MAKE DOM ARRAY TO JS ARRAY
Inputes.push(Textarea);                  //COMBINE INPUTE AND TEXTAREA

////////////////////////////////////////////////////////

function Turn_mass() {
    if (Turn_up_mass === false) {
        Body.style.cssText = "overflow-y: hidden;";
        Massage_pop_up.style.cssText = "opacity:1;pointer-events: auto;";
        Turn_up_mass = true;
    } else {
        Body.style.cssText = "overflow-y: auto;";
        Massage_pop_up.style.cssText = "opacity:0;pointer-events: none;";
        Turn_up_mass = false;
    }
}

Divs.forEach((Div) => {
    Div.style.cssText="user-select:none;";
    Div.addEventListener("click", () => {
        Clicked_index_of_div = Divs.findIndex((e) => { return e == Div });
        Div_active = Divs[Clicked_index_of_div]
        Div_active = true;
    })
})
Inputes.forEach((Inpute) => {
    Inpute.addEventListener("change", (e) => {
        Chenged_index_of_Inpute = e.target;
        Chenged_index_of_Inpute_value = Chenged_index_of_Inpute.value;
    })
})


Massage_pop_up.addEventListener("click", () => {

    for (Inpute of Inputes) {
        if (Inpute.value == "") {
            Inpute.parentElement.classList.remove("Active")
            Textarea.parentElement.classList.remove("Active")
        }
    }

    if (Div_active === true) {

        Divs[Clicked_index_of_div].classList.add("Active");

        Div_active = false;
    }
    

    if (Chenged_index_of_Inpute_value !== "") {
        console.log("inpute is not empty")
        Chenged_index_of_Inpute.parentElement.classList.add("Active")
    } else {
        console.log("inpute is empty")
    }

})



