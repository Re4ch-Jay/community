import React from 'react';
const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);

    const greeting = ['hi', 'hello', 'hey', "What's up"];
    greeting.forEach(element => {
      if(message.includes(element)){
        return actions.handleHello()
      }
    })

    const creator = ['ceo', 'father', 'creator']
    creator.forEach(element => {
      if(message.includes(element)) {
        return actions.handleFather()
      }
    });

    const name = ['name']
    name.forEach(element => {
      if(message.includes(element)){
        return actions.handleName()
      } 
    })

    const team = ['team', 'members', 'developers']

    team.forEach(element => {
      if(message.includes(element)){
        return actions.handleTeam()
      } 
    })

    const help = ['help', 'clue', 'hint']
    help.forEach(element => {
      if(message.includes(element)){
        return actions.handleHelp()
      } 
    })

    const location = ['location', 'Where is your company located?']
    location.forEach(element => {
      if(message.includes(element)){
        return actions.handleLocation()
      }
    })

    if(message.includes('doing')){
      return actions.handleJob()
    } 

    const contact = ['How can I contact you?']
    contact.forEach(element => {
      if(message.includes(element)){
        return actions.handleContact()
      }
    })

    if(message.includes("dog")) {
      return actions.handleDog()
    }

    if(message.includes('blogs')) {
      return window.location.replace('/blogs')
    }

    if(message.includes('contact')) {
      return window.location.replace('/contact')
    }

    if(message.includes('about')) {
      return window.location.replace('/about')
    }


  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;