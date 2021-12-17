import React from 'react';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Navbar } from '../../components/UI/navbar/Navbar';
import { Window } from '../../components/window/Window';

export const chat = ({ ...props }) => {

   return (
       <div className="chat-container">
       <Sidebar/>
       <Window/>
       </div>
   );
};

export default chat;