<template>
  <div>
    <app-header />
    <hero />
    <features />
    <platform />
    <faq />
    <contact-us />
    <app-footer />

    <scroll-to-top>
      <button
        class="
          p-0
          w-16
          h-16
          items-center
          bg-red-600
          rounded-full
          hover:bg-red-700
          active:shadow-lg
          mouse
          shadow
          transition
          ease-in
          duration-200
          focus:outline-none
        "
      >
        <font-awesome-icon
          icon="chevron-up"
          class="text-white"
        ></font-awesome-icon>
      </button>
    </scroll-to-top>
  </div>
</template>

<script>
import AppHeader from "~/components/app-header.vue";
import Hero from "~/components/hero.vue";
import Features from "~/components/features.vue";
import Platform from "~/components/platform.vue";
import FAQ from "~/components/faq.vue";
import ContactUs from "~/components/contact-us.vue";
import AppFooter from "~/components/app-footer.vue";
import ScrollToTop from "~/components/scroll-to-top.vue";

export default {
  components: {
    AppHeader,
    Hero,
    Features,
    Platform,
    FAQ,
    ContactUs,
    AppFooter,
    ScrollToTop,
  },
  data() {
    return {
      title: "Nitrite Database",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
};
</script>
