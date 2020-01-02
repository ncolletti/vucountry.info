import Vue from 'vue';
import Vuex from 'vuex';
import regions from './regions';

// configure Vuex for modules
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // insert state here
        allRegions: regions.allRegions,
        selectedRegion: regions.selectedRegion,
        search: '',
    },
    getters: {
        allRegions: state => {
            return state.allRegions;
        },
        randomRegion: state => {
            return state.allRegions[Math.floor(Math.random() * state.allRegions.length)];
        },
        selectedRegion: state => {
            return state.selectedRegion;
        },
        selectedFlag: state => {
            return state.selectedRegion.flag;
        }
    },
    actions: {
        // fetch() {
        //   // return the Promise via `store.dispatch()` so that we know
        //   // when the data has been fetched
        //   return fetchItem(id).then(item => {
        //     commit('setItem', { id, item })
        //   })
        // }
    },
    mutations: {
        setRegion(state, choice) {
            state.selectedRegion = choice;
        },
        setRegions(state, choice) {
            state.selectedRegion = choice;
        }
    }
    // modules can split up state into multiple objects
})

export default store;