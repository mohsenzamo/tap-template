<script setup>
import TabBar from "../components/TabBar.vue";
import Tabs from "../components/Tabs.vue";
</script>
<template>
  <div class="w-screen h-screen flex flex-col justify-end relative">
    <div class="grow py-[40px] flex flex-col items-center">
      <Tabs />

      <div
        class="bg-[#f5f5f5] w-[90%] grow rounded-xl bg-opacity-45 flex flex-col gap-[20px] p-2"
      >
        <div class="bg-[#e8e2e2] w-full rounded-lg flex items-center p-2 h-[80px] gap-[10px]">
          <img src="../assets/Gold-coin.png" class="w-[50px] h-[50px]" />
          <div class="flex flex-col">
            <p class="text-sm">Join The Telegram</p>
            <p class="text-xs">1,000</p>
          </div>
        </div>
      </div>
    </div>
    <TabBar />
  </div>
</template>
