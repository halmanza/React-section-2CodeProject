import React, { useState, useEffect } from "react";
import Review from "./Review";
//subcomponent of ReviewList container, a form created by the user added to movie
const ReviewForm = () => {
  const [userValues, setUserValues] = useState({
    username: "",
    review: "",
    vote: 0,
  });
  const [submit, setSubmit] = useState(false);
  const [pastReview, setPastReview] = useState([]);

  const preventDefaultAction = (e) => {
    e.preventDefault();
  };

  const handleUserName = (e) => {
    setUserValues({ ...userValues, username: e.target.value });
  };

  const handleUserReview = (e) => {
    setUserValues({ ...userValues, review: e.target.value });
  };
  const handleUserRating = (e) => {
    setUserValues({ ...userValues, vote: e.target.value });
  };

  const reviewSubmit = () => {
    if (
      submit === false &&
      userValues.username.length > 0 &&
      userValues.review.length > 0 &&
      userValues.vote.length > 0
    ) {
      setSubmit(true);
      setPastReview((previtems) => [...previtems, userValues]);
      setUserValues({
        username: "",
        review: "",
        vote: 0,
      });
    }else{
        alert('Please fill out the form and use the slider to rate the movie for submission.')
    }
    setSubmit(false);
  };

  //prints out objecst from pastReviews data array stored in useState
  const testdata = () => {
    if (pastReview.length > 0) {
      return pastReview.map((item, index) => {
        return (
          <div>
            <Review
              userName={item.username}
              userReview={item.review}
              userCount={item.vote}
            />
          </div>
        );
      });
    }
  };

  useEffect(() => {
    // console.log(submit);
    console.log(userValues);
    console.log(pastReview);
  }, [userValues, submit, pastReview]);

  //userReview function to return user component
  return (
    <div className="reviewFormContainer">
      <form onSubmit={preventDefaultAction} className="formStyle">
        <label htmlFor="username">Name</label>
        <input
          type="text"
          name="username"
          value={userValues.username}
          onChange={handleUserName}
          id="usernameVal"
          required
        />
        <label htmlFor="userReview">Enter your Review</label>
        <input
          type="textarea"
          name="userReview"
          value={userValues.review}
          onChange={handleUserReview}
          id="userReviewVal"
          required
        />
        <button onClick={reviewSubmit}>Submit Review</button>
        <label htmlFor="vote">Rating</label>
        <input
          type="range"
          name="rating"
          min="0"
          max="5"
          onChange={handleUserRating}
          required
        />
      </form>
      <div style={{ margin: ".5rem" }}>{testdata()}</div>
    </div>
  );
};

export default ReviewForm;
