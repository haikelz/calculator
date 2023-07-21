import { ChildrenProps } from "~/types";

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className="w-full flex bg-black min-h-screen justify-center p-4 items-center">
      <main className="w-full max-w-6xl flex justify-center items-center">
        <div className="flex justify-center items-center w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
