/*Task

You are given a string s. It's an equation such as "a+b=c", where a, b, c are numbers made up of the digits 0 to 9. This includes possible leading or trailing zeros. The equations will not contain any spaces.

Your task is to judge whether s is an valid Turing equation. Return true or false, respectively, in Turing's interpretation, i.e. the numbers being read backwards.

Still not understand the task? Look at the following example ;-)

Example

For s = "73+42=16", the output should be true.

73 -> 37
42 -> 24
61 -> 61
37+24==61
For s = "5+8=13", the output should be false.

5 -> 5
8 -> 8
13 -> 31
5+8!=31
For s = "10+20=30", the output should be true.

10 -> 01 -> 1
20 -> 02 -> 2
30 -> 03 -> 3
1+2==3
Note

All the numbers a,b,c no more than 10 digits, excluding leading zeros(read backwards)
s contains only digits, "+" and "=", "-","*" or "/" will not appear in the string.
Happy Coding ^_^*/


function isTuringEquation(s){
  //coding and coding..
  var nums = [];
  //добавим числа в массив
  nums.push(s.slice(0,s.indexOf("+")));
  nums.push(s.slice(s.indexOf("+")+1,s.indexOf("=")));
  nums.push(s.slice(s.indexOf("=")+1));
  // перевернем значения
  nums = nums.map(function(item,i){
  	item = item.split("");
  	item = item.reverse();
  	item = item.join("");
  	item = +(item);
  	return item;
  	// return reverce().join("")
  })

  if(nums[0] + nums[1] == nums[2]){return true};
  return false;

  // return nums;
  
}

console.log("--------------ANSWERS--------------")
console.log(isTuringEquation("0001000+000200=00030"))//,true)
console.log(isTuringEquation("5+8=13"))//,false)