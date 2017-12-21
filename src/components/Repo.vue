<template>
  <div class="repo-block">
    <div class="repo-block__info">
      <label>Name:</label>
      <span>{{item.name}}</span>
    </div>
    <div class="repo-block__info">
      <label>URL:</label>
      <a :href="item.html_url">{{item.html_url}}</a>
    </div>
    <div class="repo-block__info">
      <label>Private:</label>
      <span>{{item.private}}</span>
    </div>
    <div class="repo-block__info">
      <label>language:</label>
      <span>{{item.language || 'not detected'}}</span>
    </div>
    <div class="repo-block__info">
      <label>Last pushed:</label>
      <span>{{getLastPush}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'repo',
    props : {
      item: {
          type:Object,
          required:false
      }
    },
    computed: {
      getLastPush() {
          if (this.item && this.item.pushed_at) {
              return this.item.pushed_at.substr(0,10)
          } return null;
      }
    }
}

</script>

<style lang="less">
.repo-block {
  border: 1px solid #fff;
  border-radius: 50px;
  background-color: coral;
  width: 500px;
  height: 200px;
  padding: 15px;
  font-size: 14pt;
  margin: 20px;

  &__info {
    display: flex;
    justify-content: flex-start;
    margin-left: 50px;
    margin-top: 15px;
    & > label {
      margin-right: 5px;
    }
  }
}
</style>
