import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import MessageRow from "./MessageRow";
import { useMessages } from "./useMessages";

function AllMessages() {
  const { messages, count, isLoading } = useMessages();
  if (isLoading) return <Spinner />;
  return (
    <Menus>
      <Table columns="1fr 1fr 1fr 0.2fr">
        <Table.Header>
          <div>Full name</div>
          <div>Email</div>
          <div>Message</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={messages}
          render={(message) => <MessageRow message={message} />}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default AllMessages;
