import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const CompareSlider = ({
  original,
  restored,
  width
}: {
  original: string;
  restored: string;
  width?: number
}) => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={original} alt="original photo" />}
      itemTwo={<ReactCompareSliderImage src={restored} alt="restored photo" />}
      portrait
      className={`flex w-[${width ? width : 475}px] mt-5`}
    />
  );
};
