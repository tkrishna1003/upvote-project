<script >
import Voting from "./Voting.vue";
export default {
  components: { Voting }
}

</script>

<template>

  <div class="upvote-container" v-cloak>
    <Voting></Voting>
  </div>

</template>

<style scoped>
.upvote-container {
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  width: 50vw;
  border: 1px solid grey;
  border-radius: 10px;
  height: auto;
  background-color: #ffffff;
}
</style>
