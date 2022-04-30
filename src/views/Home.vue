<template>
  <button @click="btn">点我切换</button>
  <v-switch :case="name">
    <template #foo> <div>foo</div> </template>
    <template #bar> <div>bar</div> </template>
    <template #bottom> <div>bottom</div> </template>
  </v-switch>
</template>

<script setup>
import VSwitch from "../components/VSwitch.vue";
import { ref } from "vue";

let name = ref("foo");
const btn = () => {

  name.value == "foo"
    ? (name.value = "bar")
    : name.value == "bar"
      ? (name.value = "bottom")
      : (name.value = "foo");

};


</script>
