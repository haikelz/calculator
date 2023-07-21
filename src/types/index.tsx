import { ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
};

export type ResultsListProps = {
  id: string;
  operation: string;
  result: string;
};
