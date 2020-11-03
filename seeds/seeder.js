module.exports = function(db){
    db.CardioExercise.create({name: "Skating", distance: 3.2, duration: 25})
        .then(dbCardioExercise=>{
            console.log(dbCardioExercise);
        })
        .catch(({message})=>{
            console.error(message);
        });
    
    db.StrengthExercise.create({name: "Oberhaue", weight: 3.5, sets: 10, reps: 10, duration: 15})
        .then(dbStrengthExercise=>{
            console.log(dbStrengthExercise);
        })
        .catch(({message})=>{
            console.error(message);
        });
}