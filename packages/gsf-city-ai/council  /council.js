import FLS from "../fls/flsEngine.js";
import CES from "../ces/cityAI.js";
import POLICE from "../police/policeAI.js";
import MAYOR from "../mayor/mayorAI.js";

export default {
  modules: { FLS, CES, POLICE, MAYOR },

  dispatch(action) {
    const log = { action, timestamp: new Date().toISOString() };

    const finance = FLS.evaluate(action);
    if (!finance.allowed) return { blocked: true, layer: "FLS", finance };

    const mood = CES.process(action);
    const police = POLICE.scan(action, mood);
    const mayor = MAYOR.adjust(action, police);

    return { allowed: true, finance, mood, police, mayor };
  }
};
