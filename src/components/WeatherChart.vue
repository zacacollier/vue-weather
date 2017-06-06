<template lang="html">
  <div>
    <div class="small">
      <trend
        :data="lows"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        auto-draw
        smooth
      >
      </trend>
    </div>
    <div class="small">
      <trend
        :data="highs"
        :gradient="['#ea941b', '#eaba1b', '#ea5b1b']"
        auto-draw
        smooth
      >
      </trend>
    </div>
  </div>
</template>

<script>
import {KToF, } from '../constants';
import {mapGetters, } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'highs',
      'lows',
    ]),
  },
  data () {
    const { Weather, } = this.$store.state.API;
    return {
      low: Weather.weatherData
        .map((data, i) =>
          i < 39 && parseInt(KToF(data.main.temp_min))),
      high: Weather.weatherData
        .map((data, i) =>
          i < 39 && parseInt(KToF(data.main.temp_max))),
    };
  },
};
</script>

<style lang="css">
.small {
  height: 50%;
  width: 100%;
}
.small svg {
}
</style>
