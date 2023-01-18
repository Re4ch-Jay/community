import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleName = () => {
    const botMessage = createChatBotMessage('I am Reach AI');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  
  const handleHelp = () => {
    const botMessage = createChatBotMessage('I am Reach AI, I can help you about some information related to this website.');
    const info = createChatBotMessage("Try to say this question below if you want to know the info: What are we doing? How can I contact you? Where is your company located?", {
      withAvatar: false,
      delay: 500,
    })

    const redirect = createChatBotMessage("Try to say this question below if you want to redirect page. Try to say: home, blog, contact, about", {
      withAvatar: false,
      delay: 1000,
    })

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, info, redirect],
    }));
  }

  const handleFather = () => {
    const botMessage = createChatBotMessage('My father is Reach', {
      widget: 'reachPicture'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleError = () => {
    const botMessage = createChatBotMessage('I do not know what are you saying');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }


  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'dogPicture',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleTeam = () => {
    const botMessage = createChatBotMessage('Our team are: Phat Panhareach, Houy Seiha, Leang Menghang, Leap Chanvuthy');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleJob = () => {
    const botMessage = createChatBotMessage('Our job in this website is to let your post anything about your code or technology issue');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleContact= () => {
    const botMessage = createChatBotMessage('You can go to contact page by saying (contact) or you can contact us by 0123456789');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleLocation = () => {
    const botMessage = createChatBotMessage('We are located in Phnom Penh, Cambodia');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleFather,
            handleDog,
            handleName,
            handleError,
            handleHelp,
            handleTeam,
            handleJob,
            handleLocation,
            handleContact
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;