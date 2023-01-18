import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './config'
import MessageParser from './MessageParser'
import ActionProvider from './/ActionProvider'
import { useState } from 'react'

const ChatBot = () => {

    const [toggleBot, setToggleBot] = useState(false);

    const handleBot = () => {
      setToggleBot(!toggleBot)
    }

  return (
    <div style={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: "20px auto"}}>
      {toggleBot && (
        <Chatbot 
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        headerText="Conversation with Reach AI"
        />
      )}
      <button onClick={handleBot}>
      <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png" alt="Bordered avatar"/>

      </button>
      
    </div>
  )
}

export default ChatBot