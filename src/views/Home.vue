<template>
  <div class="home">
    <div id="total-area">
      <div id="total-left">
        <h3>Lend</h3>
        <h4>1500 Tk</h4>
      </div>
      <div id="total-right">
        <h3>Borrow</h3>
        <h4>1200 Tk</h4>
      </div>
    </div>
    <LendTile msg="I Borrowed 100 Tk From Dany" :isOwed="1"/>
    <LendTile msg="Joe Lend 130 Tk From Me" :isOwed="0"/>
    <LendTile msg="John Lend 350 Tk From Me" :isOwed="0"/>
    <LendTile msg="I Borrowed 80 Tk From Brendon" :isOwed="0"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LendTile from '@/components/LendTile.vue'

export default {
  name: 'Home',
  components: {
    LendTile
  }
}
</script>
