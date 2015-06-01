function add(x,y,onResult){
   setTimeout(function(){
      console.log("returning result");
      if (!x || !y) throw new Error("Invalid arguments");
      var result = x + y;
      if (typeof onResult === "function")
         onResult(result);
    },3000);
}

function addClient(x,y){
   console.log("Invoking add");
   try {
      var result= add(x,y, function(result){
          console.log("result = ", result);
          console.log("job done");
      });
   } catch (e){
      console.log(e);
   }
}
