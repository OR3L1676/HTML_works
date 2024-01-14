import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  background: pink;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : null)};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // not that good
  const getMessage = () => {
    return items.length === 0 ? <p>Unlooko Maluko No Monkeys Left</p> : null;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      {/* this is the best way */}
      {items.length === 0 && <p>Unl ooko Maluko No Monkeys Left</p>}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        <List>
          {items.map((item, index) => (
            <ListItem
              active={index === selectedIndex}
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
              // className={
              //   selectedIndex === index
              //     ? "list-group-item active"
              //     : "list-group-item list-group-item-action"
              // }
              style={{ cursor: "pointer" }}
            >
              {item}
            </ListItem>
          ))}
        </List>
      </ul>
    </>
  );
}
export default ListGroup;
