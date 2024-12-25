<template>
    <div class="box">
        <div>
            <p>{{ journal.journal }}</p>
            <small class="date">{{ journal.date }}</small>
        </div>
        <div>
            <i class="material-icons">favorite</i>
            <i class="material-icons">delete</i>
        </div>
    </div>
</template>

<script lang="ts">
import type { Journal } from '@/stores/JournalStore';
import { defineComponent } from 'vue'

export default defineComponent({
    props: ["journal"],
 })
</script>

<style scoped></style>