<script setup lang="ts">
defineProps({
    width: {
        type: Number,
        default: 500,
    },
    height: {
        type: Number,
        default: 400,
    },
})
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        viewBox="0 0 432 384"
        fill="none"
        class="rotate"
    >
        <path
            d="M219.897 103.248L146.523 230.363L216 350.772L308.021 191.386L400 32H261.005L219.897 103.248Z"
            fill="#ef476f"
        />
        <path d="M124.021 191.386L128.84 199.768L197.478 80.8258L225.68 32H216H32L124.021 191.386Z" fill="#ef476f" />
        <path d="M261.005 32C295.785 146.458 216 350.772 216 350.772L146.523 230.363L261.005 32Z" fill="#3B3486" />
        <path d="M225.68 32C79.1426 32 128.84 199.768 128.84 199.768L225.68 32Z" fill="#3B3486" />
    </svg>
</template>
