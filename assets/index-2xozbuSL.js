const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-C6X6yP-d.js","assets/vendor-CooK8OSF.js","assets/preload-CiLjR_o-.js","assets/main-C70nbKSa.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./preload-CiLjR_o-.js";
__vitePreload(() => import("./main-C6X6yP-d.js").then((n) => n.m), true ? __vite__mapDeps([0,1,2,3]) : void 0).catch((err) => {
  window.dispatchEvent(new CustomEvent("vite:initial-error", { detail: err }));
});
