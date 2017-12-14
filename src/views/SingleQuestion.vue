<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <question :question="loadedQuestion"></question>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Question from '@/components/Question'

export default {
  components: {
    Question
  },
  computed: {
    ...mapGetters([
      'questions'
    ]),
    loadedQuestion() {
      return this.questions[this.$route.params.id]
    }
  }
}
</script>

<style>

</style>
