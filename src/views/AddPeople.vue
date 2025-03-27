<script>
export default {
  inject: ['people', 'onAddPerson'],
  props: {
    people: {
      type: Array,
      required: true,
      default: () => [],
    },
    onAddPerson: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      newPerson: '',
      recentPeople: ['Sam', 'Jenny', 'Gavin'],
    }
  },
  computed: {
    availablePeople() {
      return this.recentPeople.filter((name) => !this.people.includes(name))
    },
  },
  methods: {
    addPerson(name) {
      if (name) {
        this.onAddPerson(name)
      } else if (this.newPerson.trim()) {
        this.onAddPerson(this.newPerson.trim())
        this.newPerson = ''
      }
    },
  },
}
</script>

<template>
  <div class="add-people-page">
    <router-link to="/" class="back-button">← Back</router-link>

    <h2>Add People</h2>
    <div class="add-form">
      <input
        v-model="newPerson"
        type="text"
        placeholder="Enter new person"
        @keyup.enter="addPerson()"
      />
      <button @click="addPerson()">Add</button>
    </div>

    <h3>Recently Added:</h3>
    <div class="recent-people">
      <div v-for="name in availablePeople" :key="name" class="recent-person">
        {{ name }} <button @click="addPerson(name)">+</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.add-people-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  padding: 20px;
  z-index: 100;
}

.back-button {
  display: inline-block;
  margin-bottom: 20px;
  padding: 5px 10px;
  text-decoration: none;
  color: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-form {
  margin: 20px 0;
  display: flex;
  gap: 10px;
}

.add-form input {
  flex-grow: 1;
  padding: 8px;
}

.recent-people {
  margin-top: 15px;
}

.recent-person {
  margin: 5px 0;
  padding: 5px;
  background: #f0f0f0;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
}
</style>
