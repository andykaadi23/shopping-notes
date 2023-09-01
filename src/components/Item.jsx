const Item = ({ item, onDeleteItems }) => {
  return (
    <li key={item.id}>
      <input type="checkbox" />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>&times;</button>
    </li>
  );
};
export default Item;
