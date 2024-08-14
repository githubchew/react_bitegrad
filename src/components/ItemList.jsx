export default function ItemList() {
  return (
    <ul>
      <Item />
      <Item />
      <Item />
      <li>passport</li>
      <li>phone charger</li>
    </ul>
  );
}

function Item() {
  return (
    <li className="item">
      <label>
        <input type="checkbox" name="" id="" />god
      </label>
    </li>
  );
}
