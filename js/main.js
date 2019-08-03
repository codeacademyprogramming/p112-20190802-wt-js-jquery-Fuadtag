$(function() {
    let header = $("<header></header>");
    let main = $("<main></main>");
    let footer = $("<footer></footer>");
    let nav = $(`<nav class = "navbar navbar-expand-lg navbar-dark bg-dark fixed-top"></nav>`);
    let divcont = $("<div></div>");
    let divnavleft = $("<div></div>");
    let divnavright = $("<div></div>");
    let h5 = $("<h5></h5>");
    let abrand = $("<a></a>");
    let ul = $(`<ul class = "navbar-nav ml-auto"></ul>`)
    let lihome = $(`<li class="nav-item"><a href = "#" class = "nav-link" >Home</a></li>`);
    let liabout = $(`<li class="nav-item"><a href = "#" class = "nav-link" >About</a></li>`);
    let liservices = $(`<li class="nav-item"><a href = "#" class = "nav-link" >Services</a></li>`);
    let licontact = $(`<li class="nav-item"><a href = "#" class = "nav-link" >Contact</a></li>`);
    let divintro = $(`<div class = "container jumbotron"></div>`);
    $(divintro).css("margin-top", "100px")
    let h1 = (`<h1 class = "display-3">A Warm Welcome!</h1>`);
    let pelem = $(`<p class = "text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>`)
    let button = $(`<button class = "btn btn-primary btn-lg mb-4">Call to action!</button>`);
    let divrow = $(`<div class = "row text-center"></div>`);
    let colrow1 = $(`<div class = "col-lg-3 col-md-6 mb-4"></div>`);
    let divcard = $(`<div class = "card h-100"></div>`);
































    $(divcont).addClass("container d-flex justify-content-between")
    $(divnavleft).attr("id", "divleft");
    $(divnavright).attr("id", "divright");
    $("body").append(header, main, footer);
    $("header").append(nav);
    $("nav").append(divcont);
    $("div").append(divnavleft, divnavright);
    $("#divleft").append(h5);
    $(h5).append(abrand);
    $(abrand).text("Start Bootstrap");
    $(abrand).attr("href", "#");
    $(abrand).addClass("navbar-brand");
    $("#divright").append(ul);
    $(ul).append(lihome, liabout, liservices, licontact);
    $(main).append(divintro);
    $(divintro).append(h1, pelem, button)


















})


// let header = document.createElement("header");
// let main = document.createElement("main");
// let footer = document.createElement("footer")
// $("body").append(header, main, footer);
// let nav = document.createElement("nav");
// let div = document.createElement("div");
// div.className = "container";
// let divleft = document.createElement("div");
// let divright = document.createElement("div");
// $("header").append(nav);
// $("nav").append(div);
// $("div").append(divleft, divright);
// let h5 = document.createElement("h5");
// let aelem = document.createElement("a");
// aelem.href = "#";
// aelem.className = "navbar-brand"
// divleft.append(h5);
// $("h5").append(aelem);
// aelem.innerText = "Start Bootstrap";
// let aelem1 = document.createElement("a");
// let aelem2 = document.createElement("a");
// let aelem3 = document.createElement("a");
// let aelem4 = document.createElement("a");
// aelem1.innerText = "Home";
// aelem2.innerText = "About";
// aelem3.innerText = "Services";
// aelem4.innerText = "Contact";
// let ulelem = document.createElement("ul");
// let lielem = document.createElement("li");
// let lielem1 = document.createElement("li");
// let lielem2 = document.createElement("li");
// let lielem3 = document.createElement("li");
// divright.appendChild(ulelem);
// $("ul").append(lielem, lielem1, lielem2, lielem3, lielem4);