var tasks = {};

var createTask = function(taskKey, taskValue) {
    //finds ID and replaces current P element with new p element with taskValue
    $(`#${taskKey}>p`).replaceWith("<p>" + taskValue + "</p>");
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

var currentTime = function() {
    var now = moment().format('dddd MMM Do, YYYY');
    $('#currentDay').append(now);
};

var setTimes = function() {
    //9 AM
    var nineOClock = moment().hour(9);
    var timeNow = moment();
    let a = nineOClock.diff(timeNow, 'hours');
    if (a > 0) {
        $("#nineTask").addClass("current");
    }
    if (a === 0) {
        $("#nineTask").addClass("present");
    }
    if (a < 0) {
        $("#nineTask").addClass("past-due");
    }

    //10 AM
    var tenOClock = moment().hour(10);
    let b = tenOClock.diff(timeNow, 'hours');
    if (b > 0) {
        $("#tenTask").addClass("current");
    }
    if (b === 0) {
        $("#tenTask").addClass("present");
    }
    if (b < 0) {
        $("#tenTask").addClass("past-due");
    }

    //11 AM
    var elevenOClock = moment().hour(11);
    let c = elevenOClock.diff(timeNow, 'hours');
    if (c > 0) {
        $("#elevenTask").addClass("current");
    }
    if (c === 0) {
        $("#elevenTask").addClass("present");
    }
    if (c < 0) {
        $("#elevenTask").addClass("past-due");
    }

    //12 PM
    var twelveOClock = moment().hour(12);
    let d = twelveOClock.diff(timeNow, 'hours');
    if (d > 0) {
        $("#twelveTask").addClass("current");
    }
    if (d === 0) {
        $("#twelveTask").addClass("present");
    }
    if (d < 0) {
        $("#twelveTask").addClass("past-due");
    }

    //1 PM
    var oneOClock = moment().hour(13);
    let e = oneOClock.diff(timeNow, 'hours');
    if (e > 0) {
        $("#oneTask").addClass("current");
    }
    if (e === 0) {
        $("#oneTask").addClass("present");
    }
    if (e < 0) {
        $("#oneTask").addClass("past-due");
    }

    //2 PM
    var twoOClock = moment().hour(14);
    let f = twoOClock.diff(timeNow, 'hours');
    if (f > 0) {
        $("#twoTask").addClass("current");
    }
    if (f === 0) {
        $("#twoTask").addClass("present");
    }
    if (f < 0) {
        $("#twoTask").addClass("past-due");
    }

    //3 PM
    var threeOClock = moment().hour(15);
    let g = threeOClock.diff(timeNow, 'hours');
    if (g > 0) {
        $("#threeTask").addClass("current");
    }
    if (g === 0) {
        $("#threeTask").addClass("present");
    }
    if (g < 0) {
        $("#threeTask").addClass("past-due");
    }

    //4 PM
    var fourOClock = moment().hour(16);
    let h = fourOClock.diff(timeNow, 'hours');
    if (h > 0) {
        $("#fourTask").addClass("current");
    }
    if (h === 0) {
        $("#fourTask").addClass("present");
    }
    if (h < 0) {
        $("#fourTask").addClass("past-due");
    }

    //5 PM
    var fiveOClock = moment().hour(17);
    let i = fiveOClock.diff(timeNow, 'hours');
    if (i > 0) {
        $("#fiveTask").addClass("current");
    }
    if (i === 0) {
        $("#fiveTask").addClass("present");
    }
    if (i < 0) {
        $("#fiveTask").addClass("past-due");
    }
};

//load tasks for the first time
loadTasks();
currentTime();
setTimes();

//Get references to the .saveBtn
var saveButton = document.querySelector(".saveBtn");

//Add event listener to save button
saveButton.addEventListener("click", saveTasks);