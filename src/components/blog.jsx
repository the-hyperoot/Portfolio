import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiCloseLine } from "react-icons/ri";

export default function Experience() {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(
                "https://blog.hyperoot.live/wp-json/wp/v2/posts"
            );
            setPosts(res.data);
        };

        fetchPosts();
    }, []);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    return (
        <>
            <section>
                <div className="container">
                    <div>
                        <div className="posts-container">
                            {posts.map((post) => (
                                <div
                                    key={post.id}
                                    className="card"
                                    onClick={() => handlePostClick(post)}
                                >
                                    <h2>{post.title.rendered}</h2>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {selectedPost && (
                <div className="modal">
                    <div className="close" onClick={handleCloseModal}>
                        <button className="nav-button">
                            <RiCloseLine className="nav-icon" />
                        </button>
                    </div>
                    <div className="modal-content">
                        <h2>{selectedPost.title.rendered}</h2>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: selectedPost.content.rendered,
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
