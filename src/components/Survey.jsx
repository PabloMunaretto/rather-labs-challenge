import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from '../app/App'

const Survey = ({ Quiz }) => {
    const { column, spacing } = useStyles();

  console.log("Quiz", Quiz)

  // LOGICA BOTON EN LUGAR DE PREGUNTAS
  
    return (
        <div className={`${spacing} ${column}`}>
            <Typography variant="h3">{ Quiz.title }</Typography>
            <img src={Quiz.image} />

        </div>
    )
}

export default Survey
