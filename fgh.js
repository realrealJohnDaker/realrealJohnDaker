function f(s, n, c) {
    console.log(s+", "+n+", "+c);
    if (s == 0) {
        return n + 1;
    } else if (c > 1) {
        return f(s, f(s, n, 1), c - 1);
    } else {
        return f(s - 1, n, n);
    }
}
function fghN(){
    var a=parseInt(document.getElementById("a").value);
    var b=parseInt(document.getElementById("b").value);
    if(a!=0){document.getElementById("c").value=f(a+1,b,1);}
    else{document.getElementById("c").value=f(0,b,1);}
}