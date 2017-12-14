<template>
  <div class="container">
        <div class="row">
          <div class="col" v-for="question in questions" :key="question.title">
              <div class="card" style="width: 20rem;">
                  <div class="card-block">
                    <h4 class="card-title">{{question.title}}</h4>
                    <p class="card-text">{{question.description}}</p>
                    <table>
                      <tr v-for="link in question.links" :key="link.title">
                        <td>
                          <a href="#" class="btn btn-primary" @click="loadLink(link.dest)">{{link.title}}</a>
                          <a :href="link.dest">{{link.title}}</a>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'QuestionCardList',
  props: ['questions']
}
</script>

<style>

</style>
