<template lang="html">
  <div class="small">
    <line-chart :chart-data="dataset" :options="{ legend:{ display: false} }"></line-chart>
  </div>
</template>

<script>
import LineChart from './LineChart';
import {KToF, } from '../constants';
export default {
  components: {
    LineChart,
  },
  data () {
    const { Weather, } = this.$store.state.API;
    return {
      dataset: {
        labels: Weather.weatherData
          .map(data => data.dt_txt),
        datasets: Weather.weatherData
          .map(data => ({
            label: 'This Week',
            backgroundColor: '#2c3e50',
            data: [ KToF(data.main.temp_min), KToF(data.main.temp_max), ],
          }
        )),
      },
    };
  },
};
</script>

<style lang="css">
.small {
  width: auto;
  /*max-width: 300px;*/
  /*display: inline-block;*/
}
</style>
