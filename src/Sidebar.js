import React from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat'

import DonutLargeOutlined from '@material-ui/icons/DonutLargeOutlined'
import IconButton from '@material-ui/core/IconButton';
import MoreVert from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import Avatar from '@material-ui/core/Avatar';
import  SearchOutlined  from '@material-ui/icons/SearchOutlined';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-header">
                <Avatar />
                <div className="sidebar-header-right">
                    <IconButton>  
                        <DonutLargeOutlined/>
                    </IconButton>  
                    <IconButton>  
                        <ChatIcon/>
                    </IconButton>  
                    <IconButton>  
                        <MoreVert/>
                    </IconButton>  
                </div>
            </div> 

            <div className="sidebar-search">
                <div className="sidebar-search-container">
                    <SearchOutlined/>
                    <input placeholder='search or start chat' type="search"/>
                </div>

            </div>
            <div className="sidebar-chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
