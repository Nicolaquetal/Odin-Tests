function analyzeArray (tab){


    

    const result = {
        average : tab.reduce((sum, val)=>sum+val)/tab.length,
        min : tab.reduce((sum, val)=>Math.min(sum,val)),
        max : tab.reduce((sum, val)=>Math.max(sum,val)),
        length : tab.length,
    }

    return result

}


    
   /* console.log(analyzeArray ([8,1,3,5,8,9,12]))*/
  
  
  module.exports = analyzeArray;