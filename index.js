var countBits = function(n) {
    var x="";
    let y=0;
    for (let i = n; i > 0; i = Math.trunc(i / 2)) {
       n=i%2;
       x=n+x;
    }
    for (let k=0; k<x.length; k++) {
        if (x[k]==1) {
            y=y+(+x[k]);
        };
} 
      return y;
    }
  let sw=countBits(1234);
   console.log(sw);