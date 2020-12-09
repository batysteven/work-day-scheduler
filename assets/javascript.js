var tasks = {};

var createTask = function(taskText) {
    var taskP = $("<p>").text(taskText).addClass("workdayTask");

    // append p text on the page
    $("workdayTask" + taskP).append(taskP);
};

//load task from localStorage
var loadTasks= function() {
    task = JSON.parse(localStorage.getItem("tasks"));

    //if nothing in localStorage, create new object to track all task
    if (!task) {
        task = {
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
    $.each(tasks, function(list, arr) {
        // then loop over sub-array
        arr.forEach(function(task) {
            createTask(tasks.text, list);
        });
    });
};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(task));
};

//workdayTask text was clicked
$(".workdayTask").on("click", "p", function() {
    //get current text of p element
    var text = $(this).text().trim();

    //replace p element with new text
    var textInput = $("<textarea>").val(text);
    $(this).replaceWith(textInput);

    textInput.trigger("focus");
});

//editable field was un-focused
$(".workdayTask").on("blur", "textarea", function() {
    //get current value of p
    var text = $(this).val();

    //update task in array and re-save to localStorage
    tasks.text = text;
    saveTasks();

    //recreate p element
    var taskP = $("<p>").text(text);

    //replace text with new text
    $(this).replaceWith(taskP);
});

//load tasks for the first time
loadTasks();