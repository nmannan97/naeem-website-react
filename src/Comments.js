import React from "react";
import { useState } from "react";

import "./comments.css"

export default function Comments(){
    
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [counter, setCounter] = useState(0);
    
    function commentSection(){
        let returnHtml = '<ul id="comments_section">';
        for(var index= 0;index<comments.length;index++){
            returnHtml += "<li><p className='comments_comments'>"
            returnHtml += comments[index]
            returnHtml += "</p></li>"
        }
        returnHtml += '</ul>'
        

        document.getElementById('comments_container_sub').innerHTML = returnHtml
    }
    function commentCapture(Comment)
    {
        setComment(Comment)
        console.log(comment)
    }
    function commentEnter(){
        comments.push(comment)
        setCounter(counter + 1)
        setComments(comments)
        setComment("")
        commentSection()
        console.log(counter)
        console.log(comments)
        
    }
    return(
        <>
            <div id="comments">
                <div id="comments_conatiner_main">
                    <input id="comments_entry" type="text" onChange={(e) => commentCapture(e.target.value)}/>
                    <button id='comments_enter' onClick={(e) => commentEnter()}>Press me to enter a comment</button>
                </div>
                <div id="comments_container_sub">
                </div>
            </div>
        </>
    )
}