import { useAtom, useSetAtom } from "jotai";
import { nanoid } from "nanoid";
import { memo } from "react";
import { listButtons } from "~/lib/utils/data";
import {
  inputUserAtom,
  isEqualOperationAtom,
  operationTypeAtom,
  resultAtom,
  resultsListAtom,
} from "~/store";
import { ResultsListProps } from "~/types";
import { Button, Paragraph } from "../atoms";

export function Keyboard() {
  const [inputUser, setInputUser] = useAtom(inputUserAtom);
  const [resultsList, setResultsList] = useAtom(resultsListAtom);
  const [isEqualOperation, setIsEqualOperation] = useAtom(isEqualOperationAtom);

  const setOperationType = useSetAtom(operationTypeAtom);
  const setResult = useSetAtom(resultAtom);

  function saveDataToLocalStorage<T>(newResults: T) {
    localStorage.setItem("results", JSON.stringify(newResults));
  }

  function handleOperation(item: string) {
    if (
      isEqualOperation &&
      item !== "DEL" &&
      item !== "+" &&
      item !== "-" &&
      item !== "x" &&
      item !== "/"
    )
      return;
    const newData = [...inputUser];

    item === "DEL" ? newData.pop() : newData.push(item as string);
    item === "+" || item === "-" || item === "x" || item === "/"
      ? setOperationType(item)
      : null;

    setIsEqualOperation(false);
    setInputUser(newData);
    setResult("");
  }

  function handleReset() {
    let newData = [...inputUser];
    newData = [];

    setInputUser(newData);
    setIsEqualOperation(false);
    setOperationType("");
    setResult("");
  }

  function handleEqual() {
    const newResults = [...(resultsList as Array<ResultsListProps>)];
    const joinInputUser = eval(
      inputUser.map((item) => (item === "x" ? "*" : item)).join("")
    );

    newResults.push({
      id: nanoid(),
      operation: inputUser.join(""),
      result: joinInputUser,
    });

    setResult(joinInputUser);
    setResultsList(newResults);
    setIsEqualOperation(true);
    saveDataToLocalStorage(newResults);
  }

  return (
    <div className="p-8 mt-4 gap-4 bg-gray-800 grid grid-cols-4 grid-rows-4 rounded-md">
      {listButtons.map((item) => (
        <Button
          intent={item === "DEL" ? "sky" : "teal"}
          key={item}
          label="operation"
          onClick={() => handleOperation(item as string)}
        >
          <Paragraph>{item}</Paragraph>
        </Button>
      ))}
      <Button intent="sky" label="reset" onClick={handleReset}>
        <Paragraph>Reset</Paragraph>
      </Button>
      <Button intent="orange" label="equal" onClick={handleEqual}>
        <Paragraph>=</Paragraph>
      </Button>
    </div>
  );
}

memo(Keyboard);
