

function dirReduc(dir) {
var ns = 0;
var ew = 0;
var answer = [];

for(var i = 0; i < dir.length; i++) {

    switch(dir[i]) {
    
        case "NORTH": 
            ns++ 
            break;
        case "SOUTH": 
            ns-- 
            break;
        case "EAST": 
            ew++ 
            break;
        case "WEST": 
            ew-- 
            break;
        default: 
             
            break;
    
    }
    
    if(ns > 0) {
       while(ns > 0){
       answer.push('NORTH');
       ns --;
       }
   } 
  else if(ns < 0){
      while(ns < 0){
      answer.push('SOUTH');
       ns++;   
      }
  }
 
  if(ew > 0) {
       while(ew > 0){
       answer.push('EAST');
       ew --;
       }
   } 
  else if(ew < 0){
      while(ew < 0){
      answer.push('WEST');
       ew++;   
      }
  }
    
    console.log(answer);

 }
   
   
   
}

