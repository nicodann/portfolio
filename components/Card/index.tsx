import { PropsWithChildren } from "react";

export default function Card(props: PropsWithChildren) {
  return (
    <div
      id="project_card_wrapper"
      className="
        flex 
        justify-center 
        content-center
        p-2
        hover:p-0        
        w-80
        h-[500px]
        "
    >
      <div
        id="project_card"
        className="
          flex 
          flex-col 
          gap-6 
          bg-amber-50 
          p-4 
          justify-between 
          sm:w-80
          shadow-4xl
          rounded-2xl 
          "
      >
        {props.children}
      </div>
    </div>
  );
}
