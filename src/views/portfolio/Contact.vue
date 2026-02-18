<template>
  <div class="contact-wrapper">
    <div class="contact-page">
      <div class="contact-card">
        <h2>Hey, nice to meet you! 👋</h2>
        <p class="subtitle">Leave me a message below</p>

        <input v-model="name" type="text" placeholder="Your name" disabled />
        <input v-model="email" type="email" placeholder="Your email" disabled />

        <textarea
          v-model="message"
          placeholder="Type your message here..."
        ></textarea>

        <button @click="send" :disabled="loading || !user">
          {{ loading ? "Sending..." : "Send Message" }}
        </button>

        <p v-if="!user" class="error" style="margin-top:10px;">
          Please log in to send a message.
        </p>
      </div>

      <div class="messages-panel">
        <h3>Messages</h3>

        <div class="messages-list" ref="messagesBox">
          <div
            v-for="msg in messages"
            :key="msg.id"
            class="message-item"
          >
            <div class="msg-header">
              <strong v-if="msg.name && msg.name !== 'EMPTY'">{{ msg.name }}</strong>
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
  </div>
</template>

<script>
import { supabase } from "../../supabase";

export default {
  data() {
    return {
      user: null,
      name: "",  // Name is back
      email: "", 
      message: "",
      loading: false,
      messages: []
    };
  },

  async mounted() {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      this.user = user;
      this.email = user.email;
      // Get the username from the metadata we set in Register.vue
      this.name = user.user_metadata?.username || "Guest";
    }

    await this.fetchMessages();
  },

  methods: {
    async fetchMessages() {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: true });

      if (!error && data) {
        this.messages = data;
        this.$nextTick(this.scrollBottom);
      }
    },

    scrollBottom() {
      const box = this.$refs.messagesBox;
      if (box) {
        box.scrollTop = box.scrollHeight;
      }
    },

    async send() {
      if (!this.message.trim()) {
        alert("Please type a message.");
        return;
      }
      if (!this.user) return;

      this.loading = true;

      const { data, error } = await supabase
        .from("messages")
        .insert([
          {
            name: this.name, // Sending the username
            email: this.email,
            message: this.message
          }
        ])
        .select();

      if (error) {
        alert("Failed to send message: " + error.message);
      } else if (data && data.length > 0) {
        this.messages.push(data[0]);
        this.message = ""; 
        this.$nextTick(this.scrollBottom);
      }

      this.loading = false;
    }
  }
};
</script>

<style scoped>
/* Styles remain the same as your previous version */
.msg-header span {
  font-size: 0.75rem;
  color: #6b7280;
}
</style>

<style scoped>
.contact-wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: start; /* Keeps form from stretching with the messages */
}

.contact-card {
  background: rgba(15, 25, 15, 0.9);
  color: #e5e7eb;
  padding: 30px;
  border-radius: 16px;
  position: sticky; /* Form stays visible as you scroll long message lists */
  top: 20px;
}

.subtitle {
  color: #9ca3af;
  margin-bottom: 15px;
}

input, textarea {
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
  font-weight: bold;
}

.messages-panel {
  background: rgba(245, 247, 242, 0.95);
  padding: 20px;
  border-radius: 16px;
  /* FIX: Expandable height */
  min-height: 450px;
  max-height: 80vh; 
  display: flex;
  flex-direction: column;
}

.messages-panel h3 {
  color: #1f2937;
  margin-bottom: 15px;
}

.messages-list {
  overflow-y: auto;
  flex-grow: 1; /* Fills the panel space */
  padding-right: 10px;
}

.message-item {
  background: white;
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 12px;
  color: #1f2937;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  border-left: 4px solid #658a43;
}

.msg-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
}

.msg-header strong {
  font-size: 1rem;
  color: #1f2937;
}

.msg-header span {
  font-size: 0.75rem;
  color: #6b7280;
}

.empty {
  text-align: center;
  color: #6b7280;
  margin-top: 20px;
}

/* Custom Scrollbar */
.messages-list::-webkit-scrollbar {
  width: 5px;
}
.messages-list::-webkit-scrollbar-thumb {
  background: #658a43;
  border-radius: 10px;
}
</style>