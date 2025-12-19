<template>
  <div class="app">
    <!-- 🎥 VIDEO BACKGROUND -->
    <video
      class="bg-video"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
    >
      <source src="/backgrounds/profile-bg.mp4" type="video/mp4" />
    </video>

    <!-- 🌫️ OVERLAY -->
    <div class="bg-overlay"></div>

    <Navbar @toggle-sidebar="toggleSidebar" />

    <Sidebar
      :isOpen="sidebarOpen"
      @hover-open="sidebarOpen = true"
      @hover-close="sidebarOpen = false"
    />

    <main class="content" :class="{ shifted: sidebarOpen }">
      <router-view v-slot="{ Component }">
        <transition name="fog-page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import Sidebar from "../../components/Sidebar.vue";

export default {
  components: { Navbar, Sidebar },
  data() {
    return {
      sidebarOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    }
  }
};
</script>

<!-- ❗❗❗ IMPORTANT: NOT SCOPED ❗❗❗ -->
<style>
/* ===== ROOT APP ===== */
.app {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: transparent;
}

/* ===== VIDEO BACKGROUND ===== */
.bg-video {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  pointer-events: none;
}

/* ===== DARK OVERLAY ===== */
.bg-overlay {
  position: fixed;
  inset: 0;
  background: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.85)
  );
  z-index: 1;
  pointer-events: none;
}

/* ===== CONTENT ===== */
.content {
  position: relative;
  z-index: 2;
  margin-left: 160px;
  padding: 32px;
  padding-top: 100px;
  transition: margin-left 0.3s ease;
}

.content.shifted {
  margin-left: 220px;
}

/* ===== MOBILE ===== */
@media (max-width: 768px) {
  .content,
  .content.shifted {
    margin-left: 0;
  }
}

/* ===== PAGE TRANSITION ===== */
.fog-page-enter-active,
.fog-page-leave-active {
  transition:
    opacity 0.6s ease,
    transform 0.6s ease,
    filter 0.6s ease;
}

.fog-page-enter-from {
  opacity: 0;
  transform: scale(1.04);
  filter: blur(18px);
}

.fog-page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
