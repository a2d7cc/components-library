import { CaretDown, CaretRight } from "@phosphor-icons/react";
import { useState } from "react";

interface option {
  title: string;
  body: string;
}

interface AccordionProps {
  options: option[];
}

function Accordion({ options }: AccordionProps) {
  return <div>Accordion</div>;
}

export default Accordion;
