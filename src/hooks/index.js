import { createActor } from "../declarations/main";
import { isIC, getCanisterId, CANISTER_NAMES } from "../constants/index";

const host = !isIC ? { host: "http://127.0.0.1:8002" } : {};

export const main = createActor(getCanisterId(CANISTER_NAMES.MAIN), {
  agentOptions: {
    ...host,
  },
});

export const subscribe = (email) => main.subscribe(email);
