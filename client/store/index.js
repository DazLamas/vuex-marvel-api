import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

//The state refers to an object where we define the data for our application structure
const state = {
  data: []
}// will contain character data that is returned from the Marvel API.

// events that update the store (only way)
const mutations = {
  RECEIVE_CHARACTERS (state, { characters }) {
    state.data = characters
  }
}

//Functions that will commit changes to the store.
//Instead of mutating the store’s state directly, actions commit mutations, which then updates the state. 
//Actions are called with a dispatch call, ex: this.$store.dispatch('FETCH_CHARACTERS')
const actions = {
  async FETCH_CHARACTERS ({ commit }, name) {
    const url = `http://localhost:8080/api/characters?limit=12&name=${name}`
    const { data } = await axios.get(url)
    commit('RECEIVE_CHARACTERS', { characters: data.results })
  }
}//actions can be asynchronous so this is where we will put our API calls.
// In our action FETCH_CHARACTERS, we are doing an asynchronous call to the API using Axios. Then when the async call is finished, we do a commit to the RECEIVE_CHARACTERS mutation with the API data results.


// Helper functions that retrieve data from our state
const getters = {
  characters: state => {
    return state.data.map(data => {
      return {
        name: data.name,
        url: data.urls[1] ? data.urls[1].url : data.urls[0].url,
        image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
        description: data.description === '' ? 'No description listed for this character.' : data.description
      }
    })
  }
}
// In our application, we are using a getter to take the computed data and return a simplified object that we can use.
// The reason to use a getter here is because sometimes an API will return data we do not need or the data that we do need is deeply nested.

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store

// Vuex allows us to divide our store into modules. Each module can contain its own state, mutations, actions, getters, and even nested modules — it’s fractal all the way down. (https://vuex.vuejs.org/en/modules.html)