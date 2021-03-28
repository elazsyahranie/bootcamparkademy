  const printSegitiga = 6;
  let n = "";
  for (var i = 1; i <= printSegitiga; i++) {
    for(var k = 1; k <= printSegitiga - i + 1; k++){
      n += k + " ";
    }
  n +="\n"
  }
  if (typeof printSegitiga === "number") {
    console.log(n);
  } else {
    console.log("Data harus number!")
  }