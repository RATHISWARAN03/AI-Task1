import Header from "@/components/header";
import { programs } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-5xl py-32 px-4">
        <div className="grid md:grid-cols-2 gap-8 mt-[-100]">
          {programs.map((program) => (
            <Card
              key={program.id}
              className="flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{program.title}</CardTitle>
                <CardDescription className="font-semibold text-primary">
                  {program.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-4">
                  {program.description}
                </p>
                <div className="mt-auto space-y-3">
                  <div>
                    <h4 className="font-semibold">Ideal For:</h4>
                    <p className="text-sm text-muted-foreground">
                      {program.idealFor}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Outcomes:</h4>
                    <p className="text-sm text-muted-foreground">
                      {program.outcomes}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
