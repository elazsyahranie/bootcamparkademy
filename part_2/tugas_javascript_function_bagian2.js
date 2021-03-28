  const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
  ];

  function temukanNama(namaProperty) {
    var a = name.filter(function(el) {
      return el.toLowerCase().indexOf(namaProperty.toLowerCase()) > -1; 
    })
    a.forEach(function(c) {
      console.log(c);
    });
  }

  temukanNama("an");
  
  // var name_lower = name.map(item => item.toLowerCase());
  // console.log(name_lower);
