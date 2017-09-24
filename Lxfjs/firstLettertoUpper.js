function normalize(arr) {
    function toNomal(arrs) {
        var str = arrs.toLowerCase();
        var strFirst = str[0].toUpperCase();
        str = str.substring(1);
        return strFirst + str;
    }
    return arr.map(toNomal);
}
normalize(["teST",'fdsDSF'])