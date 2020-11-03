$(document).ready(function(){
    console.log("Loaded!");

    $(".exerciseAdd form").on("submit", (event)=>{
        event.preventDefault();
        switch($("#selectExerciseType").val()){
            case "cardio":
                let cardioObject = {
                    name: $("#inputExerciseName").val(),
                    duration: parseFloat($("#inputDuration").val()),
                    distance: parseFloat($("#inputDistance").val())
                }
                $.post("/api/exercises/cardio", cardioObject).then(data=>{
                    console.log(data);
                }).catch(err=>{
                    console.error(err);
                })
                break;
            case "strength":
                let strengthObject = {
                    name: $("#inputExerciseName").val(),
                    duration: parseFloat($("#inputDuration").val()),
                    distance: parseFloat($("#inputWeight").val()),
                    sets: parseInt($("#inputSets").val()),
                    reps: parseInt($("#inputReps").val())
                }
                $.post("/api/exercises/strength", strengthObject).then(data=>{
                    console.log(data);
                }).catch(err=>{
                    console.error(err);
                })
                break;
        }
    })

    $("#selectExerciseType").on("change", (event)=>{
        switch($(event.target).val()){
            case "cardio":
                $(".strengthInputs").hide();
                $(".cardioInputs").show();
                break;
            case "strength":
                $(".cardioInputs").hide();
                $(".strengthInputs").show();
                break;
        }
    })

    $(".strengthInputs").hide();
})