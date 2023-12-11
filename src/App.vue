

<template>
  <div class="modal-wrap">
    <Sidebar v-model:visible="store.visibleModal" :dismissable="false" :pt="{mask:'modal-wrap'}">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laborum assumenda reiciendis quisquam inventore amet. Exercitationem odit quis quas repellat! Officiis quisquam dicta sint veritatis corporis possimus debitis illum! Ad minus voluptatem facere, voluptas molestiae praesentium. Quis pariatur omnis, error illo exercitationem harum iure nulla placeat tempore repudiandae in suscipit.
    </Sidebar>
  </div>
  <div id="viz" class="border vis-canvas">
  </div>
  <button @click="ctxFill()">click fill</button>
</template>
<script setup lang="ts">
import * as vis from 'vis-network'
import { onMounted, ref } from 'vue';
import { dataList } from './vis/vis-data'
import { options } from './vis/vis-options'
import { registerEventListeners } from './vis/vis-event'
import { useVisStore } from './store/vis-index';
const store = useVisStore()
const visible = ref(store.visibleModal);
const ctxFill = () => {
  let canvasDraw = document.getElementsByTagName("canvas")[0];
  let ctx = canvasDraw.getContext('2d')
  if (canvasDraw) {
    if (ctx) {
      ctx.beginPath()
      ctx.moveTo(1000, 600)
      ctx.fillStyle = 'red'
      ctx.fillRect(0, 0, 1000, 600)
      console.log('in');
    } else {
      console.error(`Canvas context is not available for canvas`);
    }
  } else {
    console.error('Canvas elements not found.');
  }
}

onMounted(() => {
  // 調用函數註冊事件監聽器
  const container = document.getElementById('viz');
  if (container) {
    let vizs = new vis.Network(container, dataList, options)
    registerEventListeners(vizs, visible.value)
  }

})
</script>
<style scoped>
#viz {
  height: 500px;
  border: 1px solid #000;
}

</style>
