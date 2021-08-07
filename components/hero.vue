<template>
    <section class="relative">
        <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
            <!-- Content -->
            <div class="flex flex-1 flex-col items-center lg:items-start">
                <h2 class="text-nitrite-purple font-semibold text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                    Nitrite Database
                </h2>
                <p class="text-nitrite-grey text-lg text-center lg:text-left mb-6">
                    Nitrite (<span class="text-nitrite-purple">NO</span>sql <span class="text-nitrite-purple">O</span>bject a.k.a NO<sub>2</sub>) 
                    is an offline first, serverless, embedded document database. It supports both in-memory and pluggable
                    file based persistent store with optional data replication support across multiple instances.
                </p>
                <p class="text-nitrite-grey text-lg text-center lg:text-left mb-6">
                    Currently available for Java and Kotlin.
                </p>
                <div class="flex justify-center flex-wrap gap-6">
                    <button type="button" class="btn btn-purple hover:bg-nitrite-white hover:text-black">
                        Get Started
                    </button>

                </div>
            </div>
            <!-- Image -->
            <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                <img src="~/assets/images/hero.svg" alt="" class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4">
            </div>
            <!-- Rounded Rectangle -->
            <!-- <div class="hidden lg:block overflow-hidden bg-nitrite-purple rounded-l-full absolute h-80 w-2/4 -bottom-24 -right-0">
            </div> -->
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Hero extends Vue {
    
}
</script>
