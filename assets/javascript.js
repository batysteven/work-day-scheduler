var tasks = {};

var createTask = function(taskText, taskID) {
    var taskID = $("<id>").addClass("workdayTask");
    var taskP = $("<p>").addClass("m-10").text(taskText);
    console.log(taskID, taskP);
    taskID.append(taskP);

    // append p text on the page
    $("workdayTask" + taskID).append(taskP);
};

//load task from localStorage
var loadTasks= function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    //if nothing in localStorage, create new object to track all task
    if (!tasks) {
        tasks = {
            nineTask: [],
            tenTask: [],
            elevenTask: [],
            twelveTask: [],
            oneTask: [],
            twoTask: [],
            threeTask: [],
            fourTask: [],
            fiveTask: []
        };
    }

    // loop over object properties
    $.each(tasks, function(id) {
        $.each(function(task) {
            createTask(task.text, id);
        });
    });
};

var saveTasks = function() {
    console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//editable field was un-focused
$(".workdayTask").on("blur", "textarea", function() {
    //get current value of textarea
    var text = $(this).val();
    
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
    var textInput = $("<textarea>").val(text);
    $(this).replaceWith(textInput);
    
    textInput.trigger("focus");
});  


//load tasks for the first time
loadTasks();