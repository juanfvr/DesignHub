<script setup>
import { ref } from 'vue';
import BaseLayout from './components/BaseLayout.vue';
import Categories from './components/Categories.vue';
import CardSection from './components/CardSection.vue';
import * as filter from './filter.js';

const displayedItems = ref(filter.allItems());


function filterByCategory(category) {
  displayedItems.value = filter.byCategory(category); 
}
</script>

<template>
<BaseLayout>
  <header>
    <div class="title">
        <h1>Design Hub</h1>
    </div>
    <Categories @filterByCategory="filterByCategory" />
  </header>
  <main >
    <CardSection :items="displayedItems" />
  </main>
  <footer class="footer">
    <span>
      Visite meu
      <a href="https://github.com/juanfvr" target="_blank">GitHub</a>
    </span>
  </footer>
</BaseLayout>
</template>

<style scoped>
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    width: 100%;
    height: fit-content;
}

main {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
    width: 100%;
    height: fit-content;

}

footer {
  padding: 2em 0;
}

.title {
    font-size: 1.2em;
    user-select: none;
}
</style>
