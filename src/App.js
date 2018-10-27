import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './static/css/chat_interface.css' 
// import './static/css/style.css'
import './static/css/temporary.css'


class SendButton extends Component{
  get_message_and_create_bot_message_component(message){

  }

  handleClick() {
    console.log("Clicked");
  }

    render(){
      return (<div className="send_message" onClick={this.handleClick}>
                <div className="text">send</div>
              </div>);
    }
}

class MessageTextBox extends Component{
  get_message_and_create_bot_message_component(){


  }
  
  constructor(props){
    super(props);
    this.state = {
      message: this.props.message
    };
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.state.message = e.target.value;
      this.get_message_and_create_bot_message_component()
    }
  }

  render(){
      return(
            <input id="msg_input" className="message_input" placeholder="Type your messages here..." onKeyPress={this._handleKeyPress}/>
      );
  }
}

class MessageTextBoxContainer extends Component{
  render(){
    return(
    <div className="message_input_wrapper">
      <MessageTextBox></MessageTextBox>
    </div>);
  }
}

class Avartar extends Component {
  render(){
    return(
      <div className="avatar"/>
    );
  }
}

class BotMessageBox extends Component{
  constructor(props) {
    super(props);

    this.state = {
      message: this.props.message
    };
  }
  render(){
    return(
      <li className="message left appeared">
        <Avartar></Avartar>
        <div className="text_wrapper">
            <div className="text">{this.state.message}</div>
        </div>
      </li>
    );
  }
}

class MessagesContainer extends Component{
  constructor(props) {
    super(props);
    if(this.props.messages == undefined){
      this.state = {messages: Array()}
    }
    else{
      this.state = { messages: this.props.messages}
    }

    
  }
  createBotMessages(){
    let comps = Array()
    for(let i=0; i<this.state.messages.length; i++){
      let current_prop = {"message": this.state.messages[i]}
      comps.push(React.CreateElement(BotMessageBox, current_prop))
    }
  }

  render(){
    return(
      <ul className="messages">
        {this.createBotMessages()}
      </ul>
    );
  }
}


class ChatApp extends Component {
  render() {
    return (
      <div className="chat_window">
        <MessagesContainer></MessagesContainer>
        <div className="bottom_wrapper clearfix">
          <MessageTextBoxContainer></MessageTextBoxContainer>
          <SendButton></SendButton>
        </div>
        
      </div>
    );
  }
}



export default ChatApp;
