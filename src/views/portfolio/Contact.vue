<template>
  <div class="contact-wrapper">
    <div class="contact-page">
      <!-- LEFT: MESSAGE FORM -->
      <div class="contact-card">
        <h2>Hey, nice to meet you! 👋</h2>
        <p class="subtitle">Leave me a message below</p>

        <input v-model="name" type="text" placeholder="Your name" />
        <input v-model="email" type="email" placeholder="Your email" />

        <textarea
          v-model="message"
          placeholder="Type your message here..."
        ></textarea>

        <button @click="send" :disabled="loading">
          {{ loading ? "Sending..." : "Send Message" }}
        </button>
      </div>

      <!-- RIGHT: MESSAGE FEED -->
      <div class="messages-panel">
        <h3>Messages</h3>

        <div class="messages-list" ref="messagesBox">
          <div
            v-for="msg in messages"
            :key="msg.id"
            class="message-item"
          >
            <div class="msg-header">
              <strong>{{ msg.name }}</strong>
              <span>{{ msg.email }}</span>
            </div>
            <p>{{ msg.message }}</p>
          </div>

          <p v-if="messages.length === 0" class="empty">
            No messages yet ✨
          </p>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <footer class="contact-footer">
      <div class="contact-links">
        <div class="contact-item">
          <span class="icon">✉</span>
          <a href="mailto:alfredjoaquinorencia@gmail.com">
            alfredjoaquinorencia@gmail.com
          </a>
        </div>

        <div class="contact-item">
          <span class="icon">☎</span>
          <span>0933 580 5060</span>
        </div>

        <div class="contact-item">
          <span class="icon">⧉</span>
          <a
            href="https://github.com/AgentTEG"
            target="_blank"
            rel="noopener"
          >
            github.com/AgentTEG
          </a>
        </div>

        <div class="contact-item">
          <span class="icon">⧉</span>
          <a
            href="http://orencia-pers-follio.infinityfree.me/"
            target="_blank"
            rel="noopener"
          >
            orencia-pers-follio.infinityfree.me
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      loading: false,
      messages: []
    };
  },

  mounted() {
    const stored = localStorage.getItem("contact_messages");
    this.messages = stored ? JSON.parse(stored) : [];
    this.$nextTick(this.scrollBottom);
  },

  methods: {
    scrollBottom() {
      const box = this.$refs.messagesBox;
      if (box) box.scrollTop = box.scrollHeight;
    },

    send() {
      if (!this.name || !this.email || !this.message) {
        alert("Please fill in all fields");
        return;
      }

      this.loading = true;

      this.messages.push({
        id: Date.now(),
        name: this.name,
        email: this.email,
        message: this.message
      });

      localStorage.setItem(
        "contact_messages",
        JSON.stringify(this.messages)
      );

      this.name = "";
      this.email = "";
      this.message = "";

      this.$nextTick(this.scrollBottom);
      this.loading = false;
    }
  }
};
</script>

<style scoped>
/* ===== ORIGINAL STYLES (UNCHANGED) ===== */
.contact-wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.contact-card {
  background: rgba(15, 25, 15, 0.9);
  color: #e5e7eb;
  padding: 30px;
  border-radius: 16px;
}

.subtitle {
  color: #9ca3af;
  margin-bottom: 15px;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: none;
  background: #1f2933;
  color: #e5e7eb;
}

textarea {
  min-height: 140px;
}

button {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #658a43, #3f5f2f);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.messages-panel {
  background: rgba(245, 247, 242, 0.95);
  padding: 20px;
  border-radius: 16px;
  max-height: 420px;
  display: flex;
  flex-direction: column;
}

.messages-panel h3 {
  color: #1f2937;
}

.messages-list {
  overflow-y: auto;
  margin-top: 10px;
}

.message-item {
  background: white;
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 12px;
  color: #1f2937;
}

.msg-header span {
  font-size: 0.8rem;
  color: #6b7280;
}

.empty {
  text-align: center;
  color: #6b7280;
  margin-top: 20px;
}

/* ===== FOOTER (HORIZONTAL ALIGNMENT) ===== */
.contact-footer {
  padding: 20px;
  background: rgba(15, 25, 15, 0.85);
  border-radius: 14px;
}

.contact-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  flex-wrap: wrap; /* wraps nicely on small screens */
  font-size: 0.9rem;
  color: #d1d5db;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.contact-item .icon {
  opacity: 0.8;
}

.contact-item a {
  color: #9ae6b4;
  text-decoration: none;
}

.contact-item a:hover {
  text-decoration: underline;
}
</style>
