<script setup>

</script>

<template>
    <div class="layout">
        <slot></slot>
    </div>
</template>

<style scoped>
.layout {
    width: 100%;
    display: flex;
    gap: 4em;
    align-items: center;
    flex-direction: column;
}
</style>