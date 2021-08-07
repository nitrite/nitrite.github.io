<template>
  <nav
    class="container flex items-center py-4 mt-4 sm:mt-12"
    v-on-clickaway="clickAway"
  >
    <div class="py-1">
      <img
        class="w-24 sm:w-28 lg:w-32 2xl:w-full"
        src="~/assets/images/logo-nitrite.svg"
        alt=""
      />
    </div>
    <ul
      class="
        hidden
        sm:flex
        flex-1
        justify-end
        items-center
        gap-12
        text-nitrite-blue
        uppercase
        text-xs
        font-semibold
      "
    >
      <li class="cursor-pointer"><nuxt-link :to="{ path: '/', hash:'#features'}">Features</nuxt-link></li>
      <li class="cursor-pointer">Guides</li>
      <li class="cursor-pointer">Examples</li>
      <button
        type="button"
        class="bg-nitrite-purple text-white rounded-md px-7 py-3 uppercase"
      >
        Get Started
      </button>
    </ul>

    <!--  Mobile Menu -->
    <div class="flex sm:hidden flex-1 justify-end">
      <button @click="clickMenu" class="flex items-center px-3 py-2 rounded">
        <font-awesome-icon
          icon="bars"
          class="
            text-base text-gray-500
            antialiased
            sm:subpixel-antialiased
            md:antialiased
          "
        />
      </button>
    </div>
    <div
      class="
        absolute
        md:hidden
        top-20
        left-0
        z-20
        flex-col
        font-semibold
        w-full
        bg-white
        shadow-md
        rounded-lg
        p-6
        pt-0
      "
      v-if="menuVisible"
    >
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div class="py-1">
          <nuxt-link
            to="/"
            class="text-gray-700 block px-4 py-2 text-sm"
            @click.native="clickAway"
            >Feature</nuxt-link
          >
          <nuxt-link
            to="/"
            class="text-gray-700 block px-4 py-2 text-sm"
            @click.native="clickAway"
            >Guides</nuxt-link
          >
          <nuxt-link
            to="/"
            class="text-gray-700 block px-4 py-2 text-sm"
            @click.native="clickAway"
            >Examples</nuxt-link
          >
          <nuxt-link
            to="/"
            class="text-gray-700 block px-4 py-2 text-sm"
            @click.native="clickAway"
            >Get Started</nuxt-link
          >
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import { directive as onClickaway } from "vue-clickaway";
import { Component, Vue } from "vue-property-decorator";

@Component({
  directives: {
    onClickaway: onClickaway,
  },
})
export default class NavBar extends Vue {
  menuVisible = false;

  clickMenu() {
    this.menuVisible = !this.menuVisible;
  }

  clickAway() {
    this.menuVisible = false;
  }
}
</script>