<template>
  <aside
    class="sidebar"
    :class="{ open: isOpen }"
    @mouseenter="hoverOpen"
    @mouseleave="hoverClose"
  >
    <router-link to="/portfolio/dashboard/profile">Profile</router-link>
    <router-link to="/portfolio/dashboard/showcase">Showcase</router-link>
    <router-link to="/portfolio/dashboard/contact">Contact</router-link>
    <router-link to="/portfolio/dashboard/creative">Creative</router-link>
  </aside>
</template>

<script>
export default {
  props: {
    isOpen: Boolean
  },
  emits: ["hover-open", "hover-close"],
  methods: {
    hoverOpen() {
      this.$emit("hover-open");
    },
    hoverClose() {
      this.$emit("hover-close");
    }
  }
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 64px; /* BELOW NAVBAR */
  left: 0;
  height: calc(100vh - 64px);

  /* 🔧 KEY FIX: wide enough for full words */
  width: 160px;

  background: #1f2937;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  gap: 8px;
  overflow: hidden;
  transition: width 0.3s ease;
  z-index: 900;
}

/* EXPANDED ON HOVER / OPEN */
.sidebar.open {
  width: 220px;
}

a {
  color: #d1d5db;
  text-decoration: none;
  padding: 12px 20px;
  white-space: nowrap;
  transition: 0.25s;
}

a.router-link-active {
  background-color: #658a43;
  color: white;
}

a:hover {
  background-color: #374151;
  color: white;
}
</style>
