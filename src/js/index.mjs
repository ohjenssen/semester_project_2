import { setRoute } from "./routes.mjs";
import { getUserProfile } from "./api/index.mjs";

getUserProfile();

const path = location.pathname;
console.log(path)
setRoute(path);

