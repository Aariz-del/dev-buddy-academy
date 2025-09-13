import { useState } from "react";
import { Play, Copy, Download, RotateCcw, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

export const CodeEditor = () => {
  const { toast } = useToast();
  const [code, setCode] = useState(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`);

  const [isRunning, setIsRunning] = useState(false);

  const handleRunCode = () => {
    setIsRunning(true);
    toast({
      title: "Code executed!",
      description: "Check the console for output.",
    });
    setTimeout(() => setIsRunning(false), 1000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied to clipboard!",
      description: "Your code has been copied.",
    });
  };

  const handleResetCode = () => {
    setCode(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`);
    toast({
      title: "Code reset",
      description: "Code has been reset to the original example.",
    });
  };

  return (
    <Card className="h-full bg-gradient-code border-border/50 shadow-code">
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <div className="w-3 h-3 rounded-full bg-warning"></div>
            <div className="w-3 h-3 rounded-full bg-success"></div>
          </div>
          <span className="text-muted-foreground text-sm ml-2">main.js</span>
        </div>
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground" onClick={handleCopyCode}>
                <Copy className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Copy code</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground" onClick={handleResetCode}>
                <RotateCcw className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Reset to example</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground">
                <HelpCircle className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Keyboard shortcuts: Ctrl+Enter to run</TooltipContent>
          </Tooltip>
          
          <Button 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow disabled:opacity-50" 
            onClick={handleRunCode}
            disabled={isRunning}
          >
            <Play className="w-4 h-4 mr-2" />
            {isRunning ? "Running..." : "Run Code"}
          </Button>
        </div>
      </div>
      
      <div className="relative h-full">
        <div className="flex h-full">
          {/* Line numbers */}
          <div className="w-12 bg-muted/50 p-4 text-editor-lineNumber text-sm font-mono select-none">
            {code.split('\n').map((_, index) => (
              <div key={index} className="leading-6">
                {index + 1}
              </div>
            ))}
          </div>
          
          {/* Code area */}
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 p-4 bg-transparent text-foreground font-mono text-sm leading-6 resize-none focus:outline-none selection:bg-editor-selection focus:ring-2 focus:ring-primary/20 rounded-r-lg"
            spellCheck={false}
            placeholder="Start coding... (Press Ctrl+Enter to run)"
            onKeyDown={(e) => {
              if (e.ctrlKey && e.key === 'Enter') {
                handleRunCode();
              }
            }}
          />
        </div>
      </div>
    </Card>
  );
};