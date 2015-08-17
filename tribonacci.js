function tribonacci(signature,n){

  if(n === 0){ return [] }
  if(n === 1){ return  signature[0]}
  if(n === 2){return signature[0], signature[1]}
  
  
  } else {
  for(var i = 0; i < (n-3); i++){
    
  var a = signature[i] + signature[i+1] + signature[i+2];
  
  signature.push(a);

    
    
  }
  }
  return signature;
}


/*Best practice

function tribonacci(signature, n) {
  var res = signature.slice(), sum = function(x, y) {return x + y;};
  for(var i = 0; i < n - 3; i++) res.push(res.slice(-3).reduce(sum));
  return res.slice(0, n);
}*/