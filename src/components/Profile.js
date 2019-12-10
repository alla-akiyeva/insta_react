import React from 'react'; //you use { Component } if you declare a class, we don't need it for now.
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User 
                src="https://i.pinimg.com/236x/a9/ef/fa/a9effa4e2bad2e03bb8dbdf9405a94d1.jpg" 
                alt="profile" 
                name="David" 
            />
            <Palette />
        </div>
    )
}

export default Profile;