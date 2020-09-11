import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
const { string } = PropTypes;

class App extends Component {

  state = {
    text: {
      name: '',
      phoneNumber: '',
      email: '',
      textmessage: ''
    }
  }

  static propTypes = {
    appTitle: string,
    appServer: string,
    appDesc: string
  }

 static defaultProps = {
  appTitle: "Send us a Message",
  appServer: "https://lingows-modern-text-app.herokuapp.com",
  appDesc: "Enter your information, and we will text you shortly."
  }



  sendText = _ => {
    const { text } = this.state
    //pass variables within the query string
  
    var name = document.forms["myForm"]["name"].value;
    var phoneNumber = document.forms["myForm"]["phoneNumber"].value;
    var email = document.forms["myForm"]["email"].value;
    var textmessage = document.forms["myForm"]["textmessage"].value;
    // var myForm = document.forms["myForm"].value;
    var myForm = document.getElementById("myForm");
    // var myForm = document.getElementsById('error');
  
    if (name === "" || name == null) {
      alert("Name must be filled out");
      myForm.classList.add("myForm");
      // document.getElementById("required").style.display = "block";
      return false;
    } 
    if (phoneNumber === "" || phoneNumber == null) {
      myForm.classList.add("myForm");
      alert("Phone Number must be filled out");
      return false;
    } 
    if (email === "" || email == null) {
      myForm.classList.add("myForm");
      alert("Email must be filled out");
      return false;
    } 
    if (textmessage === "" || textmessage == null) {
      alert("Message must be filled out");
      document.getElementById("textmessage").style.borderColor = "red";
      return false;
    } 
    else{
      fetch(`${this.props.appServer}/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}&name=${text.name}&phoneNumber=${text.phoneNumber}&email=${text.email}`)
      .catch(err => console.error(err))
  
      document.getElementById("myBtn").innerHTML = "Message Sent!";
      document.getElementById('name').value = '';
      document.getElementById('phoneNumber').value = '';
      document.getElementById('email').value = '';
      document.getElementById('textmessage').value = '';
      // document.getSelection("name, phoneNumber, email, textmessage").value = '';
      document.getElementById("textmessage").style.borderColor = "#CBCED3";
      myForm.classList.remove("myForm");
      document.getElementById("myBtn").disabled = 'true';
    }
    
  }


  myFunction() {
    var Form_body = document.getElementById("Form_body");
    var sms_icon = document.getElementById("sms_icon");
    if (Form_body.style.display === "block") {
      Form_body.style.display = "none";
      // document.body.style.backgroundColor = 'rgba(0,0,0,0)';
    } else {
      Form_body.style.display = "block";
      // document.body.style.backgroundColor = 'rgba(0,0,0,.5)';
    }
    sms_icon.classList.toggle("sms_icon_toggle");
    sms_icon.classList.toggle("hide-icon-mobile");
  }

render() {

const { text } = this.state;

  return (

<div className="App">
      <div className="Form-body" id="Form_body">
        <div className="title-cont">
        <h3 className="App-tittle">{`${this.props.appTitle}`}</h3>
        <div className="small-sms-icon" id="small_sms_icon" onClick={this.myFunction}></div>
        </div>
<div className="container">
  <p id="error">{`${this.props.appDesc}`}</p>

  <form method="post" id="myForm" className="" action="/send-text">

  <div className="txt-input">
  <label className="label"> Name: </label>
  <input placeholder="Name:" id="name" value={text.name} onChange={e => this.setState({ text: { ...text, name: e.target.value } })} required/>
  </div>

  <div className="txt-input">
  <label className="label"> Phone Number: </label>
  <input placeholder="Phone Number:" id="phoneNumber" value={text.phoneNumber} onChange={e => this.setState({ text: { ...text, phoneNumber: e.target.value } })} required/>
  </div>

  <div className="txt-input">
  <label className="label"> Email: </label>
  <input placeholder="Email:" id="email" value={text.email} onChange={e => this.setState({ text: { ...text, email: e.target.value } })} required/>
  </div>

  <div className="txt-input">
  <label className="label"> Message: </label>
  <textarea placeholder="Message:" id="textmessage" rows={3} value={text.textmessage} onChange={e => this.setState({ text: { ...text, textmessage: e.target.value } })} required/>
  </div>
  </form>

  <button className="textButton" id="myBtn" type="submit" value="submit" onClick={this.sendText}> <span>Send Text</span> </button>
</div>
<div className="form-bottom"><span>Powered by <a href="https://www.lingows.media" target="_blank"><b>LINGOWS MEDIA</b></a></span><p></p></div>
    </div>
    <div className="sms-icon" id="sms_icon" onClick={this.myFunction}></div>
    </div>

  );
}
}

export default App;
