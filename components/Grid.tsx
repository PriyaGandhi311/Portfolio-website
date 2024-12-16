import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="education">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            schoolName={item.schoolName}
            location={item.location}
            duration={item.duration}
            description={item.coursework}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            // img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            // spareImg={item.spareImg}
            degree={item.degree}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
