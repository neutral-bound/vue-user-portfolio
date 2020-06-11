<template>
  <div>
    <personal-info />
    <Experience />
    <AboutMyself />
    <FooterBottom />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Layout/Header/index.vue';
import PersonalInfo from '@/components/PersonalInfo/index.vue';
import Experience from '@/components/Experience/index.vue';
import AboutMyself from '@/components/AboutMyself/index.vue';
import FooterBottom from '@/components/FooterBottom/index.vue';

@Component({
  components: {
    PersonalInfo,
    Experience,
    AboutMyself,
    FooterBottom,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
</style>
