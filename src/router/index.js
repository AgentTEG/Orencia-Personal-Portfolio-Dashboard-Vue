import { createRouter, createWebHashHistory } from "vue-router";
import { supabase } from "../supabase"; // ✅ Import supabase for the guard

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

import LandingHub from "../views/portfolio/LandingHub.vue";
import DashboardLayout from "../views/portfolio/DashboardLayout.vue";

import Profile from "../views/portfolio/Profile.vue";
import Showcase from "../views/portfolio/Showcase.vue";
import Contact from "../views/portfolio/Contact.vue";
import Creative from "../views/portfolio/Creative.vue";

const routes = [
  { path: "/", redirect: "/login" },

  { path: "/login", component: Login },
  { path: "/register", component: Register },

  /* 🎬 LANDING SELECTOR */
  {
    path: "/portfolio",
    component: LandingHub,
    meta: { requiresAuth: true },
  },

  /* 📊 DASHBOARD */
  {
    path: "/portfolio/dashboard",
    component: DashboardLayout,
    meta: { requiresAuth: true },
    children: [
      { path: "profile", component: Profile },
      { path: "showcase", component: Showcase },
      { path: "contact", component: Contact },
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
  // 1. If the route doesn't require auth, let them through
  if (!to.meta.requiresAuth) {
    return next();
  }

  // 2. Check Supabase for an active session
  const { data: { session } } = await supabase.auth.getSession();

  // 3. If session exists, proceed. Otherwise, kick to login.
  if (session) {
    next();
  } else {
    next("/login");
  }
});

export default router;