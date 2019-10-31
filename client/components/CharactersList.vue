<template>
  <div v-if="!!characters.length" class="ui characters-list cards">
    <div v-for="character in characters" :key="character.name" class="ui card fadeIn-animation">
      <div class="image">
          <img :src="character.image" />
      </div>
      <div class="content">
        <div class="header">{{character.name}}</div>
        <div class="description">
          {{character.description}}
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
          <a target="_blank" :href="character.url">
            <button class="ui icon purple tiny button">
                More Info
            </button>
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters([
    'characters'
  ])
}
</script>

<style>
.characters-list.cards {
  margin-top: 2em;
  justify-content: center;
}
.characters-list.cards .image {
    position: relative;
    width: 100%;
    height: 246px;
    overflow: hidden;
}
.characters-list.cards .image img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: auto;
  -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
}
.ui.card, .ui.cards > .card {
  width: 364px;
}

/* The component will display and render the search results from our store’s state. In this component, we use the characters getter that we created earlier in our store file. Using a getter allows us to retrieve and use our state data in a clean and minimal way instead of doing a lot of data manipulation to get what we want.
Furthermore, we access our characters getter as a computed property because we want our component to always get the current state once it gets altered. So when the user searches a different Marvel character, the list will be updated because our CharactersList component knows to use the latest and current state data. */

</style>