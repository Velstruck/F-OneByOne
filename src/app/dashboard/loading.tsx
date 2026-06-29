import { DashboardLoadingState } from "@/components/dashboard/DashboardLoadingState";

export default function DashboardLoading() {
  return (
    <DashboardLoadingState
      sectionLabel="Dashboard"
      detailLabel="Loading dashboard charts and season summaries"
    />
  );
}