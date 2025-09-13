import { AlertTriangle, CheckCircle, Info, XCircle, Lightbulb, Zap, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

interface Issue {
  type: "error" | "warning" | "info" | "suggestion";
  message: string;
  line: number;
  column?: number;
  fixable?: boolean;
  quickFix?: string;
}

const mockIssues: Issue[] = [
  {
    type: "warning",
    message: "Unused variable 'result' declared but never used",
    line: 3,
    column: 8,
    fixable: true,
    quickFix: "Remove unused variable"
  },
  {
    type: "suggestion", 
    message: "Consider using const instead of let for variables that don't change",
    line: 5,
    column: 3,
    fixable: true,
    quickFix: "Change let to const"
  },
  {
    type: "info",
    message: "This function has O(2^n) time complexity. Consider using memoization.",
    line: 1,
    column: 10,
    fixable: false
  }
];

const mockSuggestions = [
  "Add error handling for edge cases (n < 0)",
  "Consider iterative approach for better performance", 
  "Add JSDoc comments for better documentation",
  "Implement input validation"
];

export const AnalysisPanel = () => {
  const { toast } = useToast();

  const handleQuickFix = (issue: Issue) => {
    toast({
      title: "Quick fix applied!",
      description: issue.quickFix,
    });
  };
  const getIssueIcon = (type: Issue["type"]) => {
    switch (type) {
      case "error": return <XCircle className="w-4 h-4 text-destructive" />;
      case "warning": return <AlertTriangle className="w-4 h-4 text-warning" />;
      case "info": return <Info className="w-4 h-4 text-primary" />;
      case "suggestion": return <Lightbulb className="w-4 h-4 text-accent" />;
    }
  };

  const getIssueColor = (type: Issue["type"]) => {
    switch (type) {
      case "error": return "text-destructive";
      case "warning": return "text-warning";
      case "info": return "text-primary"; 
      case "suggestion": return "text-accent";
    }
  };

  return (
    <Card className="h-full bg-card/50 backdrop-blur border-border/50">
      <Tabs defaultValue="issues" className="h-full flex flex-col">
        <div className="p-4 border-b border-border/50">
          <TabsList className="grid w-full grid-cols-2 bg-muted/50">
            <TabsTrigger value="issues" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Issues ({mockIssues.length})
            </TabsTrigger>
            <TabsTrigger value="suggestions" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Suggestions
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="flex-1 overflow-hidden">
          <TabsContent value="issues" className="h-full m-0 p-0">
            <div className="p-4 h-full overflow-y-auto">
              <div className="space-y-3">
                {mockIssues.map((issue, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50"
                  >
                    {getIssueIcon(issue.type)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className={`text-xs ${getIssueColor(issue.type)} border-current`}>
                          {issue.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          Line {issue.line}{issue.column && `:${issue.column}`}
                        </span>
                      </div>
                      <p className="text-sm text-foreground leading-relaxed mb-2">
                        {issue.message}
                      </p>
                      {issue.fixable && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-7 px-3 text-xs"
                              onClick={() => handleQuickFix(issue)}
                            >
                              <Zap className="w-3 h-3 mr-1" />
                              Quick Fix
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>{issue.quickFix}</TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="suggestions" className="h-full m-0 p-0">
            <div className="p-4 h-full overflow-y-auto">
              <div className="space-y-3">
                {mockSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50"
                  >
                    <Lightbulb className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-foreground leading-relaxed mb-2">
                        {suggestion}
                      </p>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-7 px-3 text-xs text-accent hover:text-accent hover:bg-accent/10"
                      >
                        Learn More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </Card>
  );
};