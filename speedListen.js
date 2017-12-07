function speedListen(audioLength, playSpeed) {
  // 
  let newAudioLength = [];
  var hours,minutes,seconds;
  audioLength = covertTime(audioLength);
  console.log(audioLength);
  audioLength = audioLength/playSpeed;
  hours = (Math.floor(audioLength/1000/60/60));
  audioLength = audioLength - (hours*3600000);

  minutes = Math.floor(audioLength/1000/60); 
  audioLength = audioLength - (minutes*1000*60);

  seconds = (Math.floor(audioLength/1000));
  newAudioLength.push(hours);
  newAudioLength.push(minutes);
  newAudioLength.push(seconds);

  newAudioLength = newAudioLength.map(function(item,i){
  	if(item<=9 || item==0)
  	{
  	item = "0"+item;
  	console.log(item)
  	}
  	return item;
  })
  // console.log( newAudioLength);
  return newAudioLength.join(":");
  
}

	function covertTime(a)
{
   a = a.split(':');

   return (a[0]*60*60*1000)+(a[1]*60*1000)+(a[2]*1000);
}

console.log(speedListen("01:20:00", 1.5))//, "00:15:00");



/* newAudioLength = audioLength.map(function(item,i){
  	if(item != '00'){  		
  	item = +(item);
  	item = ((item*1)/playSpeed);
  	// console.log(item);
  	item = Math.floor(item);
  	}
  	return item;
  })*/