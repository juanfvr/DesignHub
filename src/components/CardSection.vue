<script setup>
defineProps(['items'])

function acess(link) {
    window.open(link)
}

</script>

<template>
    <section 
    class="card" 
    v-for="item in items">
        <div 
        class="card-header" >
            <div 
            class="ToolIcon">
                <img 
                class="icon" 
                :src="item.icon" alt="">
            </div>
            <div 
            class="ToolName">
                <span>
                    {{ item.nome }}
                </span>
            </div>
        </div>
        <CardHeader />
        <button 
        @click="acess(item.link)" 
        class="button">Acessar
        </button>
    </section>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    gap: .5em;
    width: 280px;
    height: fit-content;
    background-color: var(--secondary);
    padding: 16px;
    border-radius: 8px;

    @media (max-width: 624px) {
        width: 100%;
    }
}

.card-header {
    display: flex;
    gap: 8px;
    height: 32px;
    align-items: center;
}

.ToolIcon {
    width: 40px;
    height: 32px;
    background: var(--primary);
    border-radius: 8px;
    user-select: none;
}

.icon {
    width: 100%;
    object-fit: cover;
}

.ToolName {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 8px;
    border-radius: 8px;
    user-select: none;
    background: var(--primary);
}

.button {
    background: var(--primary);
    border: none;
    padding: 1em;
    border-radius: 8px;
    user-select: none;
    transition: all .1s ease-in-out;

    &:hover {
        cursor: pointer;
        background: white;
        color: var(--primary);
        box-shadow: 0px 0px 1em rgba(255, 255, 255, 0.171);
    }
}
</style>
