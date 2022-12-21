import { React, useState, useEffect } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';


function CreatePost({ isAuth }) {
    // States
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    // Takes in the database we setup in the config and the collection in order to make a reference
    const postsCollectionRef = collection(db, 'posts');
    let navigate = useNavigate();

    // Submit data to Firestore for storing
    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title, 
            postText, 
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
        });
        navigate('/');
    };

    // Called immediately when rendering CreatePost component
    useEffect(() => {
        // Checks user if they are authenticated, if not, then redirected to Login
        if (!isAuth) {
            navigate('/login')
        }

        console.log('Create Post Inefficiency')
    }, [])


    return (
        <div className='createPostPage'>
            <div className='createPostContainer'>
                <h1>Create a Post</h1>
                <div className='inputGroup'>
                    <label>Title:</label>
                    {/* Takes the value of the input whenever there is a change to the state of setTitle */}
                    <input placeholder='Title...' onChange={(e) => {
                        setTitle(e.target.value);
                        }} />
                </div>
                <div className='inputGroup'>
                    <label>Post:</label>
                    <textarea placeholder='Post...' onChange={(e) => {
                        setPostText(e.target.value);
                    }}/>
                </div>
                <button onClick={createPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost