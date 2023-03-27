// Solution

function A() {
    this.dev1 = 'BFE'
    this.dev2 = 'dev'
    // This return statement voids the constructor 
    // own properties and only returns the object
    // with the new dev1 instead of with dev1 & dev2.
    return {
      dev1: 'bigfrontend'
    }
  }
  
  const a = new A()
  console.log(a.dev1) // 'bigfrontend'
  console.log(a.dev2) // undefined since it doesn't exist
  