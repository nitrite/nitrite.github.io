<template>
    <section id="features" class="bg-nitrite-white py-20 mt-20 lg:mt-60">
        <!-- Heading -->
        <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 class="text-3xl lg:text-5xl text-center font-semibold text-nitrite-blue">Key Features</h1>
            <p class="text-center text-lg text-nitrite-grey mt-4">
                
            </p>
        </div>

        <!-- Feature #1 -->
        <div class="relative mt-20 lg:mt-24">
            <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                <!-- Image -->
                <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4" src="~/assets/images/document.svg" alt="">
                </div>

                <!-- Content -->
                <div class="flex flex-1 flex-col items-center lg:items-start">
                    <h1 class="text-2xl lg:text-5xl font-semibold text-nitrite-purple">Document Database</h1>
                    <p class="text-sm lg:text-lg text-nitrite-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                        Serverless, very fast embeddable document database ideal for desktop, mobile or small web applications. It's like MongoDB for mobile devices.
                    </p>
                    <div class="text-nitrite-grey my-10 text-left lg:text-left sm:w-5/6 lg:w-full">
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p>Data is stored as a JSON-like document in collections. The values of fields may include other documents, arrays, and arrays of documents.</p>
                            </div>
                            <div class="flex items-start">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p>Automatically map your object to document and back.</p>
                            </div>
                            <div class="flex items-start">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p>Support for ACID transaction.</p>
                            </div>                         
                            <div class="flex items-start">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p>Schema migration api to facilitate friction-less data model changes in application.</p>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-purple hover:bg-nitrite-white hover:text-black">
                        More Info
                    </button>
                </div>
            </div>
            <!-- Rounded Rectangle -->
            <!-- <div class="hidden lg:block overflow-hidden bg-nitrite-purple rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-0">
            </div> -->
        </div>

        <!-- Feature #2 -->
        <div class="relative mt-20 lg:mt-52">
            <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                <!-- Image -->
                <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4" src="~/assets/images/search.svg" alt="">
                </div>

                <!-- Content -->
                <div class="flex flex-1 flex-col items-center lg:items-start">
                    <h1 class="text-2xl lg:text-5xl font-semibold text-nitrite-purple">Fast Queries using Index</h1>
                    <p class="text-sm lg:text-lg text-nitrite-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                        Nitrite provides extensive searching capability of data using MongoDB like api.
                    </p>
                    <div class="text-nitrite-grey my-10 text-left lg:text-left sm:w-5/6 lg:w-full">
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p>Optimized query support via intuitive fluent filter api.</p>
                            </div>
                            <div class="flex items-start">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p>Search by field, range query, full-text query, geospatial query and logical operators.</p>
                            </div>
                            <div class="flex items-start">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p>Support for single index, compound index, full-text index and geospatial index.</p>
                            </div> 
                        </div>
                    </div>
                    <button type="button" class="btn btn-purple hover:bg-nitrite-white hover:text-black">
                        More Info
                    </button>
                </div>
            </div>
            <!-- Rounded Rectangle -->
            <!-- <div class="hidden lg:block overflow-hidden bg-nitrite-purple rounded-l-full absolute h-80 w-2/4 -bottom-24 -right-0">
            </div> -->
        </div>


        <!-- Feature #3 -->
        <div class="relative mt-20 lg:mt-24">
            <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                <!-- Image -->
                <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4" src="~/assets/images/extend.svg" alt="">
                </div>

                <!-- Content -->
                <div class="flex flex-1 flex-col items-center lg:items-start">
                    <h1 class="text-2xl lg:text-5xl font-semibold text-nitrite-purple">Extensible Interface</h1>
                    <p class="text-sm lg:text-lg text-nitrite-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                        Nitrite has a developer friendly intuitive plugin based api which can be used to extend it's capability.
                    </p>
                    <div class="text-nitrite-grey my-10 text-left lg:text-left sm:w-5/6 lg:w-full">
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p>Pluggable storage engine.</p>
                            </div>
                            <div class="flex items-start">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p>User defined filter operator for custom search.</p>
                            </div>
                            <div class="flex items-start">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p>Custom index engine.</p>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-purple hover:bg-nitrite-white hover:text-black">
                        More Info
                    </button>
                </div>
            </div>
            <!-- Rounded Rectangle -->
            <!-- <div class="hidden lg:block overflow-hidden bg-nitrite-purple rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-0">
            </div> -->
        </div>

        <!-- Feature #4 -->
        <div class="relative mt-20 lg:mt-52">
            <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                <!-- Image -->
                <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4" src="~/assets/images/sync.svg" alt="">
                </div>

                <!-- Content -->
                <div class="flex flex-1 flex-col items-center lg:items-start">
                    <h1 class="text-2xl lg:text-5xl font-semibold text-nitrite-purple">Data Replication</h1>
                    <p class="text-sm lg:text-lg text-nitrite-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                        Being an offline first database, Nitrite also provides automatic data replication capability when the device comes online using Nitrite DataGate server.
                    </p>
                    <div class="text-nitrite-grey my-10 text-left lg:text-left sm:w-5/6 lg:w-full">
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p>CRDT based data replication support to keep data in sync across multiple users and devices.</p>
                            </div>
                            <div class="flex items-start">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p>Automatic conflict resolution during replication, no error handling or conflict resolution code needed.</p>
                            </div>
                            <div class="flex items-start">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p>Open source, self hosted replication server on top of MongoDB as server-side store.</p>
                            </div> 
                            <div class="flex items-start">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <p>Nitrite DataGate server is highly scalable and secure by design.</p>
                            </div> 
                        </div>
                    </div>
                    <button type="button" class="btn btn-purple hover:bg-nitrite-white hover:text-black">
                        More Info
                    </button>
                </div>
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
export default class Features extends Vue {

}
</script>