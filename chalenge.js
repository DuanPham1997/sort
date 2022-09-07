'use strict';
var array = [8,6,7,3,4,1,2];
//thuat toan doi cho truc tiep
function interchangeSort(arr){
  for(let i =  0;i< arr.length;i++){
    for(let j = i+ 1;j < arr.length;j++){
      if(arr[i] > arr[j]){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

//thuat toan sap xep noi bot

function bubbleSort(arr){
for(let i = 0;i< arr.length;i++){
    for(let j = arr.length - 1;j > i;j--){
        if(arr[j] < arr[j-1]){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        } 
    }
}

return arr;
}

//thuat toan sap xep chen truc tiep 

// function interSort(arr){
//   let pos,x;
//   for(let i = 0;i<= arr.length;i++){
//      x=arr[i];
//      while(pos > 0 && x < arr[pos - 1]){
//         let temp = arr[pos];
//         arr[pos] = arr[pos-1];
//         arr[pos-1] = temp;
//         pos--;
//      }
//      arr[pos] = x;
//   }

//   return arr;
// }

//thuat toan sap xep chon truc tiep

// function selectSort(arr){
//   let min;
//   for(let i = 0;i < arr.length;i++){
//      min = i;
//      for(let j = i +1 ;j < arr.length;j++){
//         if(arr[j] < arr[min]){
//           min = j;
//         }
//         if(min != i){
//            let temp = arr[min];
//            arr[min] = arr[i];
//            arr[i] = temp;
//         }
//      }
//   }

//   return arr;
// }

