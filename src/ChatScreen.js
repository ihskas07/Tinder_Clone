import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([

        //**********Sender end*******
        {
          name: "Zee",
          image:"https://i.pinimg.com/736x/7d/38/d9/7d38d967cdf1322ae9b7734ba85c3cc2.jpg",
          message: "Hey whats up!!",
        },
        {
          name: "Zee",
          image:"https://i.pinimg.com/736x/7d/38/d9/7d38d967cdf1322ae9b7734ba85c3cc2.jpg",
          message: "Good morning...",
        },
        //*********Reciever end*********
        {
          message: "Hey, how are you Zee?",
        },
      ]);

      //*********Sending message**********

      const handleSend = (e) => {      
        e.preventDefault();   //if not written page will refresh on hitting enter
    
        setMessages([...messages, { message: input }]);  //array of whatever is already inside the chat window along with new message
        setInput('');
      };    
    
  return (
    < div className="chatScreen">
      <p className="chatScreen__timestamp">You matched with Zee on 30/08/22</p>
      {messages.map((message)=> message.name ? (
        <div className='chatScreen__message'>
          <Avatar
            className="chatScreen__image"
            alt={message.name}
            src={message.image}/>
          <p className="chatScreen__text">{message.message}</p>
        </div>
        ) : (
        <div className="chatScreen__message">
          <p className="chatScreen__textUser">{message.message}</p>
        </div>
        )
        )}
            <form className="chatScreen__input">
                <input value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..." 
                    type='text'/>
                <button onClick={handleSend}  //handleSend is a const function defined above
                    type="submit"
                    className="chatScreen__inputButton">
                    SEND
                </button>
            </form>
    </div>
  );
}

export default ChatScreen;