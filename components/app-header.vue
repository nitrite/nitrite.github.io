<template>
    <header>
        <nav-bar></nav-bar>
    </header>
</template>

<script lang="ts">
import NavBar from './nav-bar.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
        NavBar,
    }
})
export default class AppHeader extends Vue {
    
}
</script>