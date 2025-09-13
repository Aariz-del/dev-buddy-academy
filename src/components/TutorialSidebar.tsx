import { useState } from "react";
import { ChevronRight, CheckCircle, Circle, Book, Code, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Lesson {
  id: string;
  title: string;
  completed: boolean;
  difficulty: "beginner" | "intermediate" | "advanced";
}

const lessons: Lesson[] = [
  { id: "1", title: "Variables and Data Types", completed: true, difficulty: "beginner" },
  { id: "2", title: "Functions and Scope", completed: true, difficulty: "beginner" },
  { id: "3", title: "Arrays and Objects", completed: false, difficulty: "beginner" },
  { id: "4", title: "Loops and Iterations", completed: false, difficulty: "intermediate" },
  { id: "5", title: "Async Programming", completed: false, difficulty: "advanced" },
  { id: "6", title: "Error Handling", completed: false, difficulty: "intermediate" },
];

export const TutorialSidebar = () => {
  const [selectedLesson, setSelectedLesson] = useState("3");

  const getDifficultyColor = (difficulty: Lesson["difficulty"]) => {
    switch (difficulty) {
      case "beginner": return "bg-success text-success-foreground";
      case "intermediate": return "bg-warning text-warning-foreground";
      case "advanced": return "bg-destructive text-destructive-foreground";
    }
  };

  return (
    <Card className="h-full bg-card/50 backdrop-blur border-border/50">
      <div className="p-4 border-b border-border/50">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Book className="w-5 h-5 text-primary" />
          JavaScript Basics
        </h2>
        <p className="text-muted-foreground text-sm mt-1">Interactive lessons and exercises</p>
      </div>

      <div className="p-4">
        <div className="space-y-3">
          {lessons.map((lesson) => (
            <Button
              key={lesson.id}
              variant={selectedLesson === lesson.id ? "secondary" : "ghost"}
              className={`w-full justify-start p-4 h-auto ${
                selectedLesson === lesson.id 
                  ? "bg-secondary/50 border border-primary/20 shadow-glow" 
                  : "hover:bg-muted/50"
              }`}
              onClick={() => setSelectedLesson(lesson.id)}
            >
              <div className="flex items-start gap-3 w-full">
                {lesson.completed ? (
                  <CheckCircle className="w-5 h-5 text-success mt-1 shrink-0" />
                ) : (
                  <Circle className="w-5 h-5 text-muted-foreground mt-1 shrink-0" />
                )}
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{lesson.title}</span>
                    <Badge className={`text-xs px-2 py-0.5 ${getDifficultyColor(lesson.difficulty)}`}>
                      {lesson.difficulty}
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {lesson.completed ? "Completed" : "Not started"}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground mt-1 shrink-0" />
              </div>
            </Button>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-secondary rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-accent-foreground" />
            <span className="font-semibold text-accent-foreground">Quick Challenge</span>
          </div>
          <p className="text-sm text-accent-foreground/80 mb-3">
            Write a function to reverse a string without using built-in methods.
          </p>
          <Button size="sm" variant="secondary" className="bg-accent-foreground/10 hover:bg-accent-foreground/20 text-accent-foreground border-accent-foreground/20">
            <Code className="w-4 h-4 mr-2" />
            Start Challenge
          </Button>
        </div>
      </div>
    </Card>
  );
};