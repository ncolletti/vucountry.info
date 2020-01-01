import Vue from 'vue';
import Vuex from 'vuex';
import regions from './regions';

// configure Vuex for modules
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // insert state here
        allRegions: regions.allRegions,
        selectedRegion: '',
        search: ''
    },
    getters: {
        allRegions: state => {
            return state.allRegions;
        },
        randomRegion: state => {
            return state.allRegions[Math.floor(Math.random() * state.allRegions.length)];
        }
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