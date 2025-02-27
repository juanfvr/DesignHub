<script setup>
import categories from '@/Categories.js';

</script>

<template>
<nav>
    <div class="List">
        <button
        class="ItemList"
        v-for="category in Object.keys(categories)"
        >
            {{ category }}
        </button>
    </div>
</nav>
</template>

<style scoped>
.List {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
}

.ItemList {
    background: rgba(0, 0, 0, 0);
    padding: .5em 2em;
    border: 1px solid white;
    border-radius: .5em;
    text-transform: capitalize;
    transition: all .1s ease-in-out;
    user-select: none;
    list-style-type: none;
    font-size: 1em;
    font-weight: 500;
    color: white;

    &:focus, &:hover {
        background-color: white;
        color: black;
        cursor: pointer;
        box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.377);
    }
}
</style>