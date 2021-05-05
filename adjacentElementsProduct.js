function adjacentElementsProduct(inputArray) {
       var producto;
       let productolist= [];
    for(i=0;i<inputArray.length;i++){
        if(inputArray[i+1]== undefined) {
            
        } else {
            producto= inputArray[i] * inputArray[i+1];
            productolist.push(producto);       
        }
    }
    var max = Math.max.apply(null, productolist);
    console.log(productolist, max);
    //Math.max.apply(null, max); 
  return max;
}
