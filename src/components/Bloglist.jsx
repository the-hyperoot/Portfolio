import React, { useState, useEffect } from 'react';
// import ReactHtmlParser from 'react-html-parser';
import parse from "html-react-parser";
const Bloglist = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://blog.hyperoot.live/wp-json/wp/v2/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error(error));
    }, []);
    console.log(posts)
    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title.rendered}</h2>
                    {parse(post.excerpt.rendered)}
                </div>
            ))}
        </div>
    );
}

export default Bloglist;