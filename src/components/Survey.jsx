import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { useStyles } from '../app/App'
import { useState } from 'react';

const Survey = ({ Quiz }) => {
    const { column, width, spacing, networkButton, radius, quizOptions, imgContainer } = useStyles();
    const [surveyBegin, setSurveyBegin] = useState(false);
    const [surveyEnd, setSurveyEnd] = useState(false);
    const [question, setQuestion] = useState(null);

    console.log("Quiz", Quiz.questions)

    // Iniciar Quiz
    const startSurvey = () => {
        let init = 0, lifeTimeSeconds;
        const length = Quiz.questions.length; 
        console.log(length)
        setSurveyBegin(true);

        setQuestion(Quiz.questions[init])
        lifeTimeSeconds = Quiz.questions[init].lifetimeSeconds * 1000;
        const myInterval = setInterval(() => {
            intervalos()
            console.log("EJECUTADO")
        }, lifeTimeSeconds);

        const intervalos = () => {
            init++;
            if (init === length) { 
                clearInterval(myInterval)
                // setSurveyEnd(true)
                return
            }
            setQuestion(Quiz.questions[init])
            lifeTimeSeconds = Quiz.questions[init].lifetimeSeconds * 1000;
        }

    }
    
    return (
        <div className={`${spacing} ${column}`}>
            <Typography variant="h3">{ Quiz.title }</Typography>

            {
                surveyEnd ?
                <Button className={`${spacing} ${networkButton} ${radius}`}>
                    <Typography variant="h4" className={spacing}>Submit Quiz</Typography>
                </Button>
                :
                surveyBegin && question ?
                <div className={`${column} ${width}`}>

                    <Typography variant="h4" className={spacing}>{question.text}</Typography>
                        <img src={question.image} alt="" className={`${radius} ${imgContainer}`} />

                    <div className={`${quizOptions} ${spacing}`}>
                        {
                            question.options.map((options, i) => (
                                <Button key={i} className={`${spacing} ${networkButton} ${radius}`}>
                                    <Typography variant="h6">{options.text}</Typography>
                                </Button>
                            ))
                        }
                    </div>

                </div>
                :
                <div className={column}>
                    <img src={Quiz.image} />
                    <Button className={`${spacing} ${networkButton} ${radius}`}
                        onClick={() => startSurvey()}
                        >
                        <Typography variant="h6">Comenzar Quiz</Typography>
                    </Button>
                </div>
            }
        </div>
    )
}

export default Survey
