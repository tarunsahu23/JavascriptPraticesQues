//---------------------sorting in ascending order-----------------

const arr = [4,5,6,7,1,2,3,4];
 for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i + 1 ; j++) {
        if (arr[j]>arr[j+1]) {
            let temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1] =temp;
        }
    }
}
    console.log("Array Element in ascending order :");
    for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);       
    }
    
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //       if (arr[i] < arr[j]) {
    //         // Swap elements if they are in the wrong order
    //         let temp = arr[i];
    //         arr[i] = arr[j];
    //         arr[j] = temp;
    //       }
    //     }
    //   }
      