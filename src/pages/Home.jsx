import React, { useState } from 'react';
import { Box } from '@mui/system';
import Exercises from '../components/Exercises';
import Banner from '../components/Banner';
import Search from '../components/Search';

const Home = () => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([]);
  return (
    <Box>
        <Banner />
        <Search 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        />
        <Exercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
        />
    </Box>
  )
}

export default Home