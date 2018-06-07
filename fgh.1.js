function f(s, n, c) {
    //console.log(s+", "+n+", "+c);
    if(!Array.isArray(n)){n=sta(n+"");}
    console.log(n);
    if(!Array.isArray(c)){n=sta(c+"");}
    c=sta(c+"");
    if (s == 0) {
        return add(sta(n+""),[1]);
    } else if (s == 1){
        return add(sta(n+""),sta(n+""));
    } else if (c > 1) {
        return f(s, f(s, n, 1), add(sta(c+""),[-1]));
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

//Addition

/*stringToArray*/
function sta(s) {
    if (s.charAt(0) == "-") {
        var m = -1;
    } else {
        var m = 1;
    }
    var t = [];
    for (var i in s) {
        t.push(m * parseInt(s.charAt(i)));
    }
    if (s.charAt(0) == "-") {
        t.shift();
    }
    return t;
}
/*addFunction*/
function add(i, ii) {
    var iii = [];
    var l = Math.max(i.length, ii.length);
    if (i.length > ii.length) {
        while (i.length > ii.length) {
            ii.unshift(0);
        }
    }
    if (ii.length > i.length) {
        while (ii.length > i.length) {
            i.unshift(0);
        }
    }
    for (var j = 0; j < l; j++) {
        iii.push(0);
    }
    for (var j = l - 1; j > -1; j--) {
        iii[j] = i[j] + ii[j];
    }
    iii.unshift(0);
    for (var j = l; j > -1; j--) {
        iii[j - 1] += Math.floor(iii[j] / 10);
        iii[j] -= 10 * Math.floor(iii[j] / 10);
    }
    while (iii[0] == 0 && iii.length > 1) {
        iii.shift();
    }
    return iii;
}

function addN() {
    var d = add(sta(document.getElementById("a").value), sta(document.getElementById("b").value)).join("");
    document.getElementById("c").value = d;
}