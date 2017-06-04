<template>
  <div class="index">
    <h1>Weather in {{ msg }}</h1>
    <search-bar></search-bar>
    <div class="cities">
      <div class="results">
        <search-results></search-results>
        <vue-embed-google-map></vue-embed-google-map>
      </div>
      <div class="charts">
        <weather-chart></weather-chart>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Your Town',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.index {
  height: 100%;
}
.cities {
  width: auto;
  height: 100%;
  padding: 15px;
  margin: 15px auto;
  background-color: rgba(179, 179, 179, .2);
  border-radius: 30px;
  display: flex;
}
.results {
  width: 37.5%;
  flex-direction: column;
  justify-content: center;
}
.charts {
  width: 62.5%;
  flex-direction: row;
}
</style>
