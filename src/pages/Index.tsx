import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">AHM Resources Versions</h1>
          <p className="text-xl text-muted-foreground">
            Choose a version to explore
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>Version 1</CardTitle>
              <CardDescription>Original design with blue gradient header</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="/ahm-resources.html" target="_blank" rel="noopener noreferrer">
                <Button className="w-full">Open Version 1</Button>
              </a>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>Version 2</CardTitle>
              <CardDescription>Enhanced design with improved layout</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="/ahm-resources-v2.html" target="_blank" rel="noopener noreferrer">
                <Button className="w-full">Open Version 2</Button>
              </a>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>Version 3</CardTitle>
              <CardDescription>Material Angular style with clean design</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="/ahm-resources-v3.html" target="_blank" rel="noopener noreferrer">
                <Button className="w-full">Open Version 3</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
