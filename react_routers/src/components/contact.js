import React from 'react';

import './../css/style.css';
  
    
    class contact extends React.Component {
        render() {
            return (
                <div>
                  <div>
  <div className="conteiner-fluid header fixed-top">
    <div className=" row">
      <div className="brand col">
        <a className="color" href="index.html">Gourmet au Catering</a>
      </div>
      <div className=" row d-none d-sm-inline">
        <div className="brand col ">
            <a className="color" href="about.html">About</a>
            <a className="color" href="a">Menu</a>
            <a className="color" href="a">Contact</a>
        </div>
        </div>
    </div>
  </div>
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
      <form action="a" target="_blank">
        <p><input className="form" type="text" placeholder="Name" required name="Name" /></p>
        <p><input className="form" type="number" placeholder="How many people" required name="People" /></p>
        <p><input className="form" type="datetime-local" placeholder="Date and time" required name="date" defaultValue="2017-11-16T20:00" /></p>
        <p><input className="form" type="text" placeholder="Message \ Special requirements" required name="Message" /></p>
        <p><button className="form1" type="submit">SEND MESSAGE</button></p>
      </form>
    </div>
  </div>
</div>

                </div>
            )
        }
    }
    






export default contact;