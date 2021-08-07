<template>
    <section class="bg-nitrite-white py-20">
        <div class="container">
            <!-- Heading -->
            <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 class="text-3xl text-center text-nitrite-blue">Frequently Asked Questions</h1>
                <p class="text-center text-nitrite-grey mt-4">
                    
                </p>
            </div>

            <!-- FAQ Items -->
            <div class="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                <div class="flex flex-col border-b py-4">
                    <div class="flex items-center">
                        <span class="flex-1">What is Nitrite?</span>
                        <button type="button" @click="clickFaq1">
                            <font-awesome-icon icon="chevron-down" class="text-nitrite-purple"></font-awesome-icon>
                        </button>
                    </div>
                    <div v-if="faq1Visible" class="py-3 my-2 text-gray-700">
                        <p>
                            Nitrite is a serverless, very fast embeddable document database like MongoDB. It supports 
                            both in-memory and pluggable file based persistent store. It is ideal for mobile or desktop 
                            applications or small scale server applications.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col border-b py-4">
                    <div class="flex items-center">
                        <span class="flex-1">Is Nitrite Open-Source?</span>
                        <button type="button" @click="clickFaq2">
                            <font-awesome-icon icon="chevron-down" class="text-nitrite-purple"></font-awesome-icon>
                        </button>
                    </div>
                    <div v-if="faq2Visible" class="py-3 my-2 text-gray-700">
                        <p>
                            Nitrite database and DataGate server is a fully open sourced application, licensed under
                            Apache License V2.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col border-b py-4">
                    <div class="flex items-center">
                        <span class="flex-1">Why should I use Nitrite?</span>
                        <button type="button" @click="clickFaq3">
                            <font-awesome-icon icon="chevron-down" class="text-nitrite-purple"></font-awesome-icon>
                        </button>
                    </div>
                    <div v-if="faq3Visible" class="py-3 my-2 text-gray-700">
                        <ul class="list-disc px-6 space-y-6">
                            <li>
                                Nitrite is a document database and can also be used as an object database. 
                                No more ORM framework, no more joins, no more SQL for dealing with data.
                            </li>
                            <li>
                                Nitrite not only stores your data, it calls any registered change listeners when
                                your data has been modified, keeping your UI up to date.
                            </li>
                            <li>
                                The database cursors are lazily evaluated, so you only get what you use.
                            </li>
                            <li>
                                There are lots of useful other features you will be missing out if you don't 
                                use Nitrite.
                            </li>
                        </ul>
                    </div>
                </div>
                
                <button type="button" class="mt-12 flex self-center btn btn-purple hover:bg-nitrite-white hover:text-black">
                    More Info
                </button>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FAQ extends Vue {
    faq1Visible = false;
    faq2Visible = false;
    faq3Visible = false;

    clickFaq1() {
        this.faq1Visible = !this.faq1Visible;
    }

    clickFaq2() {
        this.faq2Visible = !this.faq2Visible;
    }

    clickFaq3() {
        this.faq3Visible = !this.faq3Visible;
    }
}
</script>