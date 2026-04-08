import { Dispatch, SetStateAction } from "react";

type NavProps = {
  resources: string[];
  selectedResource: string;
  setSelectedResource: Dispatch<SetStateAction<string>>;
};

export default function Nav(props: NavProps) {
  const { resources, selectedResource, setSelectedResource } = props;

  return (
    <nav id="nav" className="flex flex-wrap gap-4 justify-center">
      {resources.map((resource, i) => (
        <h3
          key={i}
          onClick={() => {
            setSelectedResource(resource);
            document.getElementById("nav")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className={`cursor-pointer ${resource === selectedResource && "border-b-2 cursor-default"}`}
        >
          {resource}
        </h3>
      ))}
    </nav>
  );
}
