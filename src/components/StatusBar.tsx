import { CheckCircle, AlertCircle, Code, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const StatusBar = () => {
  return (
    <div className="border-t border-border/50 bg-card/30 backdrop-blur-sm px-6 py-2">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-success" />
            <span className="text-muted-foreground">Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">JavaScript</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/20">
            <AlertCircle className="w-3 h-3 mr-1" />
            All tests passing
          </Badge>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="w-3 h-3" />
            <span className="text-xs">Beginner friendly</span>
          </div>
        </div>
      </div>
    </div>
  );
};