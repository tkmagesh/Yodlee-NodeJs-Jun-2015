function f1(next){
    console.log("initiating f1");
    setTimeout(function(){
        console.log("f1 invoked");
        if (typeof next === "function")
            next();
    },2000)
}
function f2(next){
    console.log("initiating f2");
    setTimeout(function(){
        console.log("f2 invoked");
        if (typeof next === "function")
            next();
    },2000)
}
function f3(next){
    console.log("initiating f3");
    setTimeout(function(){
        console.log("f3 invoked");
        if (typeof next === "function")
            next();
    },2000)
}
function f4(next){
    console.log("initiating f4");
    setTimeout(function(){
        console.log("f4 invoked");
        if (typeof next === "function")
            next();
    },2000)
}

var fns = [f1, f2, f3, f4];

function run(fns){
    var first = fns[0],
        remaining = fns.slice(1);
    if (first){
        first(function(){
            run(remaining);
        });
    }
}

run(fns);

