import { Button } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import {useNavigate} from "react-router-dom"


const Createnote = (props) => {
    const [expand,setExpand] = useState(false)
    const navigate = useNavigate()
    const [note,setnote] = useState({
        title:"",
        content: "",
    })
    const InputEvent = (e) => {   
        const {name , value} = e.target
        setnote((prev) => {
            return {
                ...prev,
                [name] : value,
            }
        })
    }
    const addEvent = () => {
        // Make an API POST request to add the note data
        axios.post('http://localhost:5000/', note)
            .then(response => {
                console.log('Note added successfully:', response.data);
                // Assuming the response.data contains the added note data, you can use it here if needed.
                props.fetchData() ;
                navigate("/")
            })
            .catch(error => console.error('Error adding note:', error));

        // Reset the note state after adding
        setnote({
            title: "",
            content: "",
        })
    };

    const expandIt = () => {
        setExpand(true)
    };
    const expandOff = () => {
        setExpand(false)
    };
    return (
        <>
            <div className='main_note' onDoubleClick={expandOff}>
                <form>
                    {expand ? 
                    <input
                        type="text"
                        name="title"
                        value={note.title}
                        onChange={InputEvent}
                        placeholder='Title'
                        autoComplete='off'
                        required /> : null }
                    <textarea
                        rows=""
                        column=""
                        name="content"
                        value={note.content}
                        onChange={InputEvent}
                        onClick={expandIt}
                        placeholder="enter a message"
                        required >
                    </textarea>
                    {expand ? 
                    <Button type='submit' onClick={addEvent} >
                        <AddIcon className='plus_sign' />
                    </Button> : null}
                </form>
            </div>
        </>
    )
}

export default Createnote