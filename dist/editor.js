(()=>{"use strict";const e=window.wp.data,t=window.gb.stylesBuilder,s=window.gb.blockStyles,r=(0,e.createReduxStore)("gb-block-styles-current-style",{reducer:t.currentStyleReducer,actions:t.currentStyleActions,selectors:t.currentStyleSelectors}),c=(0,e.createReduxStore)("gb-block-styles-at-rule",{reducer:t.atRuleReducer,actions:t.atRuleActions,selectors:t.atRuleSelectors}),l=(0,e.createReduxStore)("gb-block-styles-nested-rule",{reducer:t.nestedRuleReducer,actions:t.nestedRuleActions,selectors:t.nestedRuleSelectors}),o=(0,e.createReduxStore)("gb-block-styles",{reducer:t.styleReducer,actions:t.styleActions,selectors:t.styleSelectors}),u=(0,e.createReduxStore)("gb-block-setting-tabs",{reducer:s.settingTabsReducer,actions:s.settingTabsActions,selectors:s.settingTabsSelectors});(0,e.register)(r),(0,e.register)(o),(0,e.register)(c),(0,e.register)(l),(0,e.register)(u)})();