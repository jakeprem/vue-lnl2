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
                          <li v-for="(link, index) in newQuestion.links">
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
                  <td colspan=2><button @click="addQuestion">Add question</button></td>
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
              <span @click="questions.splice(index, 1)"><strong>X</strong></span>
            </li>
          </ul>
          
          
        </div>
        
  </div>
</template>

<script>
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
        questions: [],
        enableValidation: false
      }
    },
    methods: {
      loadLink(dest) {
        if (dest.startsWith('http://') || dest.startsWith('https://')) {
          window.open(dest)
        } else {
          window.open('https://' + dest)
        }

        
      },
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
      addQuestion() {
        if (this.enableValidation && !this.isValidQuestion(this.newQuestion)) {
          return
        }

        this.questions.push(this.newQuestion)
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
      },
      presetQuestions() {
        this.questions = [
          {
            title: 'Frontend',
            description: 'Javascript and such',
            isRoot: true,
            links: [
              {
                title: 'Vue.js',
                dest: 'https://vuejs.org/'
              },
              {
                title: 'Elm',
                dest: 'http://elm-lang.org/'
              },
              {
                title: 'React',
                dest: 'https://reactjs.org/'
              }
            ]
          },
          {
            title: 'Backend',
            description: 'Runs on your server?',
            isRoot: true,
            links: [
              {
                title: 'Phoenix/Elixir',
                dest: 'http://phoenixframework.org/'
              },
              {
                title: 'Django/Python',
                dest: 'https://www.djangoproject.com/'
              },
              {
                title: 'Flask/Python',
                dest: 'http://flask.pocoo.org/'
              }
            ]
          },
          {
            title: 'Nativeish',
            description: 'Apps and such',
            isRoot: true,
            links: [
              {
                title: 'Electron',
                dest: 'www.google.com'
              },
              {
                title: 'Android',
                dest: 'www.google.com'
              },
              {
                title: 'iOS',
                dest: 'www.google.com'
              }
            ]
          }
        ]
      }
    },
    computed: {
      rootQuestions() {
        return this.questions.filter(question => question.isRoot);
      }
    }
  }
</script>

<style>

</style>
