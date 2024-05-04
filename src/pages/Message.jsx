import { format } from "date-fns";
import { useMessage } from "../features/messages/useMessage";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";
import styled from "styled-components";

import ButtonText from "../ui/ButtonText";
import { useMoveBack } from "../hooks/useMoveBack";
import Button from "../ui/Button";

const MessageContainer = styled.div`
  background-color: var(--color-grey-100);
  border-radius: 7px;
  padding: 20px;
  & div {
    margin-bottom: 20px;
  }
`;

function Message() {
  const { data: message, isLoading } = useMessage();
  const moveBack = useMoveBack();
  if (isLoading) return <Spinner />;

  function handleReplyMessage() {
    window.location = `mailto:${message.email}`;
  }
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Message from {message.fullName}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>
      <MessageContainer>
        <Row type="horizontal">
          <Heading as="h2">Message content:</Heading>
          <p>Date: {format(new Date(message.created_at), "dd.MMM.yyyy.")}</p>
        </Row>
        <p>{message.message}</p>
      </MessageContainer>
      <Button onClick={handleReplyMessage}>Reply to a message</Button>
    </>
  );
}

export default Message;
