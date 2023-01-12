/**
 * @fileoverview limit the function conut of specific files
 * @author chd
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/function-count"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ 
  parserOptions: { ecmaVersion: 2015 }
 });
ruleTester.run("function-count", rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      code: 'const a = 1',
    },
    {
      code: 'function sum(){}'
    }
  ],

  invalid: [
    {
      code: `
        function sum(){}
        const pub = () => undefined
        function add(){}
        const a = function() {}
        const sub = () => undefined
      `,
      errors: [{ messageId: 'withTODO' }, { messageId: 'withTODO' }],
    },
    {
      code: `
        function sum(){}
        const pub = () => undefined
        function add(){}
        const a = function() {}
        const sub = () => undefined
      `,
      errors: [{ messageId: 'withTODO' }],
      options: [{
        limit: 4,
        files: [".*"]
      }]
    },
  ],
});
