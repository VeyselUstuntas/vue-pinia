<template>

  <header>
    <div class="container">
      <img src="@/assets/pinia-logo.svg" alt="Pinia" title="Pinia">
      <h1 class="header-title">My Personal Journal</h1>
    </div>
  </header>

  <main>
    <div class="container">
      <div class="new-diary">
        <new-journal></new-journal>
      </div>

      <div class="data-area">
        <p v-if="filter === 'all'">There are a total of {{ journalLength }} records</p>
        <p v-if="filter === 'favs'">There are a total of {{ journalFavCount }} records</p>
        <div>
          <button @click="filter = 'all'" :class="{ active: filter === 'all' }">All Journal</button>
          <button @click="filter = 'favs'" :class="{ active: filter === 'favs' }">Favorite Journal</button>
        </div>
      </div>
      <div class="journal-list">
        <template v-for="journal in journal" v-if="filter === 'all'">
          <journal-detail :journal="journal"></journal-detail>
        </template>
        <template v-for="journal in favs" v-if="filter === 'favs'">
          <journal-detail :journal="journal"></journal-detail>
        </template>
      </div>
    </div>
  </main>

  <div class="reset-data">
    <button @click="journalStore.$reset">Reset Data</button>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useJournalStore, type Journal } from './stores/JournalStore';
import JournalDetails from './components/journal-details.vue';
import NewJournal from './components/new-journal.vue';
import { storeToRefs } from 'pinia';


export default defineComponent({
  components: {
    "journal-detail": JournalDetails,
    "new-journal": NewJournal
  },
  setup() {
    const journalStore = useJournalStore();
    const filter = ref("all");

    const { journal, loading, favs, journalFavCount, journalLength} = storeToRefs(journalStore);

    journalStore.getJournal();
    return { journalStore, filter, journal, loading, favs, journalFavCount, journalLength};
  }

})
</script>

<style scoped></style>