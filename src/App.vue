<template>
  <div id="app">
    <div id="nav">
      <div class="brand">
        <h1>Lendy</h1>
      </div>
    </div>
    <div id="menu-area">
      <router-link to="/">Home</router-link>
      <router-link to="/new">New</router-link>
      <router-link to="/settings">Settings</router-link>
    </div>
    <router-view/>
    <div id="footer-area">
      <p>All Rights Reserved @ Tahmidur Rahman</p>
    </div>
  </div>
</template>

<style>
@import './assets/bootstrap.min.css';
@import './assets/styles.css';

</style>
