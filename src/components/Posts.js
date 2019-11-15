import React, { Component } from 'react';
import InstaService from '../services/instaService';
// import Post from './Post';

export default class Posts extends Component{
    InstaService = new InstaService(); //чтобы этот класс вызвать,  используем оператор new
    state = {
        posts: [],
        error: false
    }
    
    updatePosts() {
        this.InstaService.getAllPosts()
        .then()
        .catch();
    }

    onPostsLoaded = (posts) => {
        //this.state.posts = posts; // это грубая ошибка, нельзя напрямую обращаться к стейту
    }

    render() {
        return (
            <div className="left">
                {/* <Post src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="inst"/>
                <Post src="https://sadanduseless.b-cdn.net/wp-content/uploads/2018/01/rabbit1.jpg" alt="second" /> */}


            </div>
        )
    }
}