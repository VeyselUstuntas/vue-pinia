<template>
  <header>
    <div class="container">
      <img src="@/assets/pinia-logo.svg" alt="Pinia" title="Pinia">
      <h1 class="header-title">My Personal Journal</h1>
    </div>
  </header>

  <main>
    <div class="container">
      <div class="journal-list">
        <template v-for="journal in journalStore.journal">
          <journal-detail :journal="journal"></journal-detail>
        </template>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useJournalStore, type Journal } from './stores/JournalStore';
import JournalDetails from './components/journal-details.vue';


export default defineComponent({
  components: {
    "journal-detail": JournalDetails,
  },
  setup() {
    const journalStore = useJournalStore();
    return { journalStore };
  }

})
</script>

<style scoped></style>