import { Plus, Minus } from "@phosphor-icons/react";
import { useState } from "react";

type TypeSection = {
  title: string;
  body: string;
};

interface SectionProp {
  section: TypeSection;
  isActiveSection: boolean;
  activeIndex: number | null;
  sectionIndex: number;
  setActiveIndex: (index: number | null) => void;
}

interface AccordionProps {
  sections: TypeSection[];
}

const AccordionSection = ({
  section,
  isActiveSection,
  activeIndex,
  sectionIndex,
  setActiveIndex,
}: SectionProp) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };

  return (
    <div
      key={section.title}
      className="wrapperSection border-b-4 border-sky-100"
    >
      <div
        className="title flex items-center justify-between bg-sky-400 p-4 cursor-pointer text-white"
        onClick={() => toggleSection()}
      >
        <h2 className="mr-2">{section.title}</h2>
        <div>
          {isActiveSection ? (
            <Minus color="white" size={16} />
          ) : (
            <Plus color="white" size={16} />
          )}
        </div>
      </div>
      {isActiveSection && <div className="bg-sky-100 p-4">{section.body}</div>}
    </div>
  );
};

function Accordion({ sections }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="p-4 bg-sky-200 w-2/4">
      {sections.map((section, index) => (
        <AccordionSection
          key={index}
          section={section}
          isActiveSection={index === activeIndex}
          activeIndex={activeIndex}
          sectionIndex={index}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
}

export default Accordion;
