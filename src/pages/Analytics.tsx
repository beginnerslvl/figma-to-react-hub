import { WeeklyEngagementChart } from "@/components/WeeklyEngagementChart";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 space-y-6">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Statistics</p>
        <h1 className="text-2xl sm:text-3xl font-bold">Weekly Engagement</h1>
      </div>

      <div className="grid gap-6">
        <WeeklyEngagementChart />
      </div>
    </div>
  );
};

export default Analytics;
