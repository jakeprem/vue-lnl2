<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <question :question="question"></question>
      </div>
    </div>
  </div>
</template>

<script>
import Question from '@/components/Question'

export default {
  components: {
    Question
  },
  data() {
    return {
      question: {}
    }
  }
}
</script>

<style>

</style>
