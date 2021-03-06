'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayoutContext = function (_PureComponent) {
  _inherits(LayoutContext, _PureComponent);

  function LayoutContext() {
    _classCallCheck(this, LayoutContext);

    return _possibleConstructorReturn(this, (LayoutContext.__proto__ || Object.getPrototypeOf(LayoutContext)).apply(this, arguments));
  }

  _createClass(LayoutContext, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        getSection: this.getSection.bind(this)
      };
    }
  }, {
    key: 'getSection',
    value: function getSection(slot) {
      return this.props.sections[slot] || false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return LayoutContext;
}(_react.PureComponent);

LayoutContext.propTypes = {
  sections: _react.PropTypes.objectOf(_react.PropTypes.element).isRequired,
  children: _react.PropTypes.element.isRequired
};
LayoutContext.childContextTypes = {
  getSection: _react.PropTypes.func.isRequired
};
exports.default = LayoutContext;
//# sourceMappingURL=LayoutContext.js.map