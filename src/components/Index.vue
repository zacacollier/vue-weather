<template>
  <div class="hello">
    <h1>Weather in {{ msg }}</h1>
    <searchbar></searchbar>
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
</style>
