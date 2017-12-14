<template>
  <div class="container">
        <div class="row">
          <question v-for="(question, index) in questions" :key="index" :question="question"></question>
        </div>
      </div>
</template>

<script>
import Question from '@/components/Question.vue'

export default {
  name: 'QuestionCardList',
  props: ['questions'],
  components: {
    Question
  }
}
</script>

<style>

</style>
