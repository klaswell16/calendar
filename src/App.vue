<script>
export default {
  data() {
    return {
      names: ['Sam', 'John'],
      isActive: false,
    }
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive
    },
    addName() {
      this.names.push('Tim')
    },
  },
}
</script>

<template>
  <header>March 2nd</header>
  <h2>Event: Dinner at Grindstone</h2>
  <h3>
    Add People
    <button @click="toggle" :class="{ active: isActive }">+</button>
  </h3>
  <main>
    <div v-show="isActive">
      <button @click="addName">Add</button>
      <h4>People Added:</h4>
      <h5 v-for="(name, i) in names" :key="i">
        {{ name }}
      </h5>
    </div>
  </main>
</template>

<style scoped>
header {
  font-size: 300%;
}
</style>
