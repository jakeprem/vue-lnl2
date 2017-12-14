<template>
  <div>
        <question-card-list :questions="rootQuestions"></question-card-list>
        <hr>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <!-- Using h3 here is bad for accessibility -->
              <h3 @click="presetQuestions">Add new question</h3>
              <table>
                <tr>
                  <td><label>Title</label></td>
                  <td><input type="text" v-model="newQuestion.title"></td>
                </tr>
                <tr>
                  <td><label>Description</label></td>
                  <td><input type="text" v-model="newQuestion.description"></td>
                </tr>
                <tr>
                  <td>Links</td>
                  <td>
                      <template v-if="newQuestion.links.length > 0">
                        <ul>
                          <li v-for="(link, index) in newQuestion.links" :key="index">
                            {{link.title}}-> {{link.dest}}
                            <span @click="newQuestion.links.splice(index, 1)"><strong>X</strong></span>
                          </li>
                        </ul>
                      </template>
                      <template v-else>
                        No links
                      </template>
                  </td>
                </tr>
                <tr>
                  <td>Root?</td>
                  <td><input type="checkbox" v-model="newQuestion.isRoot"></td>
                </tr>
                <tr>
                  <td colspan=2><button @click="saveQuestion">Add question</button></td>
                </tr>
              </table>
            </div>
            <div class="col-sm-6">
              <h4>Links for new question</h4>
              <table>
                <tr>
                  <td><label for="">Title</label></td>
                  <td><input type="text" v-model="newLink.title"></td>
                </tr>
                <tr>
                  <td><label for="">Destination</label></td>
                  <td><input type="text" v-model="newLink.dest"></td>
                </tr>
                <tr>
                  <td colspan=2><button @click="addLink">Add link</button></td>
                </tr>
              </table>
            </div>
          </div>

          <br>
          <label>Enable validation?</label>&nbsp;<input type="checkbox" v-model="enableValidation">
          <br>

          <ul>
            <li v-for="(question, index) in questions" :key="index">
              {{question.title}} | {{question.description}}
              <span @click="deleteQuestion(question)"><strong>X</strong></span>
            </li>
          </ul>
          
          
        </div>
        
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import QuestionCardList from '@/components/QuestionCardList.vue'

export default {
  components: {
    QuestionCardList
  },
  data() {
    return {
      newQuestion: {
        title: '',
        description: '',
        links: [],
        isRoot: false
      },
      newLink: {
        title: '',
        dest: ''
      },
      enableValidation: false
      }
    },
    methods: {
      ...mapActions([
        'addQuestion',
        'deleteQuestion',
        'presetQuestions'
      ]),
      isValidQuestion(question) {
        if (question.title === '') return false;
        if (question.links.length === 0) return false;

        return true;
      },
      isValidLink(link) {
        if (link.title === '') return false;
        if (link.dest === '') return false;

        return true;
      },
      saveQuestion() {
        if (this.enableValidation && !this.isValidQuestion(this.newQuestion)) {
          return
        }

        this.addQuestion(this.newQuestion)
        this.resetNewQuestion()
      },
      addLink() {
        if (this.enableValidation && !this.isValidLink(this.newLink)) {
          return
        }

        this.newQuestion.links.push(this.newLink)
        this.resetNewLink()
      },
      resetNewLink() {
        this.newLink = {
          title: '',
          dest: ''
        }
      },
      resetNewQuestion() {
        this.newQuestion = {
          title: '',
          description: '',
          links: [],
          isRoot: false
        }
      }
    },
    computed: {
      ...mapGetters([
        'questions',
        'rootQuestions'
      ])
    }
  }
</script>

<style>

</style>
