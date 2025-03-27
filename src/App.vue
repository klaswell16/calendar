<script>
export default {
  data() {
    return {
      month: '',
      day: '',
      hours: Array.from({ length: 24 }, (_, i) => i),
      minutes: Array.from({ length: 12 }, (_, i) => i * 5), // 0, 5, 10...55
      selectedHour: null,
      selectedMinute: null,
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
    formatTime(hour, minute) {
      if (hour === null || minute === null) return '--:--'
      return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
    },
    get displayTime() {
      return this.formatTime(this.selectedHour, this.selectedMinute)
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
      <div class="time-selector">
        <label>Time:</label>
        <div class="time-dropdowns">
          <select v-model="selectedHour">
            <option value="" disabled selected>HH</option>
            <option v-for="hour in hours" :key="'h' + hour" :value="hour">
              {{ String(hour).padStart(2, '0') }}
            </option>
          </select>
          :
          <select v-model="selectedMinute">
            <option value="" disabled selected>MM</option>
            <option v-for="minute in minutes" :key="'m' + minute" :value="minute">
              {{ String(minute).padStart(2, '0') }}
            </option>
          </select>
        </div>
        <div class="time-display">{{ displayTime }}</div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.zoom-container {
  transform: scale(2.5);
  transform-origin: 0 0;
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

.time-selector {
  margin-top: 10px;
}
.time-dropdowns {
  display: flex;
  align-items: center;
  gap: 5px;
}
.time-dropdowns select {
  padding: 5px;
  font-size: 16px;
}
.time-display {
  margin-top: 5px;
  font-size: 18px;
  font-weight: bold;
}
</style>
