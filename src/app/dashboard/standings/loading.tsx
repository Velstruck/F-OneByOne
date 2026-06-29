import { DashboardLoadingState } from "@/components/dashboard/DashboardLoadingState";

export default function StandingsLoading() {
  return (
    <DashboardLoadingState
      sectionLabel="Standings"
      detailLabel="Loading driver and constructor rankings"
      tableRows={5}
    />
  );
}