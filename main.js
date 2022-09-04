import "./style.scss";

document.querySelector("#app").innerHTML = `
    <model-viewer
      alt="Avatar 3D Model"
      src="/model.glb"
      ar
      ar-modes="webxr scene-viewer quick-look"
      shadow-intensity="1"
      camera-controls
      touch-action="pan-y"
    ></model-viewer>
`;
