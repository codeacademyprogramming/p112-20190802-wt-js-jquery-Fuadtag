$(function() {
    let header = $("<header></header>");
    let main = $("<main></main>");
    let footer = $(`<footer class = "py-5 bg-dark" ></footer>`);
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
    /* Card */
    let divrow = $(`<div class = "row text-center"></div>`);
    let divrow1 = $(`<div class = "container col-3 mb-4"></div>`);
    let divcard = $(`<div class = "card h-100"></div>`);
    let img = $(`<img class = "card-img-top" src = "http://placehold.it/500x325">`);
    let divbody = $(`<div class = "card-body"></div>`);
    let h4 = $(`<h4 class = "card-title">Card title</h4>`);
    let pbody = $(`<p class = "card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>`);
    let divfooter = $(`<div class = "card-footer"></div>`)
    let afooter = $(`<a class = "btn btn-primary text-white">Find out more!</a>`);
    // let divrow2 = $(`<div class = "row text-center"></div>`);
    let divrow2 = $(`<div class = "container col-3 mb-4"></div>`);
    let divcard1 = $(`<div class = "card h-100"></div>`);
    let img1 = $(`<img class = "card-img-top" src = "http://placehold.it/500x325">`);
    let divbody1 = $(`<div class = "card-body"></div>`);
    let h41 = $(`<h4 class = "card-title">Card title</h4>`);
    let pbody1 = $(`<p class = "card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>`);
    let divfooter1 = $(`<div class = "card-footer"></div>`)
    let afooter1 = $(`<a class = "btn btn-primary text-white">Find out more!</a>`);
    // let divrow = $(`<div class = "row text-center"></div>`);
    let divrow3 = $(`<div class = "container col-3 mb-4"></div>`);
    let divcard2 = $(`<div class = "card h-100"></div>`);
    let img2 = $(`<img class = "card-img-top" src = "http://placehold.it/500x325">`);
    let divbody2 = $(`<div class = "card-body"></div>`);
    let h42 = $(`<h4 class = "card-title">Card title</h4>`);
    let pbody2 = $(`<p class = "card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>`);
    let divfooter2 = $(`<div class = "card-footer"></div>`)
    let afooter2 = $(`<a class = "btn btn-primary text-white">Find out more!</a>`);
    // let divrow = $(`<div class = "row text-center"></div>`);
    let divrow4 = $(`<div class = "container col-3 mb-4"></div>`);
    let divcard3 = $(`<div class = "card h-100"></div>`);
    let img3 = $(`<img class = "card-img-top" src = "http://placehold.it/500x325">`);
    let divbody3 = $(`<div class = "card-body"></div>`);
    let h43 = $(`<h4 class = "card-title">Card title</h4>`);
    let pbody3 = $(`<p class = "card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>`);
    let divfooter3 = $(`<div class = "card-footer"></div>`)
    let afooter3 = $(`<a class = "btn btn-primary text-white">Find out more!</a>`);
    let divcontainer = $(`<div class = "container"></div>`);
    let divfooterlast = $(`<div class = "container"></div>`);
    let pfooterlast = $(`<p class = "m-0 text-center text-white">Copyright © Your Website 2019</p>`)




























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
    $(divintro).append(h1, pelem, button);
    /*Card*/
    $(main).append(divcontainer);
    $(divcontainer).append(divrow);
    $(divrow).append(divrow1);
    $(divrow1).append(divcard);
    $(divcard).append(img, divbody);
    $(divbody).append(h4, pbody);
    $(divcard).append(divfooter);
    $(divfooter).append(afooter);
    $(divrow).append(divrow2);
    $(divrow2).append(divcard1);
    $(divcard1).append(img1, divbody1);
    $(divbody1).append(h41, pbody1);
    $(divcard1).append(divfooter1);
    $(divfooter1).append(afooter1);
    $(divrow).append(divrow3);
    $(divrow3).append(divcard2);
    $(divcard2).append(img2, divbody2);
    $(divbody2).append(h42, pbody2);
    $(divcard2).append(divfooter2);
    $(divfooter2).append(afooter2);
    $(divrow).append(divrow4);
    $(divrow4).append(divcard3);
    $(divcard3).append(img3, divbody3);
    $(divbody3).append(h43, pbody3);
    $(divcard3).append(divfooter3);
    $(divfooter3).append(afooter3)
        /* Footer */
    $("footer").append(divfooterlast);
    $(divfooterlast).append(pfooterlast);
















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