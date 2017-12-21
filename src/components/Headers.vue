<template>
  <div class="search">
    <label> Please enter GitHub Login for searching: </label>
    <input @keyup.enter="submit" ref="entername" :maxlength="50" :placeholder="'enter GitHub Login'">
    </input>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'headers',
  methods: {
    submit() {
       this.$store.dispatch('GET_ITEM', { value: this.$refs.entername.value});
    }
  }
}
</script>

<style lang="less">
  .search {
    display: flex;
    justify-content: center;
    padding: 20px;
    font-size: 20pt;
    &>input {
      margin-left: 50px;
      width: 450px;
      height: 25px;
      font-size: 20pt;
      border-radius: 15px;
      padding: 5px 25px;
    }
  }
</style>
