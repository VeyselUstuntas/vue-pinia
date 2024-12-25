<template>
    <form @click.prevent="saveDiary">
        <div class="box">
            <div class="form-group">
                <textarea v-model="newjournalContent" placeholder="Bugün neler oldu anlat..."></textarea>
                <button>Save Diary</button>
            </div>
        </div>
    </form>
</template>

<script lang="ts">
import { useJournalStore } from '@/stores/JournalStore';
import { defineComponent, ref, type Ref } from 'vue'

export default defineComponent({
    setup() {
        const journalStore = useJournalStore();
        const newjournalContent = ref("");

        function currentDate() {
            const date = new Date();
            return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
        }

        function saveDiary() {
            if (newjournalContent.value.length > 0) {
                journalStore.newJournal({
                    id: ((Number)(journalStore.journalLength) + 1).toString(),
                    journal: newjournalContent.value,
                    date: currentDate().toString(),
                    isFav: false
                })
            }
        }

        return {
            newjournalContent,
            saveDiary,
        }
    }
})
</script>

<style scoped></style>