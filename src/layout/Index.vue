<script setup lang="ts">
import { routes } from '@/router'


</script>

<template>
  <div class="layout df">
    <div class="navs fn df fdc">
      <router-link class="link df jcc aic mb10" v-for="item in routes.filter(v => v.path !== '/')" :to="item.path"
                   :key="item.path">{{ item.path }}
      </router-link>
    </div>
    <div class="app-main f1 p15">
      <router-view />
    </div>
  </div>

</template>

<style lang="scss" scoped>

.layout {
  height: 100%;

  .navs {
    width: 140px;
    background-color: aqua;

    .link {
      height: 40px;
      background: sienna;
      color: white;
    }
  }

}

.router-link-active {
  background: #ba123d !important;
}


</style>