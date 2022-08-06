import LocalCanisterIdsJson from "../../.dfx/local/canister_ids.json";
import ICCanisterIdsJson from "../../.dfx/local/canister_ids.json";

export const network = process.env.DFX_NETWORK || (process.env.NODE_ENV === "production" ? "ic" : "local");

export const isIC = process.env.NODE_ENV === "production";

const CanisterIdsJson = network === "ic" ? ICCanisterIdsJson : LocalCanisterIdsJson;

const canisterIds = {};
for (const canister in CanisterIdsJson) {
  canisterIds[canister] = CanisterIdsJson[canister][network];
}

export const getCanisterId = (canisterName) => canisterIds[canisterName];

export const CANISTER_NAMES = {
  MAIN: "main",
};

export const DONATE_ADDRESS = "a528ffd1339773d499610aa76e2db7355676caca378c787ba836cb9d5f12f0fc";
export const DONATE_LINK = "https://medium.com/@ratelswallet/how-to-donate-for-ratels-in-firefox-f4f2fa82e49b";
