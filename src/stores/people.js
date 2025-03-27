import { defineStore } from 'pinia'

export const usePeopleStore = defineStore('people', {
  state: () => ({
    list: [],
    recentPeople: ['Sam', 'Jenny', 'Gavin'],
  }),
  actions: {
    addPerson(person) {
      this.list.push(person)
    },
  },
  getters: {
    availablePeople: (state) => {
      return state.recentPeople.filter((name) => !state.list.includes(name))
    },
  },
})
