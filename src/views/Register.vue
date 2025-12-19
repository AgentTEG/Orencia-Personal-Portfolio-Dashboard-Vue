<template>
  <div class="auth-wrapper">
    <div class="auth-card">
      <h1>Create Account</h1>
      <p class="subtitle">Register a new account</p>

      <form @submit.prevent="register">
        <input v-model="username" placeholder="Username" required />
        <input v-model="email" placeholder="Email" required />

        <!-- Password with minimalist eye toggle -->
        <div class="password-wrapper">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
            required
          />
          <span class="eye" @click="showPassword = !showPassword">
            <svg
              v-if="!showPassword"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
              <circle cx="12" cy="12" r="3" />
            </svg>

            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.8 21.8 0 0 1 5.06-5.94" />
              <path d="M1 1l22 22" />
              <path d="M9.53 9.53A3.5 3.5 0 0 0 12 15.5a3.5 3.5 0 0 0 2.47-.97" />
              <path d="M14.47 14.47 9.53 9.53" />
              <path d="M12 4c7 0 11 8 11 8a21.77 21.77 0 0 1-3.17 4.28" />
            </svg>
          </span>
        </div>

        <button type="submit" :disabled="loading">
          {{ loading ? "Registering..." : "Register" }}
        </button>
      </form>

      <p class="link" @click="$router.push('/login')">Back to Login</p>

      <p v-if="success" class="success">
        Registration successful! Redirecting…
      </p>

      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      showPassword: false,
      error: "",
      success: false,
      loading: false
    };
  },
  methods: {
    async register() {
      this.error = "";
      this.success = false;
      this.loading = true;

      try {
        const res = await fetch(
          "https://orencia-pers-follio.infinityfree.me/api/register.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            
            body: JSON.stringify({
              username: this.username,
              email: this.email,
              password: this.password
            })
          }
        );

        const data = await res.json();

        if (!res.ok || !data.success) {
          this.error = data.message || "Registration failed";
          return;
        }

        localStorage.setItem("user_logged_in", "true");
        this.success = true;

        setTimeout(() => {
          this.$router.push("/portfolio/profile");
        }, 800);
      } catch (e) {
        this.error = "Server error. Please try again.";
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.auth-wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3f5f2f, #658a43);
}

.auth-card {
  background: white;
  padding: 40px;
  width: 360px;
  border-radius: 14px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.subtitle {
  color: #6b7280;
  margin-bottom: 25px;
}

input {
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
}

.password-wrapper {
  position: relative;
  margin-bottom: 15px;
}

.eye {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #6b7280;
}

.eye:hover {
  color: #374151;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #658a43;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 15px;
}

button:hover {
  background-color: #3f5f2f;
}

.link {
  margin-top: 15px;
  cursor: pointer;
  color: #658a43;
}

.error {
  margin-top: 10px;
  color: red;
}

.success {
  margin-top: 10px;
  color: green;
  font-weight: bold;
}
</style>
