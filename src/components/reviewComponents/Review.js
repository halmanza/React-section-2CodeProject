
import React from 'react'
import Stars from '../Stars';
//sub component of Movie, text review from a user
const Review = ({userName, userReview,userCount}) => {
   
    return (
        <div className="review">
            {userName}
            <p>{userReview}</p>
            <Stars count={userCount}/>
        </div>
    )
}

export default Review;
