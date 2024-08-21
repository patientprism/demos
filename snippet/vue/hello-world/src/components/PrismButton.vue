<script setup>
const click = () => {
    if (!window.$prism) {
      alert('Prism SDK is not loaded');

      return;
    }

    try {
      window.$prism.submission.init();

      alert('Successfully called out to the Prism SDK');
    } catch (e) {
      alert('Failed to call out to the Prism SDK. Error: ' + e);
    }
}
</script>

<template>
    <button @click="click">Verify Prism SDK</button>
</template>

<style scoped>
button {
    background-color: hsla(160, 100%, 37%, 1);;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 8px;
    cursor: pointer;
}
</style>