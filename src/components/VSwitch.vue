

<template>
  <Vnode />
</template>

<script setup>
import { h,defineProps,useSlots } from "vue";
const props = defineProps(['case']),
slots = useSlots()

const Vnode = ()=> slots[props.case]()

</script>

&&

<script>
import { h } from "vue";
export default {
  props: {
    case: { type: String, required: true },
  },
  setup(props, { slots }) {
    return () => {
      return slots[props.case]();
    };
  },
};
</script>