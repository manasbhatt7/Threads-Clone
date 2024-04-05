import {
  require_react
} from "./chunk-UM3JHGVO.js";
import {
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/@chakra-ui/react-context/dist/index.mjs
var import_react = __toESM(require_react(), 1);
function getErrorMessage(hook, provider) {
  return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}
function createContext(options = {}) {
  const {
    name,
    strict = true,
    hookName = "useContext",
    providerName = "Provider",
    errorMessage,
    defaultValue
  } = options;
  const Context = (0, import_react.createContext)(defaultValue);
  Context.displayName = name;
  function useContext() {
    var _a;
    const context = (0, import_react.useContext)(Context);
    if (!context && strict) {
      const error = new Error(
        errorMessage != null ? errorMessage : getErrorMessage(hookName, providerName)
      );
      error.name = "ContextError";
      (_a = Error.captureStackTrace) == null ? void 0 : _a.call(Error, error, useContext);
      throw error;
    }
    return context;
  }
  return [Context.Provider, useContext, Context];
}

// node_modules/@chakra-ui/react-children-utils/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
function getValidChildren(children) {
  return import_react2.Children.toArray(children).filter(
    (child) => (0, import_react2.isValidElement)(child)
  );
}

export {
  createContext,
  getValidChildren
};
//# sourceMappingURL=chunk-H6IBSBY2.js.map
