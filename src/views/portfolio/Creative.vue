<template>
  <div class="skills-wrapper">
    <h2>Skills & Tools</h2>

    <div class="skills-grid">
      <!-- SYSTEMS -->
      <div class="skill-card">
        <h3>Systems & Administration</h3>
        <ul>
          <li>Windows Administration & CLI</li>
          <li>Local Server Setup & Maintenance</li>
          <li>Port Forwarding & Network Configuration</li>
          <li>Basic Linux Environment Familiarity</li>
        </ul>
      </div>

      <!-- MEDIA -->
      <div class="skill-card">
        <h3>Media & Game Streaming</h3>
        <ul>
          <li>Plex & Jellyfin Server Management</li>
          <li>Moonlight Game Streaming (Local & Remote)</li>
          <li>Client–Host Optimization (Bitrate, Latency)</li>
          <li>Multi-Device Streaming Setup</li>
        </ul>
      </div>

      <!-- DEV -->
      <div class="skill-card">
        <h3>Development & Automation</h3>
        <ul>
          <li>Python Automation & Scripting</li>
          <li>REST API Integration</li>
          <li>Firebase Realtime Database</li>
          <li>Basic Backend Logic & Data Handling</li>
        </ul>
      </div>

      <!-- HARDWARE -->
      <div class="skill-card">
        <h3>Hardware & IoT</h3>
        <ul>
          <li>Arduino & ESP32 Development</li>
          <li>NFC & BLE-Based Systems</li>
          <li>Sensor Integration & Prototyping</li>
          <li>Device Housing & Physical Design</li>
        </ul>
      </div>

      <!-- DEVOPS -->
      <div class="skill-card">
        <h3>DevOps & Workflow</h3>
        <ul>
          <li>Basic DevOps Tools & Concepts</li>
          <li>Git Version Control</li>
          <li>Environment Variable Management (.env)</li>
          <li>Deployment Basics for Web Projects</li>
        </ul>
      </div>

      <!-- PERSONAL STRENGTHS -->
      <div class="skill-card highlight">
        <h3>Personal Strengths</h3>

        <ul class="strength-list">
          <li>
            <span class="dot"></span>
            Fast learner with strong adaptability
          </li>
          <li>
            <span class="dot"></span>
            Highly teachable and receptive to feedback
          </li>
          <li>
            <span class="dot"></span>
            Strong problem-solving and analytical mindset
          </li>
          <li>
            <span class="dot"></span>
            Hands-on debugging and troubleshooting approach
          </li>
          <li>
            <span class="dot"></span>
            Detail-oriented, responsible, and persistent
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* PAGE */
.skills-wrapper {
  max-width: 1600px;
  margin: 0 auto;
  padding: 30px 20px;
}

h2 {
  margin-bottom: 30px;
}

/* GRID */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

/* CARD BASE */
.skill-card {
  background: rgba(2, 6, 23, 0.85);
  padding: 28px;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.skill-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.45);
}

.skill-card h3 {
  color: #a3e635;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

/* LISTS */
.skill-card ul {
  padding-left: 18px;
  margin: 0;
}

.skill-card li {
  margin-bottom: 8px;
  color: #e5e7eb;
  font-size: 0.95rem;
}

/* PERSONAL STRENGTHS */
.skill-card.highlight {
  border: 1px solid rgba(163, 230, 53, 0.6);
}

.strength-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.strength-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 0;
  color: #e5e7eb;
  font-size: 0.95rem;
  line-height: 1.45;
}

/* DOT */
.strength-list .dot {
  width: 8px;
  height: 8px;
  margin-top: 6px;
  border-radius: 50%;
  background: #a3e635;
  flex-shrink: 0;
}
</style>
