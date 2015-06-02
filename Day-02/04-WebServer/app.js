
var actions = [];
module.exports = {
    use : function(action){
        actions.push(action);
    },
    run : function(){
        return function(req, res){
            function run(fns){
                var first = fns[0],
                    remaining = fns.slice(1);
                if (first){
                    first(req, res, function(){
                        run(remaining);
                    });
                }
            }
            run(actions);
        }
    }
}







