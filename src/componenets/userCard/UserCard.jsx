import { useEffect, useRef, useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import './UserCard.css';
import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '../../api/dataApi';

const UserCard = () => {


 const {data , isLoading, isError, error} = useQuery({
        queryKey: ['users'],
        queryFn: getAllUsers
 })



  const reviewsRef = useRef(null)

   const handleScrollLeft =()=> {
    reviewsRef.current.scrollBy({
      left:  reviewsRef.current.scrollWidth / 10 ,
      behavior: 'smooth',
    })
    // console.log(reviewsRef.current.scrollWidth);
  }
  const handleScrollRight =()=> {
    reviewsRef.current.scrollBy({
      left:  -reviewsRef.current.scrollWidth / 10,
      behavior: 'smooth',
    })
    // console.log(reviewsRef.current.clientWidth);
  }



  useEffect(()=>{
   let intervalId = setInterval(() => {
    const remainingScroll = reviewsRef.current.clientWidth + reviewsRef.current.scrollLeft + 32
    if (remainingScroll.toFixed(0) >= reviewsRef.current.scrollWidth) {
      reviewsRef.current.scrollTo({
        left: 0,
      })
    }else{
      handleScrollLeft()
    }
    }, 3000);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }
  },[])

  // if (loading) {
  //   return(
  //  <div className="loading-container">
  //  <div className="loader"></div>
  //  <p className="loading-text">Loading, please wait...</p>
  //  </div>
  //  )}



  return (
    <>
    <ul className="reviews" id="reviews" ref={reviewsRef}>

      {isLoading?  (  <>
        {[...Array(7)].map(()=> (
          <div className="loader-user-card">
          <div className="loader-name"></div>
          <div className="loader-user-name"></div>
          <div className="loader-user-email"></div>
          <div className="loader-user-msg"></div>
          </div>
        ))}
        </>)
      :!isError? data?.map((user) => (
        <li className="user-card" key={user.id}>
          <h2 className="user-card__name">
            {user.name.firstname} {user.name.lastname}
          </h2>
          <p className="user-card__info">
            <strong>Username:</strong> {user.username}
          </p>
          <p className="user-card__info">
            <strong>Email:</strong> {user.email}
          </p>
          <div className="user-card__review">
           <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, corrupti tenetur? Ex deserunt eius sint architecto consectetur nobis nulla! Debitis, ducimus sunt velit consequatur nemo repudiandae minima voluptatibus quos tempora"</p>
          </div>
        </li>
      )):(<div className="error-main">
        <p>Error: {error}</p>
        <p>or Internet problem</p>

        </div>)}
    </ul>
    <div className="btns">

    <button onClick={handleScrollRight}><FaArrowLeftLong /></button>
    <button onClick={handleScrollLeft}><FaArrowRightLong /></button>
    </div>
    </>
  );
};

export default UserCard;
