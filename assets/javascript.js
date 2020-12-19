var tasks = {};

var createTask = function(taskKey, taskValue) {

    let p = document.createElement("p");

    $(`#${taskKey}`).text(taskValue).append(p);
    //console.log(taskValue);

    //var parent = document.createElement("div");
    //var newP = document.createElement("p");
    //parent.appendChild(newP);
    // var taskText = taskValue;
    // var newP = $("<p>").val(taskText);
    // console.log(taskText);
    // $(".workdayTask").remove();
    // console.log(taskText);
    // $(p).replace(newP);
};

//load task from localStorage
var loadTasks= function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    //if nothing in localStorage, create new object to track all task
    if (!tasks) {
        tasks = {
            nineTasks: "",
            tenTasks: "",
            elevenTasks: "",
            twelveTasks: "",
            oneTasks: "",
            twoTasks: "",
            threeTasks: "",
            fourTasks: "",
            fiveTasks: ""
        };
    }

    for (const task in tasks) {
        createTask(task, tasks[task]);
    };
};


var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//editable field was un-focused
$(".workdayTask").on("blur", "textarea", function() {
    //get current value of textarea
    var text = $(this).val();
    
    // trim down list's ID to match object property
    var arrName = $(this).parents('div').attr('id');
    // update array on tasks object and save
    tasks[arrName] = text;
    
    saveTasks();

    //recreate p element
    var taskP = $("<p>").text(text);

    //replace text with new text
    $(this).replaceWith(taskP);
    
});

//p element child of workdayTask clicked
$(".workdayTask").on("click", "p", function() {
    //get current text of p element
    var text = $(this).text().trim();
    
    //replace p element with new text
    var textInput = $("<textarea>").addClass("col-md-10").val(text);
    $(this).replaceWith(textInput);
    
    textInput.trigger("focus");
});  

//load tasks for the first time
loadTasks();