"use client";
import { motion } from "framer-motion";
import profile from "@/data/profile";

// Calculate XP from profile data
function calculateStats() {
  const totalProjects = profile.projects.length;
  const totalCerts = profile.certifications.length;
  
  const totalYearsExp = profile.experience.reduce((acc, exp) => {
    // Handle both "-" and "–" separators
    const parts = exp.period.replace(" - ", " – ").split(" – ");
    if (parts.length !== 2) return acc;
    
    const startParts = parts[0]?.trim().split(" ") || [];
    const endParts = parts[1]?.trim().split(" ") || [];
    
    if (startParts.length < 2) return acc;
    
    const startMonth = startParts[0];
    const startYear = startParts[1];
    const endMonth = endParts[0];
    const endYear = endParts[1] || endParts[0];
    
    const start = new Date(`${startMonth} 1, ${startYear}`);
    const end = endYear === "Present" || !endYear ? new Date() : new Date(`${endMonth} 1, ${endYear}`);
    
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return acc;
    
    return acc + (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365);
  }, 0);

  const baseXP = 1000;
  const projectXP = totalProjects * 500;
  const certXP = totalCerts * 300;
  const expXP = Math.floor(totalYearsExp * 800);
  const skillXP = Object.values(profile.skills).flat().length * 50;

  const totalXP = baseXP + projectXP + certXP + expXP + skillXP;
  const level = Math.floor(totalXP / 1500) + 1;
  const currentLevelXP = totalXP % 1500;
  const xpForNextLevel = 1500;

  return {
    level,
    totalXP,
    currentLevelXP,
    xpForNextLevel,
    stats: {
      projects: totalProjects,
      certifications: totalCerts,
      yearsExp: Math.round(totalYearsExp * 10) / 10,
      skills: Object.values(profile.skills).flat().length,
    },
  };
}

export function XPBar() {
  const { level, totalXP, currentLevelXP, xpForNextLevel, stats } = calculateStats();
  const progress = (currentLevelXP / xpForNextLevel) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed top-16 left-0 right-0 z-30 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 bg-background/80 backdrop-blur-md border border-foreground/10 rounded-lg p-3 shadow-lg">
          {/* Level Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            className="relative flex-shrink-0"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <span className="text-xl font-bold text-white">
                {level}
              </span>
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-background text-[10px] px-2 py-0.5 rounded-full border border-foreground/20 font-semibold">
              LVL
            </div>
          </motion.div>

          {/* XP Bar */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-foreground/70 font-medium">ML Engineer</span>
              <span className="text-foreground/50">
                {currentLevelXP.toLocaleString()} / {xpForNextLevel.toLocaleString()} XP
              </span>
            </div>
            <div className="h-3 bg-foreground/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full relative"
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
              </motion.div>
            </div>
            <div className="flex items-center gap-4 mt-2 text-[10px] text-foreground/50">
              <span>🎯 {stats.projects} Projects</span>
              <span>🏆 {stats.certifications} Certs</span>
              <span>⚡ {stats.yearsExp}y Exp</span>
              <span>🔧 {stats.skills} Skills</span>
            </div>
          </div>

          {/* Total XP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-right flex-shrink-0 hidden sm:block"
          >
            <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {totalXP.toLocaleString()}
            </div>
            <div className="text-[10px] text-foreground/50 uppercase tracking-wider">Total XP</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
