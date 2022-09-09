<template>
    <div class="footer">
        <div class="inner-footer">
      
      <!--  for company name and description -->
          <div class="footer-items">
            <h1>Mobile Meals</h1>
            <p>Our aim is to provide the best customer service and most professional experience.</p><p> Order Now, to experience the top-rated delivery services and to avoid any disappointments.</p>
          </div>
      
      <!--  for quick links  -->
          <div class="footer-items">
            <h3>Quick Links</h3>
            <div class="border1"></div> <!--for the underline -->
              <ul>
                <a href="/about"><li>About</li></a>
                <a href="/products"><li>Products</li></a>
                <a href="/about"><li>Contact</li></a>
              </ul>
          </div>
      
      <!--  for some other links -->
          <div class="footer-items">
            <h3>Recipes</h3>
            <div class="border1"></div>  <!--for the underline -->
              <ul>
                <a href="https://www.foodnetwork.com/recipes/food-network-kitchen/loaded-chili-cheeseburgers-recipe-2108237"><li>Burgers</li></a>
                <a href="https://www.delish.com/cooking/recipe-ideas/g40785924/sushi-recipes/"><li>Sushi</li></a>
                <a href="https://www.simplyrecipes.com/recipes/nachos/"><li>Nachos</li></a>
                <a href="https://www.foodnetwork.com/grilling/grilling-central-burgers-and-hot-dogs/articles/50-milkshakes"><li>Milkshakes</li></a>
                <a href="https://www.acouplecooks.com/coffee-drinks/"><li>Coffee</li></a>
              </ul>
          </div>
      
      <!--  for contact us info -->
          <div class="footer-items">
            <h3>Contact us</h3>
            <div class="border1"></div>
              <ul>
                <li><i class="fa fa-map-marker" aria-hidden="true"></i>Life Choices, Lansdowne</li>
                <li><i class="fa fa-phone" aria-hidden="true"></i>(067) 705 1854</li>
                <li><i class="fa fa-envelope" aria-hidden="true"></i>camerontamboer03@gmail.com</li>
              </ul> 
            
      <!--   for social links -->
              <div class="social-media">
                <a href="www.instagram.com
      "><i class="fab fa-instagram"></i></a>
                <a href="www.facebook.com"><i class="fab fa-facebook"></i></a>
                <a href="www.linkedin.com"><i class="fab fa-linkedin"></i></a>
              </div> 
          </div>
        </div>
        
      <!--   Footer Bottom start  -->
        <div class="footer-bottom">
          Copyright &copy; Mobile Meals 2022
        </div>
      </div>
</template>
<style>
    .footer {
        width: 100%;
        background: #00121b;
        display: block;
        margin-top: 40rem;
     }
    
     .inner-footer {
         width: 95%;
         margin: auto;
         padding: 30px 10px;
         display: flex;
         flex-wrap: wrap;
         box-sizing: border-box;
         justify-content: center;
     }
    
    .footer-items {
        width: 25%;
        padding: 10px 20px;
        box-sizing: border-box;
        color: #fff;
    }
    
    .footer-items p {
        font-size: 16px;
        text-align: justify;
        line-height: 25px;
        color: #fff;
    }
    
    .footer-items h1 {
        color: #fff;
    }
    
    .border1 {
        height: 3px;
        width: 40px;
        background: #ff9800;
        color: #ff9800;
        background-color: #ff9800;
        border: 0px;
    }
    
    ul {
        list-style: none;
        color: #fff;
        font-size: 15px;
        letter-spacing: 0.5px;	
     }
    
    ul a {
        text-decoration: none;
        outline: none;
        color: #fff;
        transition: 0.3s;
    }
    
    ul a:hover {
        color: #ff9800;
    }
    
    ul li {
        margin: 10px 0;
        height: 25px;
    }
    
    li i {
        margin-right: 20px;
    }
    
    .social-media {
        width: 100%;
        color: #fff;
        text-align: center;
        font-size: 20px;
    }
    
    .social-media a {
        text-decoration: none;
    }
    
    .social-media i {
        height: 25px;
        width: 25px;
        margin: 20px 10px;
        padding: 4px;
        color: #fff;
        transition: 0.5s;
    }
    
    .social-media i:hover {
        transform: scale(1.5);
    }
    
    .footer-bottom {
        padding: 10px;
        background: #00121b;
        color: #fff;
        font-size: 12px;
        text-align: center;
    }
    
    /* for tablet mode view */
    
    @media screen and (max-width: 1275px) {
        .footer-items {
            width: 50%;
        }
    }
    
    /* for mobile screen view */
    
    @media screen and (max-width: 660px) {
        .footer-items {
            width: 100%;
        }
    }
    
    /* you can toggle the media screen view accordingly by changing the (max-width: px) to your convenience */
    
    /* Thanks to Computer Conversations */    

</style>