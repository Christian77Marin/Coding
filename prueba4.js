const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped);


function wrapping(gifts) {
    let result = [];
    gifts.forEach(element => {
        result.push(
            ("*".repeat(element.length)) + 
            "**\n*"+
            element+
            "*\n**"+
            ("*".repeat(element.length))
        )
        
    })
    return result;
    
  }
  

  /**
   *    ******
   *    *game*
   *    ******
   * 
   */



  