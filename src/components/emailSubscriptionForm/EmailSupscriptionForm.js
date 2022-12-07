import React, {useState} from 'react';

import Button from '../button/Button';

import './EmailSubscriptionForm.scss';

const EmailSubscriptionForm = (props) =>  {

    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [loader, setLoader] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successfullySubscribed, setSuccessfullySubscribed] = useState(false);

    const submitEmailSubscription = () => {

        console.log(email, firstname)

        // set loader to true
        setLoader(true);

        const requestParams = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname, 
                email
            }) 

        }

        fetch('http://localhost:9000/emailSubscriptions', requestParams)
        .then(response => response.json())
        .then(data => {
            setLoader(false);
            
            if(data.status === 'error'){
                // show error message
                setErrorMessage(data.message);
            } else {
                // replace view with success view
                setSuccessfullySubscribed(true);
            }
            
           
            
        }).catch(err => {
            // set loader to false

            // set an error state
            alert(err.message)
        })

    }

    return (
        <div className="emailSubscriptionForm">
            {successfullySubscribed && <div> You have subscribed </div>}
            {!successfullySubscribed && 
            <>
            <div className="emailSubscriptionForm__title">Join the newsletter!</div>
            {errorMessage && <div className="emailSubscriptionForm__errorMessage">{errorMessage}</div>}
            <p className="emailSubscriptionForm__description">Subscribe to get the latest content by email and to become a fellow pineapple 🍍</p>
            <form>
                <div className="emailSubscriptionForm__formInput">
                    <input 
                        type="text" 
                        placeholder="Your first name"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    ></input>
                </div>
                <div className="emailSubscriptionForm__formInput">
                    <input 
                        type="email" 
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div className="emailSubscriptionForm__buttonContainer">
                    <Button text='Subscribe' loading={loader} onClick={submitEmailSubscription} />
                </div>
            </form>
            </>}
        </div>
    )
}

export default EmailSubscriptionForm;