import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Landing } from "./components/pages/Landing";
import { Dashboard } from "./components/pages/Dashboard";
import { Chat } from "./components/pages/Chat";
import { Planner } from "./components/pages/Planner";
import { Habits } from "./components/pages/Habits";
import { JournalHome } from "./components/pages/JournalHome";
import { WriteJournal } from "./components/pages/WriteJournal";
import { DailyReflection } from "./components/pages/DailyReflection";
import { Analytics } from "./components/pages/Analytics";
import { History } from "./components/pages/History";
import { Books } from "./components/pages/Books";
import { PDFReader } from "./components/pages/PDFReader";
import { Skills } from "./components/pages/Skills";
import { SkillDetail } from "./components/pages/SkillDetail";
import { Music } from "./components/pages/Music";
import { Movies } from "./components/pages/Movies";
import { Gamification } from "./components/pages/Gamification";
import { Profile } from "./components/pages/Profile";
import { Settings } from "./components/pages/Settings";
import { Notifications } from "./components/pages/Notifications";
import { VoiceCompanion } from "./components/pages/VoiceCompanion";
import { MoodHub } from "./components/pages/MoodHub";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/app",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "chat", Component: Chat },
      { path: "planner", Component: Planner },
      { path: "habits", Component: Habits },
      { path: "journal", Component: JournalHome },
      { path: "journal/write", Component: WriteJournal },
      { path: "journal/reflection", Component: DailyReflection },
      { path: "analytics", Component: Analytics },
      { path: "history", Component: History },
      { path: "books", Component: Books },
      { path: "books/reader/:id", Component: PDFReader },
      { path: "skills", Component: Skills },
      { path: "skills/:id", Component: SkillDetail },
      { path: "music", Component: Music },
      { path: "movies", Component: Movies },
      { path: "gamification", Component: Gamification },
      { path: "profile", Component: Profile },
      { path: "settings", Component: Settings },
      { path: "notifications", Component: Notifications },
      { path: "voice", Component: VoiceCompanion },
      { path: "mood", Component: MoodHub },
    ],
  },
]);
