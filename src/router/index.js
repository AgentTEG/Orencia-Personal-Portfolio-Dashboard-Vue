import { createRouter, createWebHashHistory } from "vue-router";
import { supabase } from "../supabase";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

import LandingHub from "../views/portfolio/LandingHub.vue";
import DashboardLayout from "../views/portfolio/DashboardLayout.vue";

import Profile from "../views/portfolio/Profile.vue";
import Showcase from "../views/portfolio/Showcase.vue";
import Contact from "../views/portfolio/Contact.vue";
import Creative from "../views/portfolio/Creative.vue";

const routes = [
  // ✅ 1. Redirect root directly to your Landing Hub
  { path: "/", redirect: "/portfolio" },

  { path: "/login", component: Login },
  { path: "/register", component: Register },

  /* 🎬 LANDING SELECTOR (Public) */
  {
    path: "/portfolio",
    component: LandingHub,
  },

  /* 📊 DASHBOARD (Public) */
  {
    path: "/portfolio/dashboard",
    component: DashboardLayout,
    children: [
      { path: "profile", component: Profile },
      { path: "showcase", component: Showcase },
      { path: "contact", component: Contact }, // Contact is now fully public
      { path: "creative", component: Creative },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(), 
  routes,
});

/* 🔐 AUTH GUARD */
router.beforeEach(async (to, from, next) => {
  // If the route doesn't have meta: { requiresAuth: true }, let them through immediately
  if (!to.meta.requiresAuth) {
    return next();
  }

  // Otherwise, verify session
  const { data: { session } } = await supabase.auth.getSession();

  if (session) {
    next();
  } else {
    next("/login");
  }
});

export default router;