import React, { ReactElement, useState } from 'react';
import * as S from './Accordion.styled';

type BenefitsProps = {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
  content: ReactElement;
};

type AccordionProps = {
  sections: BenefitsProps[];
};

export const Accordion = ({ sections }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleSectionClick = (index: number): void => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {sections.map((section, index) => (
        <S.StyledSections>
          <S.StyledHeader>
            {section.icon}
            <div key={section.id}>
              <S.StyledTitle>{section.title}</S.StyledTitle>
            </div>
          </S.StyledHeader>
          <S.StyledButton type="button" onClick={() => handleSectionClick(index)}>
            {section.description}
            <S.StyledIcon />
          </S.StyledButton>
          <S.StyledContent>{activeIndex === index && <p>{section.content}</p>}</S.StyledContent>
        </S.StyledSections>
      ))}
    </div>
  );
};
