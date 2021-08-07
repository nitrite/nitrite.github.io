<template>
    <section class="bg-nitrite-purple text-white py-20 hidden">
        <div class="container">
            <div class="sm:w-3/4 lg:w-2/4 mx-auto">
                <h1 class="text-3xl text-center">Stay upto date</h1>
                <div class="flex flex-col sm:flex-row gap-6 mt-8">
                    <input type="text" placeholder="Enter your email address" class="focus:outline-none flex-1 px-2 py-3 rounded-md text-black">
                    <button type="button" class="btn bg-nitrite-red hover:bg-nitrite-white hover:text-black">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ContactUs extends Vue {

}
</script>
