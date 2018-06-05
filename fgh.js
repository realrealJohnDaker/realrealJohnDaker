function f(s, n, c) {
    if (s == 0) {
        return n + 1;
    } else if (c > 1) {
        return f(s, f(s, n, 1), c - 1);
    } else {
        return f(s - 1, n, n);
    }
}
function fghN(){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    document.getElementById("c").innerHTML=f(a,b,1);
}