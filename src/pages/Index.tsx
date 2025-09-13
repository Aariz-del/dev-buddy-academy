import { Header } from "@/components/Header";
import { CodeEditor } from "@/components/CodeEditor";
import { TutorialSidebar } from "@/components/TutorialSidebar";
import { AnalysisPanel } from "@/components/AnalysisPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-12 gap-6 h-[calc(100vh-120px)]">
          {/* Tutorial Sidebar */}
          <div className="col-span-3">
            <TutorialSidebar />
          </div>
          
          {/* Main Code Editor */}
          <div className="col-span-6">
            <CodeEditor />
          </div>
          
          {/* Analysis Panel */}
          <div className="col-span-3">
            <AnalysisPanel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
