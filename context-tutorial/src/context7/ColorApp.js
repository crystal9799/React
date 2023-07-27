import ColorBox from "./ColorBox";
import ColorBox2 from "./ColorBox2";
import { ColorProvider } from "./ColorContext";
import SelectColors from "./SelectColor";

function ColorApp() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox2 />
      </div>
    </ColorProvider>
  );
}

export default ColorApp;
