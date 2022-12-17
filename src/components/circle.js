var Shape = require('./Shape'); 
  
 // declare class 
 class Circle extends Shape{ 
     constructor(name){ 
         super(name); 
  
     } 
  
     calculateArea(radius){ 
         return Math.PI * Math.pow(radius,2); 
     } 
      
 } 
  
 module.exports=Circle; 