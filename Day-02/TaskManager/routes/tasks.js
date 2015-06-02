var express = require('express');
var router = express.Router();

var tasks = [
    {id : 1, name : "Watch a movie", isClosed : false},
    {id : 2, name : "Fix the bug", isClosed : false},
    {id : 3, name : "Create a descrete bug", isClosed : true},
]

router.get('/', function(req, res, next) {
  res.render('tasks/index', { tasks: tasks });
});

router.get('/new', function(req, res, next) {
  res.render('tasks/new');
});


router.post('/new', function(req, res, next) {
  var newId = tasks.length === 0 ? 1 : tasks.reduce(function(result, task){
           return result > task.id ? result : task.id
        },0) + 1
  var newTask = {id : newId, name : req.body.newTask, isClosed : false}
  tasks.push(newTask);
  res.redirect('/tasks');
});

router.get('/toggle', function(req, res, next){
    var task = tasks.filter(function(t){
        return t.id === parseInt(req.query.taskId,10);
    })[0];
    console.log(task);
    if (task) task.isClosed = !task.isClosed;
    res.redirect('/tasks');
});

router.post('/delete', function(req, res, next){
    tasks = tasks.filter(function(task){
        return !task.isClosed;
    });
    res.redirect('/tasks');
});

module.exports = router;
