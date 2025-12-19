<template>
  <div class="showcase-wrapper">
    <h2>Portfolio Showcase</h2>

    <!-- SLIDER CONTAINER -->
    <div class="slider">
      <div
        class="slider-track"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
      >
        <!-- ================= TIPS & EATS ================= -->
        <div class="slide">
          <div class="showcase-card">
            <div class="showcase-header">
              <h3>Tips & Eats</h3>
              <p>
                A social-media-style recipe sharing platform with e-commerce
                functionality, focusing on content sharing, user interaction,
                and backend integration.
              </p>

              <a
                href="https://tips-eats.infinityfree.me/"
                target="_blank"
                class="live-link"
              >
                Visit Live Website
              </a>
            </div>

            <!-- IMAGE CAROUSEL -->
            <div class="image-carousel">
              <button class="img-btn left" @click="prevTips">‹</button>

              <img
                :src="tipsImages[tipsIndex]"
                alt="Tips & Eats Preview"
              />

              <button class="img-btn right" @click="nextTips">›</button>
            </div>
          </div>
        </div>

        <!-- ================= ECHOSENSE ================= -->
        <div class="slide">
          <div class="showcase-card">
            <div class="showcase-header">
              <h3>Echosense</h3>
              <p>
                A smart wearable assistive device designed to enhance
                situational awareness for the hearing impaired. My role focused
                on designing the physical device shell with emphasis on
                durability, internal component layout, and user accessibility.
              </p>
            </div>

            <!-- IMAGE CAROUSEL -->
            <div class="image-carousel">
              <button class="img-btn left" @click="prevEcho">‹</button>

              <img
                :src="echoImages[echoIndex]"
                alt="Echosense Device Preview"
              />

              <button class="img-btn right" @click="nextEcho">›</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NAVIGATION -->
    <div class="nav-buttons">
      <button @click="prevSlide">‹ Prev</button>
      <button @click="nextSlide">Next ›</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,

      tipsIndex: 0,
      tipsImages: [
        new URL('../../assets/tips-eats-preview.jpg', import.meta.url).href,
        new URL('../../assets/tips-eats-preview-2.jpg', import.meta.url).href
      ],

      echoIndex: 0,
      echoImages: [
        new URL('../../assets/echosense-1.png', import.meta.url).href,
        new URL('../../assets/echosense-2.png', import.meta.url).href,
        new URL('../../assets/echosense-3.png', import.meta.url).href
      ]
    }
  },

  methods: {
    /* MAIN SLIDE */
    nextSlide() {
      if (this.activeIndex < 1) this.activeIndex++
    },
    prevSlide() {
      if (this.activeIndex > 0) this.activeIndex--
    },

    /* TIPS */
    nextTips() {
      this.tipsIndex =
        (this.tipsIndex + 1) % this.tipsImages.length
    },
    prevTips() {
      this.tipsIndex =
        (this.tipsIndex - 1 + this.tipsImages.length) %
        this.tipsImages.length
    },

    /* ECHOSENSE */
    nextEcho() {
      this.echoIndex =
        (this.echoIndex + 1) % this.echoImages.length
    },
    prevEcho() {
      this.echoIndex =
        (this.echoIndex - 1 + this.echoImages.length) %
        this.echoImages.length
    }
  }
}
</script>

<style scoped>
/* PAGE */
.showcase-wrapper {
  max-width: 1600px;
  margin: 0 auto;
  padding: 30px 20px;
}

h2 {
  margin-bottom: 25px;
}

/* SLIDER */
.slider {
  overflow: hidden;
}

.slider-track {
  display: flex;
  transition: transform 0.6s ease;
}

.slide {
  min-width: 100%;
  display: flex;
  justify-content: center;
}

/* CARD */
.showcase-card {
  width: 100%;
  background: rgba(2, 6, 23, 0.9);
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
  overflow: hidden;
}

/* HEADER */
.showcase-header {
  padding: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.showcase-header h3 {
  color: #a3e635;
  margin-bottom: 10px;
}

.showcase-header p {
  color: #e5e7eb;
  max-width: 900px;
  line-height: 1.6;
}

.live-link {
  display: inline-block;
  margin-top: 12px;
  color: #a3e635;
  font-weight: 600;
  text-decoration: none;
}

.live-link:hover {
  text-decoration: underline;
}

/* IMAGE CAROUSEL */
.image-carousel {
  position: relative;
  width: 100%;
  padding: 25px;
  background: #020617;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-carousel img {
  width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border-radius: 14px;
  background: #fff;
}

/* IMAGE BUTTONS */
.img-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: #a3e635;
  font-size: 26px;
  padding: 8px 14px;
  border-radius: 50%;
  cursor: pointer;
}

.img-btn.left {
  left: 20px;
}

.img-btn.right {
  right: 20px;
}

/* NAV BUTTONS */
.nav-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-buttons button {
  padding: 8px 18px;
  border-radius: 999px;
  border: none;
  background: #020617;
  color: #a3e635;
  cursor: pointer;
}

.nav-buttons button:hover {
  background: #020617;
}
</style>
