<script setup>
  import { reactive } from 'vue';

  const estado = reactive ( {
    operacao: '+',
    numero1: 0,
    numero2: 0,
  })

  const soma = () => {
    return parseInt(estado.numero1) + parseInt(estado.numero2)
  }

  const subtracao = () => {
    return estado.numero1 - estado.numero2
  }

  const divisao = () => {
    return estado.numero1 / estado.numero2
  }

  const multi = () => {
    return estado.numero1 * estado.numero2
  }

  const operacoes = () => {
    const { operacao } = estado;
    switch (operacao) {
      case '+':
        return soma();
      case '-':
        return subtracao();
      case '/':
        return divisao();
      case 'x':
        return multi();
    }
  }

  const valorPadrao = () => {
    if(estado.numero1 === '') {
      estado.numero1 = 0
    }
  }

</script>

<template>
  <div class="container">
    <h1>Calculadora</h1>
    <label for="">Primeiro Numero</label>
    <input type="number" required @keyup="evento => estado.numero1 = evento.target.value">
    <label for="">Segundo Numero</label>
    <input type="number" required @keyup="evento => estado.numero2 = evento.target.value">
    <select @change="evento => estado.operacao = evento.target.value">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="x">x</option>
      <option value="/">/</option>
    </select>
    <span>Resultado : <span v-if="operacoes() >= 0">{{operacoes()}}</span> <span v-else>Preencha os campos</span> </span>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    padding: 35px;
    max-width: 400px;
    gap: 35px;
    align-items: center;
    background-color: blueviolet;
    margin: 25vh auto;
  }

  input {
    padding: 8px;
    width: 80%;
  }

  label {
    font-size: 24px;
  }

  select {
    width: 50%;
    padding: 8px;
  }

  span {
    font-size: 24px;
  }
</style>