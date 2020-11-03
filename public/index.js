$(document).ready(function(){
    console.log("Loaded!");

    $(".exerciseEdit form").on("submit", (event)=>{
        event.preventDefault();
        switch($("#selectExerciseType").val()){
            case "cardio":
                $.post("/api/exercises/cardio", cardioObject, (err, data)=>{
                    if(err) throw err;
                    console.log(data);
                })
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