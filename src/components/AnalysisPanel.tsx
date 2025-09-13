import { AlertTriangle, CheckCircle, Info, XCircle, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Issue {
  type: "error" | "warning" | "info" | "suggestion";
  message: string;
  line: number;
  column?: number;
}

const mockIssues: Issue[] = [
  {
    type: "warning",
    message: "Unused variable 'result' declared but never used",
    line: 3,
    column: 8
  },
  {
    type: "suggestion", 
    message: "Consider using const instead of let for variables that don't change",
    line: 5,
    column: 3
  },
  {
    type: "info",
    message: "This function has O(2^n) time complexity. Consider using memoization.",
    line: 1,
    column: 10
  }
];

const mockSuggestions = [
  "Add error handling for edge cases (n < 0)",
  "Consider iterative approach for better performance", 
  "Add JSDoc comments for better documentation",
  "Implement input validation"
];

export const AnalysisPanel = () => {
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
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer border border-transparent hover:border-border/50"
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
                      <p className="text-sm text-foreground leading-relaxed">
                        {issue.message}
                      </p>
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
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer border border-transparent hover:border-border/50"
                  >
                    <Lightbulb className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-foreground leading-relaxed">
                        {suggestion}
                      </p>
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