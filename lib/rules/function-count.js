/**
 * @fileoverview limit the function count of specific files
 * @author chd
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "limit the function count of specific files",
      recommended: true,
      url: 'https://github.com/IamHuadong/eslint-plugin-function-limit', // URL to the documentation page for this rule
    },
    schema: [
      {
        type: "object",
        properties: {
          limit: { type: "integer" },
          files: {
            type: "array",
            items: {
              type: "string"
            }
          }
        }
      }
    ], // Add a schema if the rule has options,
    messages: {
      tooManyFuncs: 'Too many functions in this file'
    }
  },

  create(context) {
    let count = 0;
    const options = context.options
    const defaultLimit = 3
    const fileName = context.getFilename()

    const option = options.length > 0 ? options[0] : {}
    const { limit = defaultLimit, files = [] } = option
    const shouldLimit = files.length === 0 || files.some((file) => new RegExp(file).test(fileName))
    
    if (!shouldLimit) return {}

    function checkLimit(node) {
      count++
      if (count > limit) {
        context.report({
          node,
          messageId: 'tooManyFuncs',
        })
      }
    }

    return {
      // visitor functions for different types of nodes
      FunctionDeclaration: checkLimit,
      FunctionExpression: checkLimit,
      ArrowFunctionExpression: checkLimit,
    }
  },
};
