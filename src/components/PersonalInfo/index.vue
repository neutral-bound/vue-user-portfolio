<template>
  <div class="home_banner_area">
      <div class="container box">
        <div class="banner_inner d-flex align-items-center">
					<div class="banner_content">
						<div class="media">
							<div class="d-flex">
								<img src="../../assets/users.jpeg" alt="">
							</div>
							<div class="media-body">
								<div class="personal_text">
									<h6>Hello Everybody, i am</h6>
									<h3>Keeth McKinney</h3>
									<h4>Junior UI/UX Developer</h4>
									<p>You will begin to realise why this exercise is
                    called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
								</div>
							</div>
						</div>
					</div>
				</div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class PersonalInfo extends Vue {}
</script>

<style lang="scss">
.home_banner_area {
  position: relative;
  z-index: 1;
  background: -webkit-linear-gradient(0deg, #303133 0%, #d43c47 100%);
  margin-bottom: 200px;
  .box {
    min-height: 700px;
    border-radius: 12px;
    position: relative;
    bottom: -100px;
    background: #fff;
    padding: 30px;
    box-shadow: 0px 20px 80px 0px rgba(153, 153, 153, 0.3);
  }
  .banner_inner {
    position: relative;
    width: 100%;
    min-height: 700px;
    display: flex;
    .banner_content {
      color: #222222;
      vertical-align: middle;
      align-self: center;
      text-align: left;
      .media {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: start;
      align-items: flex-start;
      .d-flex {
        padding-right: 125px;
       }
      .media-body {
        vertical-align: middle;
        align-self: center;
        .personal_text {
          h6 {
          font-size: 14px;
          font-family: "Roboto", sans-serif;
          text-transform: uppercase;
          letter-spacing: 2.1px;
          font-weight: normal;
          margin-bottom: 12px;
          color: #222222;
          }
          h3 {
          font-size: 48px;
          text-transform: uppercase;
          margin-bottom: 15px;
          color: #222222;
          }
          h4 {
          font-size: 16px;
          font-weight: 500;
          font-family: "Roboto", sans-serif;
          text-transform: uppercase;
          margin-bottom: 20px;
          color: #222222;
          }
          p {
          font-family: "Roboto", sans-serif;
          max-width: 540px;
          color: #777777;
          margin-bottom: 40px;
          }
        }
       }
      }
    }
  }
}
</style>
