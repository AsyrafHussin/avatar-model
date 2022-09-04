import "./style.scss";

document.querySelector("#app").innerHTML = `
    <model-viewer
      id="avatar"
      loading="eager"
      src="/model.glb"
      ar
      ar-modes="webxr scene-viewer quick-look"
      shadow-intensity="1"
      camera-controls
      touch-action="pan-y"
      auto-rotate
      alt="Avatar 3D Model"
    ></model-viewer>
`;
