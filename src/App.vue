<script>
export default {
  data() {
    return {
      month: '',
      day: '',
      hours: Array.from({ length: 24 }, (_, i) => i),
      selectedHour: null,
      isActive: false,
      showSam: true,
      showJenny: true,
      showGavin: true,
      event: '',
      people: [],
      newPerson: '',
    }
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive
    },
    addPerson() {
      if (this.newPerson.trim()) {
        this.people.push(this.newPerson.trim())
        this.newPerson = ''
      }
    },
    deletePerson(index) {
      this.people.splice(index, 1)
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
    formatHour(hour) {
      if (hour === null) return ''
      return String(hour).padStart(2, '0') + ':00'
    },
  },
}
</script>

<template>
  <div class="zoom-container">
    <header>
      Date:
      <input v-model="month" type="text" style="width: 50px" class="monthText" placeholder="M" />
      /
      <input v-model="day" type="text" style="width: 50px" class="dayText" placeholder="D" />
    </header>
    <hr />
    <div>
      <h2>
        Event:
        <input v-model="event" type="text" class="eventText" placeholder="Enter Name of Event" />
      </h2>
    </div>

    <hr />
    <h3>
      Add People
      <button @click="toggle" :class="{ active: isActive }">+</button>
    </h3>
    <ul>
      <li v-for="(person, index) in people" :key="index">
        {{ person }}
        <button @click="deletePerson(index)">-</button>
      </li>
    </ul>
    <main>
      <div v-show="isActive">
        <input
          v-model="newPerson"
          type="text"
          placeholder="Enter Person"
          @keyup.enter="addPerson"
        />
        <button @click="addPerson">Add Person</button>

        <h4>People recently Added:</h4>
        <div v-show="showSam">Sam <button @click="addSam">+</button></div>
        <div v-show="showJenny">Jenny <button @click="addJenny">+</button></div>
        <div v-show="showGavin">Gavin <button @click="addGavin">+</button></div>
      </div>
      <hr />
      <div>
        <label for="hour-select">Time:</label>
        <select id="hour-select" v-model="selectedHour">
          <option v-for="hour in hours" :key="hour" :value="hour">
            {{ formatHour(hour) }}
          </option>
        </select>
        <p>Hour: {{ formatHour(selectedHour) }}</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.zoom-container {
  transform: scale(1.5);
  transform-origin: 0 0;
  width: 66.67%;
  padding: 20px;
}

header {
  font-size: 300%;
}
.eventText {
  background-color: transparent;
  border: none;
  outline: none;
  color: whitesmoke;
  font-size: 22px;
}
.eventText:focus {
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
}
.monthText,
.dayText {
  background-color: transparent;
  border: none;
  outline: none;
  color: whitesmoke;
  font-size: 40px;
}
.monthText:focus,
.dayText:focus {
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
}
button {
  cursor: pointer;
}
</style>
