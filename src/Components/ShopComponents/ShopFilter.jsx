import ReactSlider from "react-slider";
import '../../index.css'
import { useState } from "react";

const ShopFilter = () => {

  const [rangeValues, setRangeValues] = useState([120, 1500])
  console.log(rangeValues)

  return (
    <div>
      <h2 className="text-3xl font-semibold text-slate-600 pb-4 mb-4 border-b border-stone-300">
        FILTER BY PRICE
      </h2>
      <ReactSlider
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
        defaultValue={[120, 1500]}
        min={120}
        max={1500}
    ariaLabel={['Lower thumb', 'Upper thumb']}
    ariaValuetext={state => `Thumb value ${state.valueNow}`}
    // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    pearling
        minDistance={10}
        onChange={(value) => setRangeValues(value)}
      />
      <p className="text-lg font-bold text-stone-800">PRICE: <span className="text-stone-600">{rangeValues[0]}$</span> - <span className="text-stone-600">{rangeValues[1]}$</span></p>
      <button className="py-4 px-6 mt-4 bg-green-700 text-white text-xl font-medium rounded-lg">FILTER</button>
    </div>
  );
};

export default ShopFilter;
