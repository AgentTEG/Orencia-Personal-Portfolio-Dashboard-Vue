<template>
  <div class="auth-wrapper">
    <video class="bg-video" autoplay muted loop playsinline preload="auto">
      <source src="/backgrounds/login-bg.mp4" type="video/mp4" />
    </video>
    <div class="overlay"></div>
    <div class="fog-transition" :class="{ active: success }"></div>

    <div class="auth-card" :class="{ 'animate-in': !success, 'zoom-fog': success }">
      <h1>Create Account</h1>
      <p class="subtitle">Register a new account</p>

      <form @submit.prevent="register">
        <input v-model="username" placeholder="Username" required />
        
        <input v-model="email" placeholder="Email" required />

        <div class="password-wrapper">
          <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Password" required />
          <span class="eye" @click="togglePassword">👁</span>
        </div>

        <button type="submit" :disabled="loading">
          {{ loading ? "Registering..." : "Register" }}
        </button>
      </form>

      <p class="link" @click="$router.push('/login')">Back to Login</p>
      <p v-if="success" class="success">Registration successful! Redirecting…</p>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { supabase } from "../supabase";

export default {
  data() {
    return {
      username: "", // Added this
      email: "",
      password: "",
      showPassword: false,
      error: "",
      success: false,
      loading: false
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    async register() {
      this.error = "";
      this.success = false;
      this.loading = true;

      const { data, error } = await supabase.auth.signUp({
        email: this.email,
        password: this.password,
        // ADDED OPTIONS FOR METADATA
        options: {
          data: {
            username: this.username
          }
        }
      });

      if (error) {
        this.error = error.message;
        this.loading = false;
        return;
      }

      this.success = true;

      setTimeout(() => {
        this.$router.push("/login");
      }, 1000);
    }
  }
};
</script>


<style scoped>
/* ===== WRAPPER ===== */
.auth-wrapper {
  position: relative;
  min-height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ===== VIDEO ===== */
.bg-video {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

/* ===== OVERLAY ===== */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 15, 10, 0.7);
  z-index: 1;
}

/* ===== FOG ===== */
.fog-transition {
  position: fixed;
  inset: 0;
  background: radial-gradient(
    circle,
    rgba(120, 180, 120, 0.15),
    rgba(10, 15, 10, 0.95)
  );
  opacity: 0;
  filter: blur(40px);
  transition: opacity 0.8s ease;
  z-index: 2;
  pointer-events: none;
}

.fog-transition.active {
  opacity: 1;
}

/* ===== CARD ===== */
.auth-card {
  position: relative;
  z-index: 3;
  background: rgba(15, 25, 15, 0.95);
  padding: 60px;
  width: 520px;
  max-width: 92%;
  border-radius: 22px;
  text-align: center;
  color: #e5e7eb;
  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.auth-card:hover {
  transform: translateY(-8px);
}

/* ===== ENTRY ===== */
.animate-in {
  animation: floatIn 0.6s ease-out;
}

@keyframes floatIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* ===== SUCCESS ===== */
.zoom-fog {
  animation: zoomFog 0.85s ease-in forwards;
}

@keyframes zoomFog {
  to {
    transform: scale(1.6);
    opacity: 0;
  }
}

/* ===== INPUT ===== */
input {
  width: 100%;
  padding: 14px;
  margin-bottom: 18px;
  border-radius: 10px;
  border: none;
  background: #1f2933;
  color: #e5e7eb;
}

input::placeholder {
  color: #9ca3af;
}

/* ===== PASSWORD ===== */
.password-wrapper {
  position: relative;
}

.password-wrapper input {
  padding-right: 45px;
}

.eye {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #9ca3af;
}

/* ===== BUTTON ===== */
button {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #658a43, #3f5f2f);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}

/* ===== LINK ===== */
.link {
  display: inline-block;
  margin-top: 20px;
  color: #8fd46a;
  cursor: pointer;
}

/* ===== SUCCESS / ERROR ===== */
.error {
  margin-top: 15px;
  color: #ff6b6b;
}

.success {
  margin-top: 15px;
  color: #8fd46a;
  font-weight: bold;
}
</style>
