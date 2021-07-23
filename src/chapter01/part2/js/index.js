"use strict";
{
    let d = "Hello";
    let e = "World";
    let f = 10;
    console.log(d + "," + e);
    function sum(a, b) {
        return a + b;
    }
    let div = document.getElementById("result");
    // div?.addEventListener("click", function () {
    //   console.log("hello");
    // });
    div &&
        div.addEventListener("click", function () {
            console.log("hello");
        });
}
