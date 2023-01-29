import React from "react";
import { useState } from "react";

export default function Comments(){
    
    var commentArray = []

    const [comment, setComment] = useState("")

    function comments(){
        commentArray +=  comment
        let returnHTML = <></>
        for(var index = 0; index<commentArray.length; index++){
            returnHTML += <p className="comments_comment">{commentArray[index]}</p>

        }
        return returnHTML
    }
    function commentCapture(){
        comment = document.getElementById("comments_entry")
        setComment(comment)
    }
    return(
        <>
            <div id="comments">
                <button id="comments_enter" onClick={commentCapture()}>Press me to enter a comment</button>
                <div id="comments_conatiner_main">
                    <input id="comments_entry" type="text"/>
                    {comments()}
                </div>
            </div>
        </>
    )
}