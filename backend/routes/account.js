
const express = require("express");



 // controller fonction 
 const {
  GenererRapport,
   getWorkouts, 
   getWorkout, 
   createWorkout, 
   deleteWorkout, 
   updateWorkout,
 
 } = require('../controllers/accountcontroller')
 
  const {signupUser, loginUser,sendMail,chatt, chatget, forgott} = require ('../controllers/accountcontroller')

const router = express.Router();

//route pour la connection
   router.post("/login", loginUser);
   router.post("/signup", signupUser);
   router.post("/chat",chatt);

   router.get("/chat",chatget);
router.post("/forgot",forgott);
 
 




// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)



// POST a new workout
router.post('/creation', createWorkout)
router.post('/generate', GenererRapport)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router
   



// route pour l'authentification

 module.exports = router


