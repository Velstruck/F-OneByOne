import { DashboardLoadingState } from "@/components/dashboard/DashboardLoadingState";

export default function CalendarLoading() {
  return (
    <DashboardLoadingState
      sectionLabel="Calendar"
      detailLabel="Loading season schedule and race links"
      tableRows={6}
    />
  );
}