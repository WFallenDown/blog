<template>
  <div>
    <div>
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Journal",
  data() {
    return {
      count: 0
    }
  },
  methods: {
    load() {
      this.count += 2;
    }
  }
};
</script>

<style>
</style>