const biodata = {
  firstName: 'Bagus', 
  lastName: 'Tri', 
  fullName: function () {
    const setName = this.firstName + this.lastName; 
    return setName;
  },
};

console.log(biodata.fullName());