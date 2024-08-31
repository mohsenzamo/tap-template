<script setup>
import TabBar from "../components/TabBar.vue";
</script>
<template>
  <div class="w-screen h-screen flex flex-col justify-end relative">
    <img
      src="../assets/Gold-coin.png"
      class="w-1/2 h-auto absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2"
    />

    <div class="flex items-center justify-center gap-1 mb-[50px] text-[#F5F5F5]">
      <img src="../assets/flash.png" class="w-[40px] h-auto" />
      <p class="text-base font-semibold">
        <span>2000</span>
        /
        <span>2000</span>
      </p>
    </div>
    <TabBar />
  </div>
</template>
