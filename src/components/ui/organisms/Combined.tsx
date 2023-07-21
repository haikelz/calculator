import { Heading } from "../atoms/Heading";
import { ActionsList, DisplayResult, Keyboard } from "../molecules";

export function Combined() {
  return (
    <div>
      <Heading intent="light" className="mb-7 text-center">
        Calculator App
      </Heading>
      <DisplayResult />
      <Keyboard />
      <ActionsList />
    </div>
  );
}
