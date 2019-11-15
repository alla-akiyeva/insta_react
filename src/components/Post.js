import React, { Component } from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                    src="https://i.pinimg.com/236x/a9/ef/fa/a9effa4e2bad2e03bb8dbdf9405a94d1.jpg" 
                    alt="profile" 
                    name="David"
                    min
                />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    Etiam blandit quam sed consequat volutpat. Suspendisse eu augue placerat, tristique lacus vel, condimentum urna. Donec vitae arcu dictum, scelerisque magna quis, posuere lorem. Nulla dictum eros id molestie semper. Maecenas sed pharetra felis, at tristique urna
                </div>
            </div>
        )
    }
}