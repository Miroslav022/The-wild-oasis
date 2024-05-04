import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { field: "all", value: "All" },
          { field: "with-discount", value: "With discount" },
          { field: "no-discount", value: "No discount" },
        ]}
      />
      <SortBy
        options={[
          { sortBy: "name-asc", value: "Sort By name (A-Z)" },
          { sortBy: "name-desc", value: "Sort By name (Z-A)" },
          { sortBy: "regularPrice-asc", value: "Sort By price (low first)" },
          { sortBy: "regularPrice-desc", value: "Sort By price (high first)" },
          {
            sortBy: "maxCapacity-asc",
            value: "Sort By capacity (low first)",
          },
          {
            sortBy: "maxCapacity-desc",
            value: "Sort By capacity (high first)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
