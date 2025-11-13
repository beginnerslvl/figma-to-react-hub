import { WeeklyEngagementChart } from "@/components/WeeklyEngagementChart";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6">
      <div>
        <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Statistics</p>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Weekly Engagement</h1>
      </div>

      <div className="grid gap-3 sm:gap-4 lg:gap-6">
        <WeeklyEngagementChart />
      </div>
    </div>
  );
};

export default Analytics;
