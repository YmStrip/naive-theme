import { darkTheme } from "naive-ui";
import { THEME_MAIN } from "./theme/main";
import { THEME_OVERRIDE } from "./theme/override";
const override = (a, b) => {
    for (let i in b) {
        if (typeof (a[i]) === 'object' && typeof (b[i]) === 'object') {
            override(a[i], b[i]);
        }
        else {
            a[i] = b[i];
        }
    }
    return a;
};
export const naive = override(override(override({}, darkTheme), THEME_MAIN), THEME_OVERRIDE);
export default naive;
//# sourceMappingURL=index.js.map