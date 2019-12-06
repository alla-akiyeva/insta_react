import React, { Component } from 'react';
import InstaService from '../services/instaService';
import User from '../components/User';
import ErrorMessage from './Error';

export default class Posts extends Component{
    InstaService = new InstaService(); //чтобы этот класс вызвать,  используем оператор new
    state = {
        posts: [],
        error: false
    }
    
    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded) 
        .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        //this.state.posts = posts; // это грубая ошибка, нельзя напрямую обращаться к стейту
        this.setState({
            posts,
            error: false
        })
        console.log(this.state.posts);
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map( item => { //метод перебора массивов .map(). Этот метод видоизменяет массив. Look up definition of callback functions
            const {name, altname, photo, src, alt, descr, id} = item; //деструктуризация в ES6. Unrelated: Json-server запускает json файл в виде локального сервера. 
            return (
                <div className="post" key={id}>
                    <User   
                        src={photo} 
                        alt={altname} 
                        name={name}
                        min
                    />
                    <img src={src} alt={alt}></img>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr}
                    </div>
                </div>
            )
        });
    }

    render() {
        const {error, posts} =this.state;

        if (error) {
            return <ErrorMessage />
        }

        const items = this.renderItems(posts);
        return (
            <div className="left">
                {items}
            </div>
        )
    }
}