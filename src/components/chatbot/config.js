import { createChatBotMessage} from 'react-chatbot-kit';
import BotProfile from './BotProfile'

const botname = "Reach AI"

const config = {
  initialMessages: [
    createChatBotMessage(`Hello Welcome to our community, this is ${botname}`),
    createChatBotMessage(
      "Here you can ask me any question I will try to answer as much as much I can. Say (help) if you want to know the clue.",
      {
        withAvatar: false,
        delay: 500,
      }
    )
  ],
  botname: botname,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#a058ed',
    },
    chatButton: {
      backgroundColor: '#a058ed',
    },
  },
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <BotProfile {...props} />
    },
    {
      widgetName: 'reachPicture',
      widgetFunc: (props) => <img style={{width: '200px', height: '200px'}} src="https://avatars.githubusercontent.com/u/111555521?v=4" alt="" />
    },
  ],
  customComponents: {
    botAvatar: (props) => <img style={{width: '30px', height: '30px'}} src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png" alt="" />,
  }
};

export default config;