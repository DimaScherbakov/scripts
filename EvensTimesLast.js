function evenLast(numbers) {
  
	var lastIndex = numbers.length-1;
	var sum = 0;
	numbers.forEach(function(item,i){
		// console.log(i%2)
		if(i==lastIndex && i%2==0){
			sum = sum+item;
			sum= sum*item;
		}
		else if (i== lastIndex) {
			sum = sum*item;
		}
		else if (i%2==0 || i==0){
			// console.log(item);
			sum = sum+item;
		}
	})
return "this is sum at the end: "+sum;
}

console.log(evenLast([2, 3, 4, 5])); // 30)