import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function MessageTableOperations() {
  return (
    <TableOperations>
      <SortBy
        options={[
          { field: "created_at-desc", value: "Sort by date (recent first)" },
          { field: "created_at-asc", value: "Sort by date (earlier first)" },
        ]}
      />
    </TableOperations>
  );
}

export default MessageTableOperations;
