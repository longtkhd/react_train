import React ,{Component} from 'react';
import Redirect from 'react-router-dom/Redirect';

import './../css/style.css';
import Nav from './Nav';
  
    
    class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state ={
        a :false,
       
      }
    }
    

      summitForm = (e) => {
          e.preventDefault();
        this.setState({
          a:true
        });   
      }

isChange = (e) => {
  const ten = e.target.name;
  const giatri = e.target.value;
  this.setState({
    [ten]: giatri // dat state cho moi ten ta dat duoc voi gia tri tuong ung
  });
   
}
getValue = () => {
  var noidung ="";
  noidung+= "ten nhan duoc la: " + this.state.Name;
  noidung += "People nhan duoc la:" + this.state.People;
  return noidung;

}

        render() {
          if (this.state.a) {
            console.log(this.getValue());
            
            return <Redirect to="/" />
          }
            return (
              
             
                
                  <div>
              
  
  <div className="text  pd">
    <h1 style={{textAlign: 'left'}}>Contact</h1>
    <br />
    <p style={{margin: '15px 0', fontSize: '15px'}}>We offer full-service catering for any event, large or small. We
      understand your needs and we will cater
      the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to
      contact
      us.</p>
    <p>
      <b className="blue">Catering Service, 42nd Living St, 43043 New York, NY</b>
    </p>
    <p style={{fontSize: '15px', margin: '15px 0'}} className>You can also contact us by phone 00553123-2323 or
      email catering@catering.com, or you can send us a
      message here:</p>
    <div className="text ">
      <form action="" target="_blank">
        <p><input onChange ={(e)=> this.isChange(e)} className="form" type="text" placeholder="Name" required name="Name" /></p>
        <p><input  onChange ={(e)=> this.isChange(e)}className="form" type="number" placeholder="How many people" required name="People" /></p>
        <p><input onChange ={(e)=> this.isChange(e)}  className="form" type="datetime-local" placeholder="Date and time" required name="date" defaultValue="2017-11-16T20:00" /></p>
        <p><input  onChange ={(e)=> this.isChange(e)} className="form" type="text" placeholder="Message \ Special requirements" required name="Message" /></p>
                      <p><button className="form1" type="submit" onClick={(e) => this.summitForm(e)}>SEND MESSAGE</button></p>
      </form>
    </div>
  </div>
</div>

               
            )
        }
    }
    






export default Contact;