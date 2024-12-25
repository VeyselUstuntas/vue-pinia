import { defineStore, type StoreDefinition } from "pinia";

export interface Journal {
    id: number;
    journal: string;
    date: string;
    isFav: boolean;
}

export interface JournalState {
    journal: Journal[];
}

export const useJournalStore = defineStore("journalStore", {
    state: (): JournalState => ({
        journal: [
            { id: 1, journal: "Bugün Hava Bulutlu", date: "25.12.2024", isFav: false },
            { id: 2, journal: "Bugün Pinia Uygulamasına Başladık", date: "26.12.2024", isFav: true },
        ],
    }),
    getters: {
        favs(): Journal[] {
            return this.journal.filter(diary => diary.isFav);
        },
        journalLength(): number {
            return this.journal.length;
        },
        journalFavCount(): number {
            return this.journal.reduce((pre, current) => {
                return current.isFav ? pre + 1 : pre;
            }, 0);
        }

    },

    actions: {
        newJournal(journal: Journal) {
            this.journal.push(journal);
        },
        toggleFav(id: number) {
            const diary = this.journal.find(j => j.id === id);
            diary!.isFav = !diary!.isFav;
        },
        deleteJournal(id:number){
            const diary = this.journal.find(j => j.id === id);
            this.journal = Array.from(this.journal.filter(j => j.id !== diary?.id));

        }
    }
});