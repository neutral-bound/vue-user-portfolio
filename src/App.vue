<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { SupportedLocale } from './store/modules/LocalizationModule';
import Header from '@/components/Layout/Header/index.vue';

const defaultLayout = 'default';

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {
  get locale(): SupportedLocale {
    return this.$store.getters.currentLocale;
  }

  get layout() {
    return ((this.$route.meta as any).layout || defaultLayout) + '-layout';
  }

  public mounted() {
    this.$i18n.locale = this.locale;
  }

  @Watch('locale')
  public onLocaleChange(locale: SupportedLocale) {
    this.$i18n.locale = locale;
  }
}
</script>

<style lang="scss">
@import "./style/theme";
</style>
