import { setRoute } from "./routes.mjs";
import * as storage from "./localStorage/index.mjs";

const path = location.pathname;
setRoute(path);