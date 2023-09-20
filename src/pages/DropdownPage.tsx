import Dropdown from "../components/Dropdown/Dropdown";

const data = [
  { label: "Item 1", value: "Item1" },
  { label: "Item 2", value: "Item2" },
  { label: "Item 3", value: "Item3" },
];

function DropdownPage() {
  return (
    <div>
      <Dropdown
        options={data}
        onOptionClick={(option) => console.log(option)}
      />
    </div>
  );
}

export default DropdownPage;
