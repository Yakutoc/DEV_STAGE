import { TokenDataGroup } from '@salutejs/plasma-tokens-utils';
import { colors as gradientColors } from '../../data/colors';
import { ActualTokenNames, ThemeTokenDataGroups } from './types';

const deprecatedColorTokenOnActualToken: Record<string, ActualTokenNames> = {
    whitePrimary: 'onDarkTextPrimary',
    whiteSecondary: 'onDarkTextSecondary',
    whiteTertiary: 'onDarkTextTertiary',

    blackPrimary: 'onLightTextPrimary',
    blackSecondary: 'onLightTextSecondary',
    blackTertiary: 'onLightTextTertiary',

    transparent: 'clear',

    buttonClear: 'clear',
    buttonBlack: 'onLightSurfaceSolidDefault',
    buttonBlackSecondary: 'onLightSurfaceTransparentSecondary',
    // buttonBlackTransparent = 'Чёрная для использования поверх картинок',
    buttonWhite: 'onDarkSurfaceSolidDefault',
    buttonWhiteSecondary: 'onDarkSurfaceTransparentSecondary',

    text: 'textPrimary',
    primary: 'textPrimary',
    secondary: 'textSecondary',
    tertiary: 'textTertiary',
    paragraph: 'textParagraph',
    background: 'backgroundPrimary',
    accent: 'textAccent',
    success: 'textPositive',
    warning: 'textWarning',
    critical: 'textNegative',
    overlay: 'overlaySoft',

    // gradient = 'Градиент для заливки основного фона',
    // gradientDevice = 'Бэкграунд ассистента на девайсах',

    surfaceLiquid01: 'surfaceTransparentPrimary',
    surfaceLiquid02: 'surfaceTransparentSecondary',
    surfaceLiquid03: 'surfaceTransparentTertiary',
    surfaceSolid01: 'surfaceSolidPrimary',
    surfaceSolid02: 'surfaceSolidSecondary',
    surfaceSolid03: 'surfaceSolidTertiary',
    surfaceCard: 'surfaceTransparentCard',
    // buttonPrimary = 'Первичный цвет контролов',
    buttonSecondary: 'surfaceTransparentSecondary',
    buttonAccent: 'textAccent',
    buttonSuccess: 'surfacePositive',
    buttonWarning: 'surfaceWarning',
    buttonCritical: 'surfaceNegative',
    // buttonChecked = 'Цвет зажатого контрола',
    // buttonFocused = 'Цвет рамки фокуса у контрола',
    // speechBubbleSent = 'Цвет фона баблов отправленный сообщений',
    // speechBubbleReceived = 'Цвет фона баблов получнных сообщений',
    // voicePhraseGradient = 'Градиент подсказок о голосовых запросах',
};

const getThemeTokenDataGroupsByName = (themeTokenDataGroups: Record<string, ThemeTokenDataGroups>) =>
    Object.values(themeTokenDataGroups).reduce(
        (acc, values) => ({
            ...acc,
            ...values,
        }),
        {},
    );

const getDeprecatedTokens = (tokens: TokenDataGroup<string>) => {
    // Данный префикс будет удалён на этапе генерации файлов с токенами (values.ts и index.ts)
    const legacyPrefix = 'plasmaColors';

    return Object.entries(deprecatedColorTokenOnActualToken)
        .filter(([_, actualName]) => tokens[actualName])
        .reduce(
            (acc, [oldName, actualName]) => ({
                ...acc,
                [`${legacyPrefix}-${oldName}`]: {
                    value: tokens[actualName].value,
                    comment: `@deprecated instead use ${actualName}`,
                },
            }),
            {},
        );
};

export const mapDeprecatedColorTokens = (
    themeTokenDataGroups: Record<string, ThemeTokenDataGroups>,
): ThemeTokenDataGroups => {
    const themeTokenDataGroupsByName = getThemeTokenDataGroupsByName(themeTokenDataGroups);

    return Object.entries(themeTokenDataGroupsByName).reduce((tokensWithDeprecated, [themeName, tokens]) => {
        const deprecatedTokens = getDeprecatedTokens(tokens);

        const { skeletonGradient, skeletonGradientLighter } = gradientColors[
            themeName.endsWith('dark') ? 'dark' : 'light'
        ];

        return {
            ...tokensWithDeprecated,
            [themeName]: {
                fromData: true,
                ...tokens,
                skeletonGradient: {
                    value: skeletonGradient,
                },
                skeletonGradientLighter: {
                    value: skeletonGradientLighter,
                },
                ...deprecatedTokens,
            },
        };
    }, {});
};
