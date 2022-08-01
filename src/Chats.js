//*********For the entire message window********

import React from 'react';
import "./Chat.css";
import Chat from "./Chat.js";

function Chats() {
  return (
    <div className="chats">
        <Chat                    //components in chat page
        name="Sam"
        message="Hey you!!"
        timestamp="40 seconds ago"
        profilePic="https://i.pinimg.com/474x/12/3a/a3/123aa37e604bc4fdc959dd7d9dba2a75.jpg"
      />
        <Chat
        name="Tim"
        message="Hey, can't wait to see you!"
        timestamp="1 minute ago"
        profilePic="https://i.pinimg.com/236x/2c/bc/49/2cbc495e17000f54397100229e5a4a0f--letter-t-tima.jpg"
      />
      <Chat
        name="Jack"
        message="Hey,see you in 5!"
        timestamp="2 minutes ago"
        profilePic="https://i.pinimg.com/736x/c3/d5/3f/c3d53f0489b026890d2ecc1483522b57.jpg"
      />
       <Chat
        name="Mark"
        message="Wanna get some Coffee?!"
        timestamp="3 minutes ago"
        profilePic="https://i.pinimg.com/736x/09/d1/df/09d1dfd3ad53cb18677ea097bd5e5bdb.jpg"
      />
    </div>
  );
}

export default Chats;