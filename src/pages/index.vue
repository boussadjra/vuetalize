<script setup lang="ts">
const router = useRouter();
router.push("/home");
</script>
<template>
  <div>
    <!-- svg loader-->
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol id="check" viewBox="0 0 16 16">
        <path
          d="M5.172 12.172a4 4 0 005.656 0l.708-.708a4 4 0 000-5.656l-8-8-.708.708 8 8a3 3 0 010 4.242l-.708.708z"
        />
      </symbol>
      <symbol id="info" viewBox="0 0 16 16">
        <path
          d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 1a6 6 0 110 12A6 6 0 018 2zm.03 3a.97.97 0 00-.97.97v4.06a.97.97 0 001.94 0V6.97A.97.97 0 008.03 6zm0 6a1 1 0 100 2 1 1 0 000-2z"
        />
      </symbol>
      <symbol id="exclamation-triangle" viewBox="0 0 16 16">
        <path
          d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 1a6 6 0 110 12A6 6 0 008 2zm.03 3a.97.97 0 00-.97.97v4.06a.97.97 0 001.94 0V6.97A.97.97 0 008.03 5zm0 6a1 1 0 100 2 1 1 0 000-2z"
        />
      </symbol>
      <symbol id="exclamation-circle" viewBox="0 0 16 16">
        <path
          d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 1a6 6 0 110
            12A6 6 0 008 2zm.03 3a.97.97 0 00-.97.97v4.06a.97.97 0 001.94 0V6.97A.97.97 0 008.03 5zm0 6a1 1 0 100 2 1 1 0 000-2z"
        />
      </symbol>
    </svg>
  </div>
</template>

<style scoped></style>
