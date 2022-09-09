<template>
  <section>

    <div id="about1">
      <img src="https://i.postimg.cc/1z3K9Yvt/abt-page2.jpg" class="first_img">
      <div class="about2">
        <h1>MOBILE MEALS</h1>
      </div>
      <h2>
        <i>Mobile Meals</i> is an affordable, efficient and trustworthy online service, where you could order a variety of your favourite, delicious meals
      </h2>
      <div class="row">
        <div class="col">
          <h3>Mobile Meals was established and founded by Cameron Tamboer, the reason why I have decided to create this app is because at times it is an inconvience to always drive to restaurants to buy food, whereas it is much more convenientto order online and have the food delivered to your doorstep. </h3>
          <h3>With this being said, I highly recommend every customer to indulge in the food of you choice and be pleased by our services on Mobile Meals.</h3>
        </div>
          <div class="col">
            <img src="https://i.postimg.cc/tTRjTgbH/about-page.jpg" class="sec_img">
          
            
          </div>
        </div>
      </div>
    
  </section>

  <div class="separator">
    <div class="line"></div>
    <h2>Contact Form</h2>
    <div class="line"></div>
  </div>

  <!-- Contact form -->
  <section>
    <div id="contact-form">
      <div>
        <h1>Nice to Meet You!</h1> 
        <h4>Have a question or just want to get in touch? Let's chat.</h4> 
      </div>
      <p id="failure">Oopsie...message not sent.</p>  
      <p id="success">Your message was sent successfully. Thank you!</p>
      
      <form method="post" action="https://formspree.io/f/xjvlagle">
        <div>
          <label for="name">
            <span class="required">Name: *</span> 
            <input type="text" id="name" name="name" value="" placeholder="Your Name" required="required" tabindex="1" autofocus="autofocus" />
          </label> 
        </div>
        <div>
          <label for="email">
            <span class="required">Email: *</span>
            <input type="email" id="email" name="email" value="" placeholder="Your Email" tabindex="2" required="required" />
          </label>  
        </div>
        <div>		          
            <label for="subject">
            <span>Subject: </span>
            <select id="subject" name="subject" tabindex="4">   
                 <option value="hello">Product Price Question</option>
                 <option value="quote">Delivery Complaints</option>  
                 <option value="general">Product enquires</option>
                </select>
              </label>
            </div>
            <div>		          
              <label for="message">
                <span class="required">Message: *</span> 
                <textarea id="message" name="message" placeholder="Please write your message here." tabindex="5" required="required"></textarea> 
              </label>  
            </div>
            <div>		           
              <button name="submit" type="submit" id="submit" >SEND</button> 
        </div>
      </form>
      
    </div>
  </section>
</template>
<style scoped>
  .row {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
  .first_img{
    height: 30rem;
    width:90rem;
    justify-content: center;
   flex-wrap: wrap;
   margin-top: 5rem;
  }
  .separator{
    display:flex;
    align-items: center;
  }
  
  .separator .line{
    height: 3px;
    flex: 1;
    background-color: #000;
  }
  
  .separator h2{
    padding: 0 2rem;
  }
  * {
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    -webkit-font-smoothing:antialiased;
    -moz-font-smoothing:antialiased;
    -o-font-smoothing:antialiased;
    font-smoothing:antialiased;
    text-rendering:optimizeLegibility;
 }
 body {
    color: #C0C0C0;
    font-family: Arial, san-serif;
 }
 
 
 /* Contact Form Styles */
 h1 {
    margin: 10px 0 0 0;
 }
 h4{
    margin: 0 0 20px 0;
 }
 #contact-form {
    background-color:rgba(72,72,72,0.9);
    padding: 10px 20px 30px 20px;
    max-width:100%;
    float: left;
    left: 50%;
    position: absolute;
    margin-top:30px;
    margin-left: -260px;
    border-radius:7px;
    color:white;
    -webkit-border-radius:7px;
    -moz-border-radius:7px;
 }
 #contact-form input,   
 #contact-form select,   
 #contact-form textarea,   
 #contact-form label { 
    font-size: 15px;  
    margin-bottom: 2px;
    font-family: Arial, san-serif;
 } 
 #contact-form input,   
 #contact-form select,   
 #contact-form textarea { 
    width:100%;
    background: #fff;
    border: 0; 
    -moz-border-radius: 4px;  
    -webkit-border-radius: 4px;  
    border-radius: 4px;
    margin-bottom: 25px;  
    padding: 5px;  
 }  
 #contact-form input:focus,   
 #contact-form select:focus,   
 #contact-form textarea:focus {  
    background-color: #E5E6E7; 
 }  
 #contact-form textarea {
    width:100%;
    height: 150px;
 }
 #contact-form button[type="submit"] {
    cursor:pointer;
    width:100%;
    border:none;
    background:#991D57;
    background-image:linear-gradient(bottom, #8C1C50 0%, #991D57 52%);
    background-image:-moz-linear-gradient(bottom, #8C1C50 0%, #991D57 52%);
    background-image:-webkit-linear-gradient(bottom, #8C1C50 0%, #991D57 52%);
    color:#FFF;
    margin:0 0 5px;
    padding:10px;
    border-radius:5px;
 }
 #contact-form button[type="submit"]:hover {
    background-image:linear-gradient(bottom, #9C215A 0%, #A82767 52%);
    background-image:-moz-linear-gradient(bottom, #9C215A 0%, #A82767 52%);
    background-image:-webkit-linear-gradient(bottom, #9C215A 0%, #A82767 52%);
    -webkit-transition:background 0.3s ease-in-out;
    -moz-transition:background 0.3s ease-in-out;
    transition:background-color 0.3s ease-in-out;
 }
 #contact-form button[type="submit"]:active {
    box-shadow:inset 0 1px 3px rgba(0,0,0,0.5);
 }
 input:required, textarea:required {  
    box-shadow: none;
    -moz-box-shadow: none;  
    -webkit-box-shadow: none;  
    -o-box-shadow: none;  
 } 
 #contact-form .required {  
    font-weight:bold;  
    color: #E5E6E7;      
 }
 
 /* Hide success/failure message
    (especially since the php is missing) */
 #failure, #success {
    color: #6EA070; 
    display:none;  
 }
 
 /* Make form look nice on smaller screens */
 @media only screen and (max-width: 580px) {
    #contact-form{
       left: 3%;
       margin-right: 3%;
       width: 88%;
       margin-left: 0;
       padding-left: 3%;
       padding-right: 3%;
    }
 }
</style>