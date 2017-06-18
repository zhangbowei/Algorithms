function bubbleSort(input){
  var i, j, temp, flag;
  for(i = 0; i < input.length - 1; i++){
    flag = true;
    for(j = 0; j < input.length - i; j++){
      if(input[j] > input[j + 1]){
        temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
        flag = false;
      }
    }
    if(flag) break;
  }
  return input;
}
