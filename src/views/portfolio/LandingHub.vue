<template>
  <div class="hub-app">
    <!-- 🎥 VIDEO BACKGROUND -->
    <video
      class="bg-video"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
    >
      <source :src="videoBg" type="video/mp4" />
    </video>

    <!-- 🌫️ OVERLAY -->
    <div class="bg-overlay"></div>

    <!-- 🟢 CENTER CONTENT -->
    <div class="hub-content">
      <h1 class="title">Welcome to my Professional Dashboard</h1>
      <p class="subtitle">Choose where you want to go</p>

      <div class="cards">
        <div
          v-for="item in pages"
          :key="item.title"
          class="card-wrapper"
          @click="enter(item.route)"
        >
          <!-- 🔤 LABEL -->
          <div class="card-label">{{ item.title }}</div>

          <!-- 🟢 BUBBLE -->
          <div class="card-circle">
            <img :src="item.icon" :alt="item.title" />
          </div>

          <!-- 📖 DESCRIPTION -->
          <div class="card-desc">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>

    <!-- 🌫️ FOG TRANSITION -->
    <div class="fog" :class="{ active: transitioning }"></div>
  </div>
</template>

<script>
const BASE = import.meta.env.BASE_URL;

export default {
  name: "LandingHub",
  data() {
    return {
      transitioning: false,

      // ✅ GitHub Pages–safe video path
      videoBg: `${BASE}backgrounds/pages-dash-bg.mp4`,

      // ✅ GitHub Pages–safe icons
      pages: [
        {
          title: "Profile",
          desc: "My personal information, resume, background, and professional overview.",
          route: "/portfolio/dashboard/profile",
          icon: `${BASE}icons/profile.png`
        },
        {
          title: "Showcase",
          desc: "My highlighted projects, demos, and featured technical works.",
          route: "/portfolio/dashboard/showcase",
          icon: `${BASE}icons/showcase.png`
        },
        {
          title: "Contact",
          desc: "Ways to connect, reach out, and communicate with me. Leave a message as well.",
          route: "/portfolio/dashboard/contact",
          icon: `${BASE}icons/contact.png`
        },
        {
          title: "Creative",
          desc: "The professional tools and skills I possess.",
          route: "/portfolio/dashboard/creative",
          icon: `${BASE}icons/creative.png`
        }
      ]
    };
  },
  methods: {
    enter(route) {
      this.transitioning = true;
      setTimeout(() => {
        this.$router.push(route);
      }, 700);
    }
  }
};
</script>

<style>
/* ===== ROOT ===== */
.hub-app {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
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

/* ===== OVERLAY ===== */
.bg-overlay {
  position: fixed;
  inset: 0;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.35),
    rgba(0, 0, 0, 0.9)
  );
  z-index: 1;
  pointer-events: none;
}

/* ===== CENTER CONTENT ===== */
.hub-content {
  position: relative;
  z-index: 2;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
}

.title {
  font-size: 48px;
  margin-bottom: 10px;
}

.subtitle {
  color: #9ca3af;
  margin-bottom: 70px;
}

/* ===== CARD GRID ===== */
.cards {
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
  justify-content: center;
}

/* ===== CARD ===== */
.card-wrapper {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

/* ===== LABEL ===== */
.card-label {
  margin-bottom: 14px;
  font-size: 18px;
  font-weight: 600;
  color: #e5e7eb;
}

/* ===== BUBBLE ===== */
.card-circle {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: #1f2933;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.card-circle img {
  width: 90%;
  height: 90%;
  object-fit: contain;
}

.card-wrapper:hover .card-circle {
  transform: scale(1.15);
  box-shadow: 0 0 40px rgba(160, 220, 140, 0.6);
}

/* ===== DESCRIPTION ===== */
.card-desc {
  margin-top: 18px;
  width: 100%;
  padding: 24px;

  background: rgba(31, 41, 51, 0.95);
  border-radius: 14px;

  font-size: 14px;
  line-height: 1.7;
  text-align: center;

  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.card-wrapper:hover .card-desc {
  opacity: 1;
  transform: translateY(0);
}

/* ===== FOG ===== */
.fog {
  position: fixed;
  inset: 0;
  background: radial-gradient(
    circle,
    rgba(120, 180, 120, 0.2),
    #0a0f0a
  );
  opacity: 0;
  filter: blur(40px);
  transition: opacity 0.7s ease;
  pointer-events: none;
  z-index: 5;
}

.fog.active {
  opacity: 1;
}
</style>
