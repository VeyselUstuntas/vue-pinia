import { defineStore } from "pinia";

export const useJournalStore = defineStore("journalStore",{
    state: () => ({
        journal:[
            {id:1, journal:"Bugün Hava Bulutlu", date:"25.12.2024", isFav:false},
            {id:2, journal:"Bugün Pinia Uygulamasına Başladık", date:"26.12.2024", isFav:false},
            {id:1, journal:"Bugün Hava Bulutlu", date:"25.12.2024", isFav:true}
        ],
        name:"Ankaragücü"
    })
});