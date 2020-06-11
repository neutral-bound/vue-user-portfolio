<template>
  <div>
    <header />
    <div class="about-myself">
      <div class="container">
        <div class="row welcome_inner">
          <div class="col-lg-6">
            <div class="welcome_text">
              <h4>About Myself</h4>
              <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
              <div class="row">
                <div class="col-md-4">
                  <div class="wel_item">
                    <i class="lnr lnr-database"></i>
                    <h4>$2.5M</h4>
                    <p>Total Donation</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="wel_item">
                    <i class="lnr lnr-book"></i>
                    <h4>1465</h4>
                    <p>Total Projects</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="wel_item">
                    <i class="lnr lnr-users"></i>
                    <h4>3965</h4>
                    <p>Total Volunteers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="tools_expert">
              <div class="skill_main">
            <div class="skill_item">
              <h4>HTML <span class="counter">85</span>%</h4>
              <div class="progress_br">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%;"></div>
                </div>
              </div>
            </div>
            <div class="skill_item">
              <h4>CSS <span class="counter">85</span>%</h4>
              <div class="progress_br">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%;"></div>
                </div>
              </div>
            </div>
            <div class="skill_item">
              <h4>Bootstrap <span class="counter">80</span>%</h4>
              <div class="progress_br">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
                </div>
              </div>
            </div>
            <div class="skill_item">
              <h4>Vue JS <span class="counter">95</span>%</h4>
              <div class="progress_br">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 95%;"></div>
                </div>
              </div>
            </div>
            <div class="skill_item">
              <h4>ReactJS <span class="counter">80</span>%</h4>
              <div class="progress_br">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"></div>
                </div>
              </div>
            </div>
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
import Header from '@/components/Layout/Header/index.vue';

@Component({
  components: {
    Header,
  },
})
export default class AboutMyself extends Vue {}
</script>

<style lang="scss">
  .about-myself {
    padding-top: 120px;
    padding-bottom: 120px;
  }
  .welcome_text {
      h4 {
      color: #222222;
      font-family: "Heebo", sans-serif;
      font-size: 36px;
      margin-bottom: 18px;
      text-transform: uppercase;
      }
      p {
      max-width: 495px;
      font-family: "Roboto", sans-serif;
      margin-bottom: 40px;
      }
      .wel_item {
      border: 1px solid #eeeeee;
      padding: 20px 20px;
      border-radius: 5px;
        h4 {
        font-size: 24px;
        font-family: "Heebo", sans-serif;
        font-weight: bold;
        color: #222222;
        margin-bottom: 5px;
        margin-top: 10px;
        }
        p {
        font-size: 16px;
        font-family: "Roboto", sans-serif;
        color: #777777;
        margin-bottom: 0px;
        }
      }
  }
  .tools_expert {
    padding: 20px 0px 0px 0px;
    .skill_item {
      margin-bottom: 18px;
      h4 {
        text-align: none;
        font-size: 14px;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        color: #222222;
        margin-bottom: 15px;
      }
      .progress_br {
        border: 1px solid #eeeeee;
        padding: 5px;
        border-radius: 10px;
        .progress {
          height: 10px;
          border-radius: 10px;
          background: #e8e8e8;
          .progress-bar {
            width: 0%;
            background-color: #d43c47;
            transition: width .6s ease;
            height: 10px;
            border-radius: 5px;
            vertical-align: middle;
            align-self: center;
            background: -moz-linear-gradient(0deg, #303133 0%, #d43c47 100%);
            background: -webkit-linear-gradient(0deg,  #303133 0%, #d43c47 100%);
            background: -ms-linear-gradient(0deg, #303133 0%, #d43c47 100%);
          }
        }
      }
    }
  }
</style>
