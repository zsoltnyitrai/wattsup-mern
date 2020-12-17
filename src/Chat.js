import React,{useState} from 'react'
import './Chat.css'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton';

import AttachFile from '@material-ui/icons/AttachFile'
import MoreVert from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import InsertEmoticon  from '@material-ui/icons/InsertEmoticon';
import MicIcon  from '@material-ui/icons/Mic';

function Chat() {
    const [input,setInput]=useState('')
    const sendMessage=()=>{
        console.log('message')
    }
    return (
        <div className='chat'>
            <div className="chat-header">
                <Avatar/>
                <div className="chat-header-info">
                    <h3>Room name</h3>
                    <p>last seen at...</p>
                </div>

                <div className="chat-header-right">
                    <IconButton>  
                        <SearchOutlined/>
                    </IconButton>  
                    <IconButton>  
                        <AttachFile/>
                    </IconButton>  
                    <IconButton>  
                        <MoreVert/>
                    </IconButton>  
                </div>
            </div>

            <div className="chat-body">
                
                <p className='chat-message'>
                    <span className='chat-name'>Zsolt</span>
                    This is a message   
                    <span className='chat-time-stamp'>{new Date().toUTCString()}</span>
                </p>
                <p className='chat-reciever chat-message'>
                    <span className='chat-name'>Someone else</span>
                    This is a message   
                    <span className='chat-time-stamp'>{new Date().toUTCString()}</span>
                </p>
            </div>

            <div className="chat-footer">
                <InsertEmoticon/>
                <form>
                    <input 
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        placeholder='type a message'
                        type='text'
                    />
                    <button 
                        onClick={sendMessage}
                        type='submit'
                    >
                        Send Message
                    </button>
                </form>
                <MicIcon/>
            </div>

        </div>
    )
}

export default Chat
