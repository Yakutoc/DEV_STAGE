import { popupConfig } from '../../../../components/Popup';
import { component, mergeConfig } from '../../../../engines';

export {
    PopupProvider,
    popupRootClass,
    endAnimationClass,
    endTransitionClass,
    usePopupContext,
} from '../../../../components/Popup';

const mergedConfig = mergeConfig(popupConfig);

export const Popup = component(mergedConfig);
