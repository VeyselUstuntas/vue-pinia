<template>
    <div class="box">
        <div>
            <p>{{ journal.journal }}</p>
            <small class="date">{{ journal.date }}</small>
        </div>
        <div>
            <i class="material-icons" :class="{active_fav:journal.isFav}" @click="journalStore.toggleFav(journal.id)">favorite</i>
            <i class="material-icons" @click="journalStore.deleteJournal(journal.id)">delete</i>
        </div>
    </div>
</template>

<script lang="ts">
import { useJournalStore, type Journal } from '@/stores/JournalStore';
import { defineComponent } from 'vue'

export default defineComponent({
    props: ["journal"],
    setup() {
        const journalStore = useJournalStore();

        return {
            journalStore,
        }
    }
})
</script>

<style scoped></style>