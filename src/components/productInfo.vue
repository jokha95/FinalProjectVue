<script setup>
import { toRef } from "vue";
const props = defineProps(["product"]);
const productRef = toRef(props, "product");
</script>
<template>
  <section>
    <div>
      <h2 style="color: hsl(264, 87%, 35%)">
        # description: {{ productRef.description }}
      </h2>
      <h2 style="color: hsl(264, 87%, 35%)"># brand: {{ productRef.brand }}</h2>
      <h2 style="color: hsl(264, 87%, 35%)">
        # rating😍: {{ productRef.rating }}
      </h2>
      <h2 style="color: hsl(264, 87%, 35%)">
        # category: {{ productRef.category }}
      </h2>
      <h2 style="color: hsl(264, 87%, 35%)"># stock: {{ productRef.stock }}</h2>
    </div>
  </section>
</template>
