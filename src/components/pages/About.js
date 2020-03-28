import React from 'react';

function About() {
    return(
        <React.Fragment>
            <h1 style={bodyStyle}>About</h1>
            <p style={bodyStyle}>
                This is the Todolist app v1.0.0. 
                It is part of a React Crash course
            </p>

        </React.Fragment>
    )
}

const bodyStyle = {
    margin: '15px'

}

export default About;