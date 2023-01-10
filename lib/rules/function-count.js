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
      withTODO: 'should not has TODO'
    }
  },

  create(context) {
    // variables should be defined here
    const sourceCode = context.getSourceCode()
    const comments = sourceCode.getAllComments()

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const todoComments = comments.filter((comment) => comment.value.includes('TODO'))

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------
    if (todoComments.length > 0) {
      context.report({
        node: todoComments[0],
        messageId: 'withTODO',
      })
    }

    return {
      // visitor functions for different types of nodes
    };
  },
};
