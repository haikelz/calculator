import { useAtom } from "jotai";
import { isSavedAtom } from "~/store";
import { Button, Paragraph } from "../atoms";
import { cx } from "class-variance-authority";

type CardProps = {
  item: {
    id: string;
    operation: string;
    result: string;
  };
};

export function Card({ item }: CardProps) {
  const [isSaved, setIsSaved] = useAtom(isSavedAtom);

  async function saveData(text: string) {
    try {
      if ("clipboard" in navigator) await navigator.clipboard.writeText(text);
      else document.execCommand("copy", true, text);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSave(text: string) {
    try {
      await saveData(text);

      setIsSaved(!isSaved);
      setTimeout(() => {
        setIsSaved(isSaved);
      }, 1500);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div
      className={cx("py-4 px-4 border rounded-md", "border-gray-500 bg-base-0")}
    >
      <Paragraph
        intent="light"
        className="text-center"
        weight="bold"
        size="extra-large"
      >
        {item.operation} = {item.result}
      </Paragraph>
      <Button
        className={cx(
          "px-3 py-2 w-full rounded-md bg-base-2",
          "transition-all mt-3",
          "hover:ring hover:ring-base-3"
        )}
        onClick={() => handleSave(item.result)}
        intent="sky"
        label="copy"
      >
        <Paragraph size="normal" intent="light" weight="bold">
          {isSaved ? "Saved!" : "Copy"}
        </Paragraph>
      </Button>
    </div>
  );
}
