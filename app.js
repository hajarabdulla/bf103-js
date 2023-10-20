let text = "--------------*-1+2*3+a+";
const findOperationCount = (string) => {
  let trimedText = string.split("");
  let counter = 0;
  for (let index = 0; index < trimedText.length; index++) {
    if (!isNaN(parseInt(trimedText[index]))) {
      trimedText.splice(0, index);
      break;
    }
  }
  for (let index = trimedText.length - 1; index > 0; index--) {
    if(!isNaN(parseInt(trimedText[index]))){
        trimedText.splice(trimedText.length-1,index)
        break;
    }
  }
  for (let i = 0; i < trimedText.length; i++) {
    if (
      trimedText[i] == "+" ||
      trimedText[i] == "-" ||
      trimedText[i] == "*" ||
      trimedText[i] == "/"
    ) {
      counter++;
    }
  }
  return counter;
};
console.log(findOperationCount(text));
