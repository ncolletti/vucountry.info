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
        highlightedRegion: '',
        search: '',
        chosenRegions: [],
    }),
    getters: {
        allRegions: state => {
            return state.allRegions;
        },
        highlightedRegion: state => {
            return state.highlightedRegion;
        },
        selectedFlag: state => {
            return state.highlightedRegion.flag;
        },
        chosenRegions: state => {
            return state.chosenRegions;
        }
    },
    actions: {
        async setAllRegions(){
            return axios.get('https://restcountries.eu/rest/v2/all')
            .then(result => {
                // allows us to mark if the region is saved in our state for later
                // this data will not be mutated so we are saving the index value of regions on each object
                // to reference later
              result.data.forEach((region, i) => {
                region.saved = false;
                region.index = i;
              });

              store.commit('DATA_LOADED', true)
              store.commit('ALL_REGIONS', result)
              let random = store.state.allRegions[Math.floor(Math.random() * store.state.allRegions.length)];
              store.commit('SET_HIGHLIGHTED_REGION', random)
            })
        },
        addSavedRegion(state, region) {
            // save to browser local storage for persistence
            store.commit('ADD_REGION', region);
            if(window.localStorage && window.localStorage.getItem('vucountryinfo')) {
                let savedRegions = window.localStorage.getItem('vucountryinfo');
                savedRegions = JSON.parse(savedRegions);
                savedRegions.push(region);
                localStorage.setItem('vucountryinfo', JSON.stringify(savedRegions));
            } else if(window.localStorage) {
                localStorage.setItem('vucountryinfo', JSON.stringify([region]));
            }

        }

    },
    mutations: {
        SET_HIGHLIGHTED_REGION(state, choice) {
            state.highlightedRegion = choice;
        },
        ALL_REGIONS(state, regions) {
            state.allRegions = regions.data;
        },
        DATA_LOADED(state, status) {
            state.isLoaded = status;
        },
        ADD_REGION(state, region) {
            state.chosenRegions.push(region);
        },
        PREFETCH_REGIONS(state, regions) {
            state.chosenRegions = regions;
        }
    }

})

export default store;