import { useAtomValue } from "jotai";
import { inputUserAtom, resultAtom } from "~/store";

export function DisplayResult() {
  const inputUser = useAtomValue(inputUserAtom);
  const result = useAtomValue(resultAtom);

  return (
    <div className="p-8 text-right rounded-md bg-gray-800">
      <h1 className="font-bold text-5xl text-white">
        {inputUser.length ? inputUser : 0}
      </h1>
      <p className="text-white font-bold mt-2 text-xl">{result}</p>
    </div>
  );
}
