<template>
    <footer class="bg-nitrite-dark py-8">
        <div class="container flex flex-col md:flex-row items-center md:px-12">
            <div class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
                <img src="~/assets/images/logo-nitrite-white.svg" alt="">
            </div>
            <div class="flex gap-10 mt-12 md:mt-0">
                <div>
                    <font-awesome-icon :icon="['fab', 'twitter']" class="text-white text-lg"/>
                </div>
                <div>
                    <font-awesome-icon :icon="['fab', 'github']" class="text-white text-lg"/>
                </div>
            </div>
        </div>
        <div class="flex pt-8 mt-10 mx-10 lg:mx-20 2xl:mx-64 border-t border-opacity-25 border-nitrite-grey justify-center">
            <span class="text-white tracking-wider text-sm">Made with <font-awesome-icon :icon="['fas', 'heart']" class="text-red-400"/> from India</span>
        </div>
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppFooter extends Vue {

}
</script>