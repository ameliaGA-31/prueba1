function shapeArea(n) {
 var area = 1;
 for (i=1; i<=n; i++) {
    area= 4*(i-1) + area;
 }
 return area;
}
