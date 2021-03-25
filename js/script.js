function show_available() {
    zone_a_montrer = document.getElementById("available_hide");
    zone_a_montrer.className="visible";
    button = document.getElementById("plus_button_available");
    button.className="invisible";
    button = document.getElementById("minus_button_available");
    button.className="plus_or_minus_button";
}
function hide_available() {
    zone_a_cacher = document.getElementById("available_hide");
    zone_a_cacher.className="invisible";
    button = document.getElementById("minus_button_available");
    button.className="invisible";
    button = document.getElementById("plus_button_available");
    button.className="plus_or_minus_button";
}

function hide_update() {
    zone_a_cacher = document.getElementById("update_hide");
    zone_a_cacher.className="invisible";
    button = document.getElementById("minus_button_update");
    button.className="invisible";
    button = document.getElementById("plus_button_update");
    button.className="plus_or_minus_button";
}
function show_update() {
    zone_a_montrer = document.getElementById("update_hide");
    zone_a_montrer.className="visible";
    button = document.getElementById("plus_button_update");
    button.className="invisible";
    button = document.getElementById("minus_button_update");
    button.className="plus_or_minus_button";
}
function show_project() {
    zone_a_montrer = document.getElementById("projects_hide");
    zone_a_montrer.className="visible";
    button = document.getElementById("plus_button_project");
    button.className="invisible";
    button = document.getElementById("minus_button_project");
    button.className="plus_or_minus_button";
}
function hide_project() {
    zone_a_cacher = document.getElementById("projects_hide");
    zone_a_cacher.className="invisible";
    button = document.getElementById("minus_button_project");
    button.className="invisible";
    button = document.getElementById("plus_button_project");
    button.className="plus_or_minus_button";
}