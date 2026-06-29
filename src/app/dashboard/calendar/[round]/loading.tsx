import { DashboardLoadingState } from "@/components/dashboard/DashboardLoadingState";

export default function CalendarRoundLoading() {
  return (
    <DashboardLoadingState
      sectionLabel="Calendar"
      detailLabel="Loading race detail, lap data, and pit stops"
      tableRows={3}
    />
  );
}