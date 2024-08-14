import Button from "../Button";

const secondaryButtons = [
  "Mark all complete",
  "mark all incomplete",
  "Reset",
  "Remove All Items",
];
export default function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => {
        return (
          <Button key={text} type="secondary">
            {text} oo
          </Button>
        );
      })}
    </section>
  );
}
