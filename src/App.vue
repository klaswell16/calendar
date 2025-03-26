<script>
export default {
  data() {
    return {
      isActive: false,
      showSam: true,
      showJenny: true,
      showGavin: true,

      people: ['Donny'],
      newPerson: '',
    }
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive
    },
    addPerson() {
      this.people.push(this.newPerson)
      this.newPerson = ''
    },
    addSam() {
      this.people.push('Sam')
      this.showSam = false
    },
    addJenny() {
      this.people.push('Jenny')
      this.showJenny = false
    },
    addGavin() {
      this.people.push('Gavin')
      this.showGavin = false
    },
  },
}
</script>

<template>
  <header>March 2nd</header>
  <hr />
  <h2>Event: Dinner at Grindstone</h2>
  <hr />
  <h3>
    Add People
    <button @click="toggle" :class="{ active: isActive }">+</button>
  </h3>
  <li v-for="person in people">
    {{ person }}
  </li>
  <main>
    <div v-show="isActive">
      <input v-model="newPerson" type="text" placeholder="Enter Person" />
      <button @click="addPerson">Add Person</button>

      <h4>People recently Added:</h4>

      <div v-show="showSam">Sam <button @click="addSam">+</button></div>
      <div v-show="showJenny">Jenny <button @click="addJenny">+</button></div>
      <div v-show="showGavin">Gavin <button @click="addGavin">+</button></div>
    </div>
  </main>
</template>

<style scoped>
header {
  font-size: 300%;
}
</style>
