import { __assign, __extends } from "tslib";
import React from 'react';
import { withAnalyticsEvents, withAnalyticsContext, createAndFireEvent, } from '@atlaskit/analytics-next';
import { name as packageName, version as packageVersion } from './version.json';
import Div from './styled';
var Blanket = /** @class */ (function (_super) {
    __extends(Blanket, _super);
    function Blanket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Blanket.prototype.render = function () {
        var _a = this.props, canClickThrough = _a.canClickThrough, isTinted = _a.isTinted, onBlanketClicked = _a.onBlanketClicked;
        var onClick = canClickThrough ? undefined : onBlanketClicked;
        var containerProps = { canClickThrough: canClickThrough, isTinted: isTinted, onClick: onClick };
        return React.createElement(Div, __assign({}, containerProps, { className: "ak-blanket" }));
    };
    Blanket.defaultProps = {
        canClickThrough: false,
        isTinted: false,
        onBlanketClicked: function () { },
    };
    return Blanket;
}(React.Component));
export { Blanket as BlanketWithoutAnalytics };
var createAndFireEventOnAtlaskit = createAndFireEvent('atlaskit');
export default withAnalyticsContext({
    componentName: 'blanket',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents({
    onBlanketClicked: createAndFireEventOnAtlaskit({
        action: 'clicked',
        actionSubject: 'blanket',
        attributes: {
            componentName: 'blanket',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
})(Blanket));
//# sourceMappingURL=Blanket.js.map