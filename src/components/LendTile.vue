<template>
  <div class="tile" :class="[{'border-green' : isOwed}, 'border-red' ]">
    <h4 class="tile-title">{{ msg }}</h4>
    <p>Joe owes me 100 Tk</p>
    <small>Jan 13, 2020</small>
  </div>
</template>

<script>
export default {
  name: 'LendTile',
  props: {
    msg: String,
    isOwed: Number
  }
}
</script>

<style>

</style>
