/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    var arr = s.split(' ');
    arr.reverse();
    return arr.filter(d => d!== '').join(' ');
};

var reverseWords = function(s) {
    var arr = s.split(' ').reduce((arr, d)=>{
        if(d !== '')arr.push(d);
        return arr;
    }, []).reverse().join(' ');
    return arr;
};