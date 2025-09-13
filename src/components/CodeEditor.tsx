import { useState } from "react";
import { Play, Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const CodeEditor = () => {
  const [code, setCode] = useState(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`);

  const handleRunCode = () => {
    console.log("Running code:", code);
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
          <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground">
            <Copy className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground">
            <Download className="w-4 h-4" />
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
            <Play className="w-4 h-4 mr-2" />
            Run Code
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
            className="flex-1 p-4 bg-transparent text-foreground font-mono text-sm leading-6 resize-none focus:outline-none selection:bg-editor-selection"
            spellCheck={false}
            placeholder="Start coding..."
          />
        </div>
      </div>
    </Card>
  );
};