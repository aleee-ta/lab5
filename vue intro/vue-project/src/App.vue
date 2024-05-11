<script setup>
    import Clicker from './Clicker.vue';
    const onEvent = (amount) => {
        alert('Clicker ' + amount + ' clicked!')
    }
</script>

<template>
    <div>
        <Clicker v-for="i in 100" :amount="i" :key="i" @someEvent="onEvent">
            <button>Custom!</button>
        </Clicker>
    </div>
</template>