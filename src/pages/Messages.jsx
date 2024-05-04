import AllMessages from "../features/messages/AllMessages";
import MessageTableOperations from "../features/messages/MessageTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Messages() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All messages</Heading>
        <MessageTableOperations />
      </Row>
      <AllMessages />
    </>
  );
}

export default Messages;
