import React from "react";

type SectionTitlePros = {
  title: string;
  number?: string;
  description?: React.ReactElement;
};

const SectionTitle: React.FC<SectionTitlePros> = ({
  title,
  number,
  description,
}) => {
  return (
    <>
      <h2 className="section-title">{title}</h2>
      {number && <h5 className="text-on-back">{number}</h5>}
      {description && <p className="section-description">{description}</p>}
    </>
  );
};

export default SectionTitle;
