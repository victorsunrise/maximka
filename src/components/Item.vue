<template>
  <div class="item-block">
    <div class="image">
      <img :src="getList.avatar_url || null">
      </img>
    </div>
    <div class="item-block__info">
      <label>Login GitHub:</label>
      <span>{{getList.login || 'null'}}</span>
    </div>
    <div class="item-block__info">
      <label>id GitHub:</label>
      <span>{{getList.id || 'null'}}</span>
    </div>
    <div class="item-block__info">
      <label>Name:</label>
      <span>{{getList.name || 'no name'}}</span>
    </div>
    <div class="item-block__info">
      <label>Email:</label>
      <span>{{getList.email || 'no entered email'}}</span>
    </div>
    <div class="item-block__info">
      <label>Type:</label>
      <span>{{getList.type || 'nobody'}}</span>
    </div>
    <div class="item-block__info">
      <label>URL:</label>
      <a :href="getList.html_url">{{getList.html_url || 'no url'}}</a>
    </div>
    <div class="item-block__info">
      <label>Site admin:</label>
      <label>{{getList.site_admin || 'false'}}</label>
    </div>
    <div class="item-block__info">
      <label>Create:</label>
      <span>{{getData}}</span>
    </div>
    <div class="item-block__info">
      <label>Updated:</label>
      <span>{{getUpdateData}}</span>
    </div>
    <div class="item-block__info">
      <label>Public repositories:</label>
      <span>{{getList.public_repos || 0}}</span>
    </div>
    <div class="item-block__info">
      <label>Public gist:</label>
      <span>{{getList.public_gists || 0}}</span>
    </div>
    <div class="item-block__info">
      <label>Location:</label>
      <span>{{getList.location || 'no location'}}</span>
    </div>
    <div class="item-block__info">
      <label>Status:</label>
      <span>{{getList.hireable || 'not hireable'}}</span>
    </div>
    <div class="item-block__info">
      <label>Followers:</label>
      <span>{{getList.followers || 'no followers'}}</span>
    </div>
    <div class="item-block__info">
      <label>Following:</label>
      <span>{{getList.following || 'no following'}}</span>
    </div>
    <div class="item-block__info">
      <label>Company:</label>
      <span>{{getList.company || 'no company'}}</span>
    </div>
    <div class="item-block__info">
      <label>Bio:</label>
      <span>{{getList.bio || 'no bio'}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  computed: {
    getList() {
        return this.$store.getters.getList;
    },
    getData() {
      if (this.getList && this.getList.created_at) {
          return this.getList.created_at.substr(0,10)
      } return null;
    },
    getUpdateData() {
      if (this.getList && this.getList.updated_at) {
          return this.getList.updated_at.substr(0,10)
      } return null;
    }
  }
}

</script>

<style lang="less">
.item-block {
  font-size: 14pt;
  .image {
    display: flex;
    justify-content: center;
    & > img {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      border: 1px solid #9bd14b;
    }
  }

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
