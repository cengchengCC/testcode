//LCP18 早餐组合
//https://leetcode-cn.com/problems/2vYnGI/

//贪心算法

// var breakfastNumber = function(staple, drinks, x) {
//     function cmp (v1, v2){
//         if (v1 > v2) return 1;
//         else if (v1 < v2) return -1;
//         else return 0;
//     }
//     let ans = 0;
//     let last = drinks.length - 1;
//     staple.sort(cmp);
//     drinks.sort(cmp);
    
//     for (var food of staple) {
//         if (food > x) break;
//         if (food + drinks[last] <= x) ans += (last + 1); 
//         else {
//             while (last > 0) {
//               last--;
//               if (food + drinks[last] <= x) {
//                   ans += (last + 1);
//                   break;
//               }
//             }
//         }
//         if (last < 0) break;
//     }   
//     return ans % 1000000007;
// };