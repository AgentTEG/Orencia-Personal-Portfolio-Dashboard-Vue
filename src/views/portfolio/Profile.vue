<template>
  <div class="page-bg profile-bg">
    <div class="profile-card">
      <img src="../../assets/profile.jpg" class="profile-img" />

      <div class="info">
        <h2>Alfred Joaquin L. Orencia</h2>
        <p class="bio">
          Computer Engineering student at Polytechnic University of the
          Philippines with experience in system administration, networking,
          backend development, and IT support.
        </p>

        <ul>
          <li><strong>Email:</strong> alfredjoaquinorencia@gmail.com</li>
          <li>
            <strong>GitHub:</strong>
            <a href="https://github.com/AgentTEG" target="_blank">
              https://github.com/AgentTEG
            </a>
          </li>
          <li><strong>Location:</strong> Marikina City, Philippines</li>
        </ul>
      </div>
    </div>

    <div class="main-layout">
      <div class="card resume-card">
        <h3>Resume</h3>
        <img 
          src="../../assets/resume-full.png" 
          alt="Resume" 
          @click="showModal = true"
          style="cursor: zoom-in;" 
        />
      </div>

      <div class="side-stack">
        <div class="card">
          <h3>Work Experience</h3>

          <h4>Information Technology Department Head Intern</h4>
          <p class="place">GSYNC Solutions · Naga City, Philippines</p>
          <p class="date">April 17, 2023 – July 21, 2023</p>

          <ul class="bullets">
            <li>Led the IT department as team head during internship</li>
            <li>Managed system tools and access for multiple departments</li>
            <li>Provided organization-wide technical support</li>
            <li>Ensured system stability and operational continuity</li>
          </ul>
        </div>

        <div class="card">
          <h3>Education</h3>

          <h4>Diploma in Computer Engineering and Technologies</h4>
          <p class="place">
            Polytechnic University of the Philippines
          </p>
          <p class="date">2020 – 2023 · GPA: 2.00</p>

          <hr />

          <h4>Bachelor of Science in Computer Engineering</h4>
          <p class="place">
            Polytechnic University of the Philippines
          </p>
          <p class="date">2023 – 2026 · GPA: 1.89</p>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="showModal" class="modal-overlay" @click="showModal = false">
        <div class="modal-content">
          <span class="close-btn">&times;</span>
          <img src="../../assets/resume-full.png" alt="Resume Fullscreen" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Logic to track if the modal is open
      showModal: false
    };
  }
};
</script>
<style scoped>
/* PAGE BACKGROUND */
.page-bg {
  min-height: 100vh;
  padding: 40px 60px;
  color: #e5e7eb;
}

/* GLASS DARK CARD BASE */
.profile-card,
.card {
  background: rgba(17, 24, 39, 0.85); /* dark glass */
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

/* HOVER EFFECT */
.card:hover,
.profile-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85);
}

/* PROFILE HEADER */
.profile-card {
  display: flex;
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto 50px;
}

/* PROFILE IMAGE */
.profile-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.15);
}

/* MAIN LAYOUT */
.main-layout {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
}

/* RIGHT COLUMN STACK */
.side-stack {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* HEADINGS */
h2 {
  color: #f9fafb;
}

.card h3 {
  color: #9acd66;
  margin-bottom: 20px;
}

h4 {
  color: #f3f4f6;
}

/* TEXT */
.bio {
  margin: 20px 0;
  color: #d1d5db;
}

.place,
.date {
  font-size: 14px;
  color: #9ca3af;
}

/* LINKS */
a {
  color: #9acd66;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* LISTS */
.bullets {
  padding-left: 20px;
  margin-top: 15px;
}

.bullets li {
  margin-bottom: 8px;
}

/* DIVIDER */
hr {
  margin: 20px 0;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

/* RESUME IMAGE IN CARD */
.resume-card img {
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: opacity 0.3s ease;
}

.resume-card img:hover {
  opacity: 0.8; /* Subtle hint that it's clickable */
}

/* FULLSCREEN MODAL OVERLAY */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 15, 10, 0.95); /* Deep dark overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000; /* High z-index to cover everything */
  cursor: zoom-out;
  padding: 20px;
  backdrop-filter: blur(5px); /* Blurs the profile page behind the resume */
}

/* MODAL CONTENT CONTAINER */
.modal-content {
  position: relative;
  max-width: 95%;
  max-height: 95vh;
  display: flex;
  justify-content: center;
}

.modal-content img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 90vh; /* Ensures it doesn't bleed off the screen */
  border-radius: 8px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* CLOSE BUTTON (X) */
.close-btn {
  position: absolute;
  top: -50px;
  right: 0;
  color: #9acd66; /* Matching your theme green */
  font-size: 50px;
  line-height: 1;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.close-btn:hover {
  transform: scale(1.2);
}

/* VUE TRANSITION: FADE */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* RESPONSIVE */
@media (max-width: 1100px) {
  .main-layout {
    grid-template-columns: 1fr;
  }
}
</style>
