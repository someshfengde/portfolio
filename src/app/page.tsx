import { GameHero } from "@/components/GameHero";
import { QuestProjects } from "@/components/QuestProjects";
import { TimelineExperience } from "@/components/TimelineExperience";
import { SkillConstellation } from "@/components/SkillConstellation";
import { AchievementBadges } from "@/components/AchievementBadges";
import { WritingHub } from "@/components/WritingHub";
import { GameFooter } from "@/components/GameFooter";

export default function Home() {
  return (
    <div className="font-sans">
      <GameHero />
      <QuestProjects />
      <TimelineExperience />
      <SkillConstellation />
      <AchievementBadges />
      <WritingHub />
      <GameFooter />
    </div>
  );
}
