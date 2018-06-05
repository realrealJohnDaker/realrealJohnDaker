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