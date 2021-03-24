  const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
  ];

  function temukanNama(namaProperty) {
    return name.filter(function(el) {
        return el.toLowerCase().indexOf(namaProperty.toLowerCase()) > -1; 
    })
  }

  console.log(temukanNama("An").slice(2));

  /*
  var name_lower = name.map(item => item.toLowerCase());
  console.log(name_lower);
*/