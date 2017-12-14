<template>
  <div class="col">
    <div class="card" style="width: 20rem;">
      <div class="card-block">
        <h4 class="card-title">{{question.title}}</h4>
        <p class="card-text">{{question.description}}</p>
        <table>
          <tr v-for="link in question.links" :key="link.title">
            <td>
              <router-link :to="questionLink(link.dest)" class="btn btn-primary">
                {{link.title}}
              </router-link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Question',
    props: ['question'],
    methods: {
        questionLink(dest) {
            return `question/${dest}`
        }
    }
}
</script>

<style>

</style>
