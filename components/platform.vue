<template>
    <!-- Download -->
    <section class="py-20 mt-20 lg:mt-60">
        <!-- Heading -->
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 class="text-2xl lg:text-5xl text-center font-semibold text-nitrite-purple">Available Platforms</h1>
            <p class="text-center text-lg text-nitrite-grey mt-4">
                Nitrite is currently available in these platforms.
            </p>
        </div>

        <!-- Cards -->
        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg gap-16 mt-16">
            <!-- Card 1 -->
            <div class="flex flex-col rounded-md shadow-md">
                <div class="p-6 flex flex-col items-center">
                    <img src="~/assets/images/java.png" class="object-scale-down h-32" alt="">
                    <h3 class="mt-5 mb-2 text-nitrite-blue text-lg">Java</h3>
                    <p class="mb-2 text-nitrite-grey font-light">Java 8+ and Android</p>
                </div>
                <hr class="border-b border-nitrite-white">
                <div class="flex p-6">
                    <button type="button" class="flex-1 btn btn-purple hover:bg-nitrite-white hover:text-black">
                        More Info
                    </button>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="flex flex-col rounded-md shadow-md">
                <div class="p-6 flex flex-col items-center">
                    <img src="~/assets/images/kotlin.png" class="object-scale-down h-32" alt="">
                    <h3 class="mt-5 mb-2 text-nitrite-blue text-lg">Kotlin</h3>
                    <p class="mb-2 text-nitrite-grey font-light">JVM and Android</p>
                </div>
                <hr class="border-b border-nitrite-white">
                <div class="flex p-6">
                    <button type="button" class="flex-1 btn btn-purple hover:bg-nitrite-white hover:text-black">
                        More Info
                    </button>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="flex flex-col rounded-md shadow-md">
                <div class="p-6 flex flex-col items-center">
                    <img src="~/assets/images/flutter.png" class="object-scale-down h-32" alt="">
                    <h3 class="mt-5 mb-2 text-nitrite-blue text-lg">Flutter</h3>
                    <p class="mb-2 text-nitrite-grey font-light">Flutter 2.x+</p>
                </div>
                <hr class="border-b border-nitrite-white">
                <div class="flex p-6">
                    <button disabled type="button" class="flex-1 btn btn-purple opacity-50 cursor-not-allowed">
                        Coming Soon
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Platform extends Vue {

}
</script>