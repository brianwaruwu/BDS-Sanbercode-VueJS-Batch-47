<template>
  <h1>Halaman Dashboard</h1>
  <button @click="counter.minCard(1)" class="btn btn-danger mr-3">-</button>
  <button @click="counter.minCard(2)" class="btn btn-danger">--</button>
  <p>Nilai Keranjang {{ counter.count }}</p>
  <button @click="counter.addCard(1)" class="btn btn-primary mr-3">+</button>
  <button @click="counter.addCard(2)" class="btn btn-primary">++</button>


  <p>Jumlah keranjang bernilai : {{ counter.Ganjilataugenap }}</p>
</template>
<script setup>
import { useCounterStore } from "../stores/counter";


const counter = useCounterStore();
</script>