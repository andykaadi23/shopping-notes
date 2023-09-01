const Footer = ({ items }) => {
  if (items.length === 0)
    return <footer className="stats">the shopping list is still empty</footer>;

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const precentage = Math.round((checkedItems / totalItems) * 100);

  return (
    <footer className="stats">
      There are {totalItems} items on the grocery list, {checkedItems} items
      already purchased ({precentage}%)
    </footer>
  );
};
export default Footer;
