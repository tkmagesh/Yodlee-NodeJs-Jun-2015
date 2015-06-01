function add(x,y,onResult){
   setTimeout(function(){
      console.log("returning result");
      if (x && y){
            var result = x + y;
            if (typeof onResult === "function"){
                onResult(null, result);
            return;
       }
       onResult(new Error("Invalid arguments"), null);
    },3000);
}

function addClient(x,y){
   console.log("Invoking add");
   var result= add(x,y, function(err, result){
      if (!err){
        console.log("result = ", result);
      } else {
        console.log(err);
      }
      console.log("job done");
  });

}
