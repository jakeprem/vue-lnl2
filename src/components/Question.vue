<template>
  <div class="col">
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
</template>

<script>
export default {
    name: 'Question',
    props: ['question']
}
</script>

<style>

</style>
