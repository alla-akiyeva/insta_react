import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User 
                src="https://i.pinimg.com/236x/a9/ef/fa/a9effa4e2bad2e03bb8dbdf9405a94d1.jpg" 
                alt="profile" 
                name="David"
            />
            <div className="users__block">
            <User 
                src="https://i.pinimg.com/236x/a9/ef/fa/a9effa4e2bad2e03bb8dbdf9405a94d1.jpg" 
                alt="profile" 
                name="David"
                min
            />
            <User 
                src="https://i.pinimg.com/236x/a9/ef/fa/a9effa4e2bad2e03bb8dbdf9405a94d1.jpg" 
                alt="profile" 
                name="David"
                min
            />
            <User 
                src="https://i.pinimg.com/236x/a9/ef/fa/a9effa4e2bad2e03bb8dbdf9405a94d1.jpg" 
                alt="profile" 
                name="David"
                min
            />
            <User 
                src="https://i.pinimg.com/236x/a9/ef/fa/a9effa4e2bad2e03bb8dbdf9405a94d1.jpg" 
                alt="profile" 
                name="David"
                min
            />
            </div>
        </div>
    )
}