import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <div id="education" className="w-full py-20">
      <h1 className="heading">
        <span className="text-purple">Education</span>
      </h1>
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            schoolName={item.schoolName}
            location={item.location}
            duration={item.duration}
            description={item.coursework}
          
            className={item.className}
           
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            
            degree={item.degree}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Grid;
