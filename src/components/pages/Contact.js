import React from 'react';

function Contact(){
    return(
        <React.Fragment>
            <h1 style={bodyStyle}>Contact Us</h1>
            <p style={bodyStyle}>
                You can contact us via email react@gmail.com 
                or call us @ +123456789. Thank you
            </p>
        </React.Fragment>
    )
}

const bodyStyle = {
    margin: '15px'

}

export default Contact;