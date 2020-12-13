var tasks = {};

var createTask = function(tasks) {
    var text = $(tasks).val();
    //recreate p element
    var newTaskP = $("<p>").replaceWith(text);
    console.log(newTaskP);

    // //replace text with new text
    newTaskP.append();
};

//load task from localStorage
var loadTasks= function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(tasks);
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
        $.each(tasks, function(tasks) {
            createTask(tasks.text);
        });
};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    //console.log(tasks);
};

//editable field was un-focused
$(".workdayTask").on("blur", "textarea", function() {
    //get current value of textarea
    var text = $(this).val();
    console.log(this);
    
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
    var textInput = $("<textarea>").val(text);
    $(this).replaceWith(textInput);
    
    textInput.trigger("focus");
});  


//load tasks for the first time
loadTasks();