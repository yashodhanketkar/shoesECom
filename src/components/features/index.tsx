import { useEffect, useState } from "react";
import { features } from "./data";

type FeatureButtonProps = {
  select: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  name: string;
  value: string;
  currentIndex: number;
  selfIndex: number;
};

const FeatureButton = ({
  select,
  name,
  value,
  currentIndex,
  selfIndex,
}: FeatureButtonProps) => {
  return (
    <button
      onClick={select}
      onMouseEnter={select}
      value={value}
      className={`flex items-center justify-center flex-grow p-4 text-white  rounded-2xl ${
        currentIndex === selfIndex ? " bg-black" : " bg-gray-600"
      }`}
    >
      {name}
    </button>
  );
};

export const Features = () => {
  const [currentBody, setCurrentBody] = useState(features[0].body);
  const [currentImage, setCurrentImage] = useState(features[0].img);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const feature = features[currentIndex];
    setCurrentBody(feature.body);
    setCurrentImage(feature.img);

    const looper = setInterval(() => {
      if (currentIndex + 1 === features.length) setCurrentIndex(0);
      else setCurrentIndex((prev) => ++prev);
    }, 2000);

    return () => clearInterval(looper);
  }, [currentIndex]);

  const handleSelect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const index = features
      .map((f) => f.body)
      .indexOf((e.target as HTMLButtonElement).value);
    setCurrentIndex(index);
  };

  return (
    <div className="grid w-full grid-cols-1 gap-2 px-4 my-20 lg:my-40 lg:grid-cols-3 md:px-40">
      <div className="flex flex-col col-span-1 gap-2">
        {features.map((features, i) => (
          <FeatureButton
            currentIndex={currentIndex}
            selfIndex={i}
            select={handleSelect}
            name={features.title}
            value={features.body}
          />
        ))}
      </div>
      <FeatrueDetails currentImage={currentImage} currentBody={currentBody} />
    </div>
  );
};

type FeatureDetailsProps = { currentImage: string; currentBody: string };

const FeatrueDetails = ({ currentImage, currentBody }: FeatureDetailsProps) => {
  return (
    <div className="flex-col justify-center hidden col-span-2 gap-4 p-4 shadow-sm rounded-2xl shadow-black lg:flex">
      <div className="w-full rounded-2xl overflow-hidden h-[65vh] aspect-video">
        <img src={currentImage} className="w-full h-full" alt="shoe" />
      </div>
      <div className="inline-flex items-center justify-between w-full">
        <p className="text-lg">{currentBody}</p>
        <button className="px-2 py-1 text-lg font-semibold text-white bg-black rounded-lg">
          Details
        </button>
      </div>
    </div>
  );
};
