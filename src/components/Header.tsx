import { Code, Settings, User, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  CodeMaster
                </h1>
                <p className="text-xs text-muted-foreground">Interactive Coding Platform</p>
              </div>
            </div>
            
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <PlayCircle className="w-3 h-3 mr-1" />
              Learning Mode
            </Badge>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <User className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};