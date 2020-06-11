<template>
 <div class="experiences-educatuon">
  <div class="container">
    <div class="tabs_inner">
  		<ul class="nav nav-tabs" id="myTab" role="tablist">
  			<li class="nav-item">
  				<a class="nav-link active show" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">My Experiences</a>
  			</li>
  			<li class="nav-item">
  				<a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">My Education</a>
  			</li>
  		</ul>
  		<div class="tab-content" id="myTabContent">
  			<div class="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab">
  				<ul class="list">
  					<li>
  						<span></span>
  						<div class="media">
  							<div class="d-flex">
  								<p>March 2020 to present</p>
  							</div>
  							<div class="media-body">
  								<h4>Facebook</h4>
  								<p>Senior Web Developer <br>Santa monica, Los angeles</p>
  							</div>
  						</div>
  					</li>
  					<li>
  						<span></span>
  						<div class="media">
  							<div class="d-flex">
  								<p>March 2019 to March 2020</p>
  							</div>
  							<div class="media-body">
  								<h4>Cisco</h4>
  								<p>Senior Web Developer <br>Santa monica, Los angeles</p>
  							</div>
  						</div>
  					</li>
  					<li>
  						<span></span>
  						<div class="media">
  							<div class="d-flex">
  								<p>March 2018 to March 2019</p>
  							</div>
  							<div class="media-body">
  								<h4>Netflix</h4>
  								<p>Senior Web Developer <br>Santa monica, Los angeles</p>
  							</div>
  						</div>
  					</li>
  				</ul>
  			</div>
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
export default class Experience extends Vue {}
</script>

<style lang="scss">
.experiences-educatuon {
  background: -webkit-linear-gradient(0deg, #303133 0%, #d43c47 100%);
  padding-top: 120px;
  padding-bottom: 120px;
  .tabs_inner {
    .nav-tabs {
      display: block;
      text-align: center;
      border: none;
      margin-bottom: 120px;
      li {
        display: inline-block;
        margin-right: 8px;
        a {
          margin: 0px;
          line-height: 50px;
          border-radius: 5px;
          padding: 0px 40px;
          font-size: 13px;
          font-weight: 500;
          color: #fff;
          font-family: "Roboto", sans-serif;
          border: 1px solid #9ab5f5;
          background: rgba(255, 255, 255, 0.1);
          &.active {
            background: #fff !important;
            color: #222222;
           }
         }
      }
    }
  }
  .tab-pane .list {
    max-width: 460px;
    margin: auto;
    position: relative;
    padding-top: 40px;
    padding-bottom: 60px;
    padding-left: 0;
    &:before {
      content: "";
      height: 100%;
      width: 5px;
      background: rgba(255, 255, 255, 0.2);
      position: absolute;
      left: 46%;
      transform: translateX(-50%);
      top: -5px;
    }
    li {
      margin-bottom: 60px;
      position: relative;
      list-style: none;
      span {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        display: block;
        background: rgba(255, 255, 255, 0.2);
        position: absolute;
        left: 46%;
        top: 30px;
        transform: translateX(-50%);
      }
      .media {
        display: flex;
        align-items: flex-start;
        .d-flex {
          padding-right: 100px;
          p {
            color: rgba(255, 255, 255, 0.75);
            margin-bottom: 0px;
            padding-top: 20px;
          }
        }
        .media-body {
          flex: 1;
          h4 {
           color: #fff;
           font-size: 21px;
           text-transform: uppercase;
           margin-bottom: 20px;
         }
         p {
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 0px;
        }
        }
      }
    }
  }
}
</style>
