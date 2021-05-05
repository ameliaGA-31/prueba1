function makeArrayConsecutive2(statues) {
 var orden= statues;
 let tamaño= orden.length;
 let contador=0;
 let j=1;
 orden.sort (function (a, b) { 
     return a - b;
 });
 console.log(orden);
 //if( i + j == i + j ){
 for (i= orden[0];i<= orden[tamaño -1]; i++){
     if(orden.find(element=> i+ j== element)){
         //array1.find(element => element == 0)
     } else {
         contador= contador + 1;
     }
 }
 return contador -1;
}

