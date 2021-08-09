/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
    var pre = s.slice(0, n), cur =  s.length - n >= 1 ? s.slice(n) : '';
    return cur + pre;
};

var reverseLeftWords = function(s, n) {
    return s.substr(n) + s.substr(0, n)
};


var reverseLeftWords = function(s, n) {
    return s.slice(n) + s.slice(0, n);
};
