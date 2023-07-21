import { atom } from "jotai";
import { ResultsListProps } from "~/types";

export const inputUserAtom = atom<Array<string>>([]);
export const operationTypeAtom = atom<string>("");
export const resultAtom = atom<string>("");
export const isEqualOperationAtom = atom<boolean>(false);
export const resultsListAtom = atom<ResultsListProps[] | null>([]);
export const isSavedAtom = atom<boolean>(false);
export const titleAtom = atom<string>("Calculator App");
