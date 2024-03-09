import { render } from "@testing-library/react";
import axios, { Axios } from "axios";
import React, { Component } from "react";
import { API_URL } from "./constants";
import { useState } from "react";

import "./comments.css"

export default function Comments(){
    
    
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [counter, setCounter] = useState(0);
    const [state, setState] = useState({
        activeItem: {
            id: 1,
            name: "",
            comment: "",
        },
    })
    
    const componentDidMount = e =>{
        try{
            e.preventDefault()
            axios.put(API_URL + state.activeItem.id, state)
            comments.push(state)
            setComments(comments)
            console.log(comments)
            
            //const item = await myJson
            //for(var index = 0; index<item.comment.length; index++){
            //    comments.push(item.comment[index])
            //}
        }
        catch (error){
            console.log(error)
        }
        
    } 
      

    //Backend submitting and retreval
    const handleSubmit = (item) => {
        axios.post(API_URL, item)
        .then((response) => {
          console.log(response);
          setState({activeItem: {id:state.id+1, name: "", comment: ""}})
        })
        .catch((error) => {
          console.log("Problem submitting New Post", error);
        });
    }

    let renderItems = () => {

        let returnHtml;
        for(var index= 0;index<comments.length;index++){
            const currentComment = comments[index]
            returnHtml += "<p className='comments_comments'>" + currentComment + '</p>'
        }
        return returnHtml
    }
    //End of backend stuffs
    /*
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
    */
    function commentCapture(Comment)
    {
        setComment(Comment)
        console.log(comment)
    }
    function commentEnter(){
        comments.push(comment)
        const item = {name: comment, comment: comment}
        setState({activeItem:item})
        setCounter(counter + 1)
        setComments(comments)
        setComment("")
        
        console.log(counter)
        console.log(comments)
        
    }
    return(
        <>
            {componentDidMount()}
            <div id="comments">
                <div id="comments_conatiner_main">
                    <input id="comments_entry" type="text" onChange={(e) => {commentCapture(e.target.value)}}/>
                    <button id='comments_enter' onClick={(e) => {commentEnter(); handleSubmit(state.activeItem)}}>Press me to enter a comment</button>
                </div>
                
                <div id='comments_container_sub' >
                    {state.name}
                    {state.comment}
                    <div dangerouslySetInnerHTML={{ __html: renderItems() }} />
                </div>
            </div>
        </>
    )
}