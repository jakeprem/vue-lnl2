import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    questions: []
}

const types = {
    ADD_QUESTION: 'ADD_QUESTION',
    DELETE_QUESTION: 'DELETE_QUESTION',
    PRESET_QUESTIONS: 'PRESET_QUESTIONS'
}

const getters = {
    questions: state => state.questions,
    rootQuestions: state => state.questions.filter(x => x.isRoot === true)
}

const actions = {
    addQuestion({ commit }, newQuestion) {
        commit(types.ADD_QUESTION, newQuestion)
    },
    deleteQuestion({ commit }, question) {
        commit(types.DELETE_QUESTION, question)
    },
    presetQuestions({ commit }) {
        let questions = [
            {
              title: 'Frontend',
              description: 'Javascript and such',
              isRoot: true,
              links: [
                {
                  title: 'Vue.js',
                  dest: '1'
                },
                {
                  title: 'Elm',
                  dest: '2'
                },
                {
                  title: 'React',
                  dest: '3'
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
                  dest: '1'
                },
                {
                  title: 'Django/Python',
                  dest: '2'
                },
                {
                  title: 'Flask/Python',
                  dest: '3'
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
                  dest: '1'
                },
                {
                  title: 'Android',
                  dest: '2'
                },
                {
                  title: 'iOS',
                  dest: '3'
                }
              ]
            }
          ]
        commit(types.PRESET_QUESTIONS, questions)
    }

}

const mutations = {
    [types.ADD_QUESTION] (state, question) {
        state.questions.push(question)
    },
    [types.DELETE_QUESTION] (state, question) {
        let questionIndex = state.questions.indexOf(question)
        if (questionIndex != -1) {
            state.questions.splice(questionIndex, 1)
        }
    },
    [types.PRESET_QUESTIONS] (state, questions) {
        state.questions = questions
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    strict: false
});