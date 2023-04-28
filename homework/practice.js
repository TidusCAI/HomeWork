function PPDI() {
    let x;
    let y;
    let z;
    for (let sum = 100; sum < 1000; sum++) {
      x = Math.floor(sum / 100);
      y = Math.floor(sum / 10) % 10;//如果只是处以就没用
      z = sum % 10;
      if (Math.pow(x, 3) + Math.pow(y, 3) + Math.pow(z, 3) == sum) {
        console.log(sum);
      }
    }
  }
  
  PPDI();
  
  
  
  
  
  
  




