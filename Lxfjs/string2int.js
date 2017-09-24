/*
    字符串转数字
 */
function string2int(s) {
    var arr = [];
    for(var x = 0; x < s.length; x++) {
        arr.push(s[x]-'0');
    }
    return arr.reduce((x, y) => {
        return (10 * x + y);
    });
}