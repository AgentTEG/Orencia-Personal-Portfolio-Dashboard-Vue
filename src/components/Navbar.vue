<template>
  <header class="navbar">
    <!-- ☰ GO TO LANDING HUB -->
    <button class="menu-btn" @click="goToHub">
      ☰
    </button>

    <h1>Alfred Joaquin L. Orencia</h1>

    <button class="logout" @click="logout">Logout</button>
  </header>
</template>

<script>
export default {
  methods: {
    goToHub() {
      this.$router.push("/portfolio");
    },

    async logout() {
      try {
        await fetch(
          "https://orencia-pers-follio.infinityfree.me/api/logout.php",
          {
            method: "POST",
            credentials: "include"
          }
        );
      } catch (err) {
        console.error("Logout failed", err);
      } finally {
        localStorage.removeItem("user_logged_in");
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 64px;
  width: 100%;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
}

.menu-btn {
  font-size: 22px;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  margin-right: 16px;
}

h1 {
  flex: 1;
  color: white;
  font-size: 20px;
  font-weight: bold;
}

.logout {
  background: white;
  color: var(--primary);
  border: none;
  padding: 6px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}
</style>
