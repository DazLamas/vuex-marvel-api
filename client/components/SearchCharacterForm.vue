<template>
  <div class="search-character__form">
    <form @submit.prevent
      @submit="handleSearch()">

      <div class="ui action input">
        <input v-model="name"
          placeholder="Character Name"
          type="text"
          required />

          <button class="ui icon pink button">
            <i class="search icon"></i>
          </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: ''
    }
  },
  methods: {
    handleSearch () {
      console.log('component', this.name);
      this.$store.dispatch('FETCH_CHARACTERS', this.name);
    }
    // handleSearch method  dispatches an action to fetch characters. 
    // The "fetch characters action" will then update the store’s data state with the API results.
  }
}
// Data is used to define the properties that will be added to Vue’s reactivity system. 
//This means that when the value of the property changes, the view will “react”, updating to match the new values 
//and vice-versa. Also known as two-way binding. We will be using the name property to tell our action what Marvel character name to fetch.
</script>
