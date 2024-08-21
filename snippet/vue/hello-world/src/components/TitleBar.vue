<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  } 
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>Patient Prism demo</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 3.6rem;
  position: relative;
  top: -5px;
}

h3 {
  font-size: 1.4rem;
  position: relative;
  top: -15px;
  left: 5px
}

.greetings h1 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
