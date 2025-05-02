
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import WriteupsList from "./pages/WriteupsList";
import WriteupDetail from "./pages/WriteupDetail";
import WriteupEditor from "./pages/WriteupEditor";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPages from "./pages/AuthPages";
import NinjaSkillsWriteup from "./pages/WriteupDetail/NinjaSkills";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/writeups" element={<WriteupsList />} />
          <Route path="/writeup/:id" element={<WriteupDetail />} />
          <Route path="/writeup/ninja-skills" element={<NinjaSkillsWriteup />} />
          <Route path="/writeup/new" element={<WriteupEditor />} />
          <Route path="/writeup/edit/:id" element={<WriteupEditor />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/login" element={<AuthPages type="login" />} />
          <Route path="/signup" element={<AuthPages type="signup" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
