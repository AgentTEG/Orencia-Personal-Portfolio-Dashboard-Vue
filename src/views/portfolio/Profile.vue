<template>
  <div class="page-bg profile-bg">
    <!-- PROFILE HEADER -->
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

    <!-- MAIN LAYOUT -->
    <div class="main-layout">
      <!-- LEFT: RESUME -->
      <div class="card resume-card">
        <h3>Resume</h3>
        <img src="../../assets/resume-full.png" alt="Resume" />
      </div>

      <!-- RIGHT: STACKED CARDS -->
      <div class="side-stack">
        <!-- WORK EXPERIENCE -->
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

        <!-- EDUCATION -->
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
          <p class="date">2023 – Present · Approx. GPA: 1.89</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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

/* RESUME */
.resume-card img {
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* RESPONSIVE */
@media (max-width: 1100px) {
  .main-layout {
    grid-template-columns: 1fr;
  }
}
</style>