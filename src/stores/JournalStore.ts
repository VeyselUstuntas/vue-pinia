import { defineStore, type StoreDefinition } from "pinia";

export interface Journal {
    id: string;
    journal: string;
    date: string;
    isFav: boolean;
}

export interface JournalState {
    journal: Journal[];
    loading: boolean;
}

export const useJournalStore = defineStore("journalStore", {
    state: (): JournalState => ({
        journal: [],
        loading: false
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
        async getJournal() {
            this.loading = true;
            const res = await fetch("http://localhost:3000/diary");
            const data: Journal[] = await res.json();
            this.journal = data;
            this.loading = false;
        },

        async newJournal(journal: Journal) {
            const res = await fetch("http://localhost:3000/diary",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(journal)
            }).catch((err) => console.log(err));
            this.journal.push(journal);

        },

        async toggleFav(id: string) {
            const diary = this.journal.find(j => j.id === id);
            diary!.isFav = !diary!.isFav;

            const res = await fetch("http://localhost:3000/diary/" + id,{
                method:"PATCH",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({isFav:diary!.isFav})
            }).catch((err) => console.log(err));
             
        },
        async deleteJournal(id: string) {
            const diary = this.journal.find(j => j.id === id);
            this.journal = Array.from(this.journal.filter(j => j.id !== diary?.id));

            const res = await fetch("http://localhost:3000/diary/" + id,{
                method:"DELETE",
            })
        }
    }
});