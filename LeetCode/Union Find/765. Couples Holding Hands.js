/**
 * 765. 情侣牵手
 * O(NlogN)
 * O(N)
 * @param {number[]} row
 * @return {number}
 */
 var minSwapsCouples = function(row) {
    const n = row.length,    //定义情侣数量
        tot = n/2,
        f = new Array(tot).fill(0).map((element, index) => index);

    for(let i = 0; i < n; i += 2){
        const l = Math.floor(row[i] / 2),
            r = Math.floor(row[i + 1]/2);
        add(f, l , r);
    }

    const map = new Map();
    for(let i = 0; i < tot; i ++){
        const fx = getf(f, i);
        if(map.has(fx)){
            map.set(fx, map.get(fx) + 1)
        }else{
            map.set(fx, 1);
        }
    }

    let ret = 0;
    for(const [f, sz] of map.entries()){
        ret += sz - 1;
    }
    return ret;
};

const getf = (f, x) =>{
    if(f[x] === x)return x;

    const newf = getf(f, f[x]);
    f[x] = newf;
    return newf;
}

const add = (f, x, y) =>{
    const fx = getf(f, x),
        fy = getf(f, y);
    f[fx] = fy;
};
// https://leetcode-cn.com/problems/couples-holding-hands/solution/qing-lu-qian-shou-by-leetcode-solution-bvzr/



// https://leetcode-cn.com/problems/couples-holding-hands/solution/liang-chong-100-de-jie-fa-bing-cha-ji-ta-26a6/
console.log(minSwapsCouples([0,2,1,3]))