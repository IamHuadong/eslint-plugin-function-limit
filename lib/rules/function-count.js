/**
 * @fileoverview limit the function conut of specific files
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
      url: '', // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options,
    messages: {
      withTODO: 'Too many functions in the file'
    }
  },

  create(context) {
    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------
    var count = 0;

    function checkLimit(node) {
      count++;
      if (count >= 3) {
        context.report({
          node,
          messageId: 'withTODO'
        });
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
