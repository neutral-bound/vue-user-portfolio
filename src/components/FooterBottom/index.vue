<template>
  <div class="footer_area">
    <div class="container">
           <div class="row footer_inner">
             <div class="col-lg-5 col-sm-6">
               <aside class="f_widget ab_widget">
                 <div class="f_title">
                   <h3>About Me</h3>
                 </div>
                 <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
                 <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;All rights reserved</p>
               </aside>
             </div>
             <div class="col-lg-5 col-sm-6">
               <aside class="f_widget news_widget">
                 <div class="f_title">
                   <h3>Newsletter</h3>
                 </div>
                 <p>Stay updated with our latest trends</p>
                 <div id="mc_embed_signup">
                               <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" class="subscribe_form relative">
                                 <div class="input-group d-flex flex-row">
                                       <input name="EMAIL" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address '" required="" type="email">
                                       <button class="btn sub-btn"><span class="lnr lnr-arrow-right"></span></button>
                                   </div>
                                   <div class="mt-10 info"></div>
                               </form>
                           </div>
               </aside>
             </div>
             <div class="col-lg-2">
               <aside class="f_widget social_widget">
                 <div class="f_title">
                   <h3>Follow Me</h3>
                 </div>
                 <p>Let us be social</p>
                 <ul class="list">
                   <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                   <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                   <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                   <li><a href="#"><i class="fa fa-behance"></i></a></li>
                 </ul>
               </aside>
             </div>
           </div>
         </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class FooterBottom extends Vue {}
</script>

<style lang="scss">
 .footer_area {
   background: #000;
   padding-top: 120px;
   padding-bottom: 120px;
   .f_title {
    margin-bottom: 35px;
    h3 {
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      font-family: "Heebo", sans-serif;
      margin-bottom: 0px;
    }
   }
   p {
    font-size: 14px;
    line-height: 24px;
    font-family: "Roboto", sans-serif;
    color: #777777;
    margin-bottom: 30px;
  }
  .news_widget {
    .input-group input {
    height: 40px;
    background: transparent;
    border-radius: 0px;
    width: 80%;
    border: none;
    padding: 0px 15px;
    border: 1px solid #1e233b;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    color: #cccccc;
    outline: none;
    box-shadow: none;
    }
    p {
      font-size: 14px;
      line-height: 24px;
      font-family: "Roboto", sans-serif;
      color: #777777;
      margin-bottom: 15px;
    }
    .sub-btn {
      border-radius: 0px;
      background: -webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%);
      outline: none !important;
      box-shadow: none !important;
      padding: 0px;
      border: none;
      width: 42px;
      cursor: pointer;
      color: #fff;
    }
 }
}
</style>
