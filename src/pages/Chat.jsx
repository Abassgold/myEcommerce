import React, { useState } from 'react';

const Chat = ({socket}) => {
    const [message, sendMessage] = useState('')
    const send = ()=>{
        console.log(message);
        socket.emit('sendMessage', message)
    }
  return (
    <div className={`w-[50rem] mx-auto`}>
      <input type="text" onChange={(e)=>sendMessage(e.target.value)} className={`w-[100%]`}/>
      <button onClick={send} className={`p-3 bg-green-600 text-white`}>Send</button>
    </div>
  );
}

export default Chat;
