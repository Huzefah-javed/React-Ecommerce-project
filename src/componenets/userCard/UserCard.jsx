import { useEffect, useRef, useState } from 'react';
import './UserCard.css';

const UserCard = () => {

  const [users, setUsers] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

  const fetchUsersData = async () => {
    setLoading(true);
    try {
      const responseUsers = await fetch("https://fakestoreapi.com/users");

      if (!responseUsers.ok) {
        throw new Error('Network response was not ok');
      }
      const usersData = await responseUsers.json();
           setUsers(usersData)  
    } catch (err) {
     return setError(err.message);
    } finally {
     return setLoading(false); 
    }
  };

  
  
  

  useEffect(()=>{
  fetchUsersData()
},[])





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
      left:  -reviewsRef.current.clientWidth,
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
  if (error) return <p>Error: {error}</p>;



  return (
    <>
    <ul className="reviews" id="reviews" ref={reviewsRef}>

      {loading? (
       <div className="loader-user-card">
        <div className="loader-name"></div>
        <div className="loader-user-name"></div>
        <div className="loader-user-name"></div>
        <div className="loader-user-email"></div>
        <div className="loader-user-msg"></div>
       </div>
      ): users.map((user) => (
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
      ))}
    </ul>
    <div className="btns">

    <button onClick={handleScrollRight}>←</button>
    <button onClick={handleScrollLeft}>→</button>
    </div>
    </>
  );
};

export default UserCard;
