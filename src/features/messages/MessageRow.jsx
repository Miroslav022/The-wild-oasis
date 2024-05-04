import styled from "styled-components";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import { HiEye, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDelete } from "./useDelete";

const P = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-grey-600);
`;
const StyledMessage = styled.p`
  color: var(--color-grey-600);
`;

function MessageRow({ message }) {
  const navigate = useNavigate();
  const { id, fullName, email, message: messageText } = message;
  const deleteMessage = useDelete();
  return (
    <Table.Row>
      <P>{fullName}</P>
      <P>{email}</P>
      <StyledMessage>{messageText.substring(0, 30) + "..."}</StyledMessage>
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={id} />

          <Menus.List id={id}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/message/${id}`)}
            >
              See Details
            </Menus.Button>
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete Message</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="message"
            onConfirm={() => deleteMessage(id)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default MessageRow;
