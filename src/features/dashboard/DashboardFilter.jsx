import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { field: "7", value: "Last 7 days" },
        { field: "30", value: "Last 30 days" },
        { field: "90", value: "Last 90 days" },
      ]}
    />
  );
}

export default DashboardFilter;
