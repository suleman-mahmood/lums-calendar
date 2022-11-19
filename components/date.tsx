import { FC, ReactComponentElement, ReactElement } from "react";
import { JsxElement } from "typescript";

interface DateProps {
  date: String;
}

export default function DateDisplay({ date }: DateProps) {
  return (
    <div>
      <p className="mx-4 -mb-0.5 text-lg font-extrabold">{date}</p>
      <div className="divider bg-blue-600 h-0.5 mt-0 mb-2"></div>
    </div>
  );
}
