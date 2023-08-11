import React, { useState } from 'react';

interface AccordionProps {
  sections: {
    id: number;
    title: string;
    description: string;
    content: string;
  }[];
}
export const Accordion = ({ sections }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleSectionClick = (index: number): void => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {sections.map((section, index) => (
        <div key={section.id}>
          <div>{section.description}</div>
          <button type="button" onClick={() => handleSectionClick(index)}>
            {section.title}
          </button>
          {activeIndex === index && <p>{section.content}</p>}
        </div>
      ))}
    </div>
  );
};
