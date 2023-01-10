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

const ruleTester = new RuleTester();
ruleTester.run("function-limit", rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      code: 'var a = 1',
    }
  ],

  invalid: [
    {
      code: "//TODO",
      errors: [{ messageId: 'withTODO' }],
    },
  ],
});
