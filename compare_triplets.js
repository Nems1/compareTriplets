'use strict'

function compareTriplets(a, b) {
    
   let ar = []; 
  
   let sumForAlice = 0;
   let sumForBob = 0; 

   let n =a.length = b.length;

   for(let i = 0;i<n; i++) {  
     if (a[i] >= 1 && b[i] <= 100) {
         if(a[i] > b[i ]) {
             sumForAlice += 1;  
         }else if (a[i] < b[i]) {
             sumForBob += 1; 
         } else {
             continue; 
         }
     }
 }

 ar.push(sumForAlice); 

 ar.push(sumForBob);

  return ar;  
}

// Test case 

let a = [5,6,7];
let b = [3,6,19];

// Expected result => [1,1]

console.log(`\n\n\t Result : [${compareTriplets(a,b)}]\n\n`);