# eslint-plugin-function-limit
Limit the functions count of specific files
限制指定文件里函数的数量

## Background

## 背景

Some developers write many helper functions in a index file, causing other developers must link to here and there when debugging the code. It is difficult to distinguish which are helper functions and which are business logic, which increases maintenance costs. Therefore, this plugin can detect whether the developer has written too many functions, and if so, it is recommended to put these helper functions in the "helper" or "lib" folder.

很多开发者在根文件里写了很多帮助函数，致使其他开发者在调试代码时需要跳来跳去，很难分清哪些是帮助函数，哪些是业务逻辑，增加了维护成本。因此，这个插件可以检测开发者是否在一个文件里写了太多的函数，如果是，建议把这些帮助函数放到"helper"或"lib"文件夹里。

## Installation

## 安装

You'll first need to install [ESLint](https://eslint.org/):

首先得安装eslint：

```sh
yarn add eslint -D
```

Next, install `eslint-plugin-function-limit`:

然后安装这个插件：

```sh
yarn add eslint-plugin-function-limit -D
```

## Usage

## 使用

Add `function-limit` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

在你的项目的`.eslintrc`配置文件里的`plugins`添加如下配置：

```json
{
    "plugins": [
        "function-limit"
    ]
}
```

Then configure the rules you want to use under the rules section.

然后在`rules`里添加如下配置：

```json
{
    "rules": {
        "function-limit/function-count": ["error", { "limit": 3, "files": ["index.ts"] }]
    }
}
```

The second parameter `{ "limit": 3, "files": ["index.ts"] }` in the above configuration means: the number of functions in the file whose file name matches `index.ts` cannot exceed 3.

上述配置的第二个参数`{ "limit": 3, "files": ["index.ts"] }`的意思是：文件名匹配`index.ts`的文件中函数的数量不能超过3个。

## Rule Option

## 规则参数

- `limit`
  Type is integer. Default value is 3, it means that the max count of function in one file should not exceed 3.
  
  类型是整数。默认值是3，意思是一个文件里的函数数量不能超过3。

- `files`
  Type is string array, the string can be a Regexp format, such as `[".*"]`.It means that the rule only be active in the file whose name matches. If not set, the rule will be active for all files. Otherwise, the rule will only be active for the file whose filename matches.

  类型是字符串数组，字符串可以是正则表达式的形式，例如`[".*"]`。意思是这个规则只会在文件名匹配的文件里才生效。如果没设置，这个规则会对所有文件生效。若设置了，则只对文件名匹配到的文件生效。
