<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="header-logo">
      <h1>Discrete Mathimatics Logarithms</h1>
    </div>
    <nav>
      <ul>
        <li>
          <a href="/chine">Chines theorem</a>
        </li>
        <li>
          <a href="/gcd">GCD</a>
        </li>
        <li>
          <a href="/lcm">LCM</a>
        </li>
        <li>
          <a href="/prime">Prime Factors</a>
        </li>
      </ul>
    </nav>
  </header>

   <div class="router">
      <RouterView />
    </div>
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #000000;
}
.header-logo {
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background-color: #000000; */
}
h1 {
  font-size: 30px;
  font-weight: bold;
  color: white;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background-color: #5d7ddb; */
}
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background-color: #5d7ddb; */
}
li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  /* background-color: #ee410c; */
  list-style: none;
  padding: 10px;
  margin: auto;
}
a {
  text-decoration: none;
  color: white;
}
li:hover {
  background-color: #ee410c;
  border-radius: 10px;
  transition: 0.5s;
  cursor: pointer;
}
</style>
