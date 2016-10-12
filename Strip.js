/*
 * @Author: KikyoMiao
 * @Date:   2016-09-19
 * @Description: 
 * Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any  * 
 * whitespace at the end of the line should also be stripped out.
 * 
 * Example:
 * 
 * Given an input string of:
 * 
 * apples, pears # and bananas
 * grapes
 * bananas !apples
 * The output expected would be:
 * 
 * apples, pears
 * grapes
 * bananas
 * The code would be called like so:
 * 
 * var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
 * result should == "apples, pears\ngrapes\nbananas"
 * 
 * @best solution:
 * function solution(input, markers){
 *   return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
 * }
 *  (ฅ>ω<*ฅ)跟最佳答案差不多嘛～ 哼唧～
 */
export default function solution(input,markers){
    var arg = markers.join('');
    var reg = '\\s?['+arg+'](.+)';
    return input.replace(RegExp(reg,'g'),'');
}