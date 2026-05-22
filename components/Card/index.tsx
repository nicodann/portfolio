import { PropsWithChildren } from "react";

export default function Card(props: PropsWithChildren) {
  return (
    <div
      id="card"
      className="
          flex 
          flex-col 
          gap-6 
          bg-amber-50 
          p-4 
          justify-between
          shadow-4xl
          rounded-2xl 
          "
    >
      {props.children}
    </div>
  );
}
