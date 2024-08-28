export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        You have nothing on list. Add some items to get started
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100
        ? "you packed all. raeady to go!"
        : `
      you have ${numItems} items on list, you already packed ${numPacked},
      ${percentage}%
      `}
    </footer>
  );
}
