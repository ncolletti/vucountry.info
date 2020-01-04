import Vue from 'vue';
import Vuex from 'vuex';
// import regions from './regions';


import axios from 'axios';

// configure Vuex for modules
Vue.use(Vuex);

const store = new Vuex.Store({
    state: () => ({
        // insert state here
        allRegions: '',
        selectedRegion: '',
        search: '',
    }),
    getters: {
        allRegions: state => {
            return state.allRegions;
        },
        selectedRegion: state => {
            return state.selectedRegion;
        },
        selectedFlag: state => {
            return state.selectedRegion.flag;
        }
    },
    actions: {
        async setAllRegions(){
            console.log('running')
            return axios.get('https://restcountries.eu/rest/v2/all')
            .then(result => {
              store.commit('ALL_REGIONS', result)
            })
        },
        
    },
    mutations: {
        SET_REGION(state, choice) {
            window.console.log('setting region', choice)
            state.selectedRegion = choice;
        },
        setRegions(state, choice) {
            state.selectedRegion = choice;
        },
        ALL_REGIONS(state, regions) {
            // Vue.set(state.allRegions, regions.data);
            state.allRegions = regions.data;
        }
    }
    
})

export default store;