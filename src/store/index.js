import Vue from 'vue';
import Vuex from 'vuex';
// import regions from './regions';


import axios from 'axios';

// configure Vuex for modules
Vue.use(Vuex);

const store = new Vuex.Store({
    state: () => ({
        isLoaded: false,
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
            return axios.get('https://restcountries.eu/rest/v2/all')
            .then(result => {
              store.commit('DATA_LOADED', true)
              store.commit('ALL_REGIONS', result)
              let random = store.state.allRegions[Math.floor(Math.random() * store.state.allRegions.length)];
              store.commit('SET_REGION', random)
              window.console.log(`${JSON.stringify(random)}`)
            })
        },
        
    },
    mutations: {
        SET_REGION(state, choice) {
            state.selectedRegion = choice;
        },
        ALL_REGIONS(state, regions) {
            state.allRegions = regions.data;
        },
        DATA_LOADED(state, status) {
            state.isLoaded = status;
        }
    }
    
})

export default store;