<script>
import { usePeopleStore } from '@/stores/people'
export default {
  setup() {
    const peopleStore = usePeopleStore()
    return { peopleStore }
  },
  provide() {
    return {
      people: this.people,
      onAddPerson: this.addPersonFromChild,
    }
  },
  data() {
    return {
      month: '',
      day: '',
      hours: Array.from({ length: 24 }, (_, i) => i),
      minutes: Array.from({ length: 12 }, (_, i) => i * 5),
      selectedHour: null,
      selectedMinute: null,
      event: '',
      people: [],
      showSam: true,
      showJenny: true,
      showGavin: true,
    }
  },
  methods: {
    deletePerson(index) {
      const deletedName = this.people[index]
      this.people.splice(index, 1)
      if (deletedName === 'Sam') this.showSam = true
      if (deletedName === 'Jenny') this.showJenny = true
      if (deletedName === 'Gavin') this.showGavin = true
    },
    formatTime(hour, minute) {
      if (hour === null || minute === null) return '--:--'
      return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
    },
    addPersonFromChild(person) {
      this.people.push(person)
      if (person === 'Sam') this.showSam = false
      if (person === 'Jenny') this.showJenny = false
      if (person === 'Gavin') this.showGavin = false
    },
    navigateToAddPeople() {
      this.$router.push({
        path: '/add-people',
        query: {
          people: JSON.stringify(this.people),
        },
      })
    },
  },
  computed: {
    people() {
      return this.peopleStore.list
    },
    displayTime() {
      return this.formatTime(this.selectedHour, this.selectedMinute)
    },
  },
}
</script>

<template>
  <div>
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
      <button @click="navigateToAddPeople">+</button>
    </h3>
    <ul>
      <li v-for="(person, index) in people" :key="index">
        {{ person }}
        <button @click="deletePerson(index)">-</button>
      </li>
    </ul>

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

    <router-view />
  </div>
</template>

<style scoped>
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
.monthText,
.dayText {
  background-color: transparent;
  border: none;
  outline: none;
  color: whitesmoke;
  font-size: 40px;
}
button,
.add-button {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
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
