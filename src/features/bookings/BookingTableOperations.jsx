import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { field: "all", value: "All" },
          { field: "checked-out", value: "Checked out" },
          { field: "checked-in", value: "Checked in" },
          { field: "unconfirmed", value: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { field: "startDate-desc", value: "Sort by date (recent first)" },
          { field: "startDate-asc", value: "Sort by date (earlier first)" },
          {
            field: "totalPrice-desc",
            value: "Sort by amount (high first)",
          },
          { field: "totalPrice-asc", value: "Sort by amount (low first)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
