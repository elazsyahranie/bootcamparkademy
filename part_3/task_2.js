const getMonth = (callback) =>{
  setTimeout(()=>{
    let error = false; 
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    if (!error) {
      callback(null, month)
      // getMonth2(null, month)
    }else{
      callback(new Error('Sorry Data Not Found'), [])
    }
  }, 4000)
}

// return function(x) { return (x * x) + adjustment; };

// Callback function
const getMonth2 = (param1, param2) =>{
    if (param1 === false) {
      return console.log('error')
    } else {
      for (var i = 0; i < param2.length; i++){
        console.log(param2[i]);
      }
    }
  }

getMonth(getMonth2);