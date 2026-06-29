import { DashboardLoadingState } from "@/components/dashboard/DashboardLoadingState";

export default function RaceAnalysisLoading() {
  return (
    <DashboardLoadingState
      sectionLabel="Race Analysis"
      detailLabel="Loading telemetry, lap charts, and pit strategy"
      tableRows={3}
    />
  );
}