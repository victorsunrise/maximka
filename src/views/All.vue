<template>
  <div class="compare">
    <div class="compare-results">
      <div class="compare-results__block">
        <headers></headers>
        <div class="blockitem">
          <item></item>
          <div class="blockitem__repo">
            <span v-if="getRepo && !getRepo.length">you have not any repositories</span>
            <div>
              <repo class="blockitem__repo-item" v-if="getRepo.length && index%2 == 0" v-for="(item, index) in getRepo" :key="index" :item="item"></repo>
            </div>
            <div>
              <repo class="blockitem__repo-item" v-if="getRepo.length && index%2 != 0" v-for="(item, index) in getRepo" :key="index" :item="item"></repo>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item  from '../components/Item.vue';
import Headers from '../components/Headers.vue'
import Repo from '../components/Repo.vue'
export default {
  name: 'all',
  components: {
    Item,
    Headers,
    Repo
  },
  mounted() {
    this.$store.dispatch('MOUNT_ITEM');
  },
  computed: {
      getRepo() {
          if (this.$store.getters.getListRepo && this.$store.getters.getListRepo.length) {
              console.log(this.$store.getters.getListRepo)
              return this.$store.getters.getListRepo;
          } else {
              return null;
          }
      }
  }
}

</script>

<style lang="less">
    .blockitem {
      display: flex;
      justify-content: center;
      &__repo {
        display: flex;
      }
    }
</style>
