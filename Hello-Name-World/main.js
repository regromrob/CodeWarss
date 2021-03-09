function hello(name) {
    if(name === '' || name === undefined){
      return 'Hello, World!'
    }else{
      name = name.toLowerCase()  
      return `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!`
    }
    
  }