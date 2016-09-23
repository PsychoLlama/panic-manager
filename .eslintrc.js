module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"node": true,
		"es6": true
	},
	"extends": [
		"eslint:recommended",
	],
	"rules": {
		"accessor-pairs": "error",
		"array-bracket-spacing": "off",
		"array-callback-return": "error",
		"arrow-body-style": "error",
		"arrow-parens": "off",
		"arrow-spacing": "error",
		"block-scoped-var": "error",
		"block-spacing": "error",
		"brace-style": [
			"error",
			"1tbs"
		],
		"callback-return": "off",
		"camelcase": "error",
		"comma-dangle": [
			"error",
			"always-multiline"
		],
		"comma-spacing": [
			"error", {
				"after": true,
				"before": false
			}
		],
		"comma-style": [
			"error",
			"last"
		],
		"complexity": "error",
		"computed-property-spacing": [
			"error",
			"never"
		],
		"consistent-return": "error",
		"consistent-this": "off",
		"curly": "error",
		"default-case": "error",
		"dot-location": [
			"error",
			"property"
		],
		"dot-notation": "error",
		"eol-last": "error",
		"eqeqeq": "error",
		"func-names": "off",
		"func-style": [
			"error",
			"declaration",
			{
				"allowArrowFunctions": true
			}
		],
		"generator-star-spacing": "off",
		"global-require": "error",
		"guard-for-in": "error",
		"handle-callback-err": "error",
		"id-blacklist": "error",
		"id-length": "error",
		"id-match": "error",
		"indent": "off",
		"init-declarations": "off",
		"jsx-quotes": "error",
		"key-spacing": "error",
		"keyword-spacing": [
			"error", {
				"after": true,
				"before": true
			}
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"lines-around-comment": "error",
		"max-depth": "error",
		"max-len": [
			"error",
			80
		],
		"max-nested-callbacks": "error",
		"max-params": "error",
		"max-statements": "off",
		"max-statements-per-line": "error",
		"new-cap": "off",
		"new-parens": "error",
		"newline-after-var": "off",
		"newline-before-return": "off",
		"newline-per-chained-call": "off",
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-catch-shadow": "error",
		"no-confusing-arrow": "error",
		"no-console": "error",
		"no-continue": "off",
		"no-div-regex": "error",
		"no-duplicate-imports": "error",
		"no-else-return": "error",
		"no-empty-function": "off",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "off",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-extra-parens": "off",
		"no-floating-decimal": "error",
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-inline-comments": "error",
		"no-invalid-this": "off",
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-magic-numbers": "off",
		"no-mixed-requires": "error",
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-multiple-empty-lines": "error",
		"no-native-reassign": "error",
		"no-negated-condition": "error",
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-require": "error",
		"no-new-wrappers": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "off",
		"no-path-concat": "error",
		"no-plusplus": "error",
		"no-process-env": "error",
		"no-process-exit": "off",
		"no-proto": "error",
		"no-restricted-globals": "error",
		"no-restricted-imports": "error",
		"no-restricted-modules": "error",
		"no-restricted-syntax": "error",
		"no-return-assign": "error",
		"no-script-url": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-shadow": "off",
		"no-shadow-restricted-names": "error",
		"no-spaced-func": "error",
		"no-sync": "error",
		"no-ternary": "off",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-undefined": "off",
		"no-underscore-dangle": [
			"error", {
				"allowAfterThis": true
			}
		],
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": "error",
		"no-unused-expressions": "error",
		"no-use-before-define": "error",
		"no-useless-call": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-escape": "error",
		"no-var": "error",
		"no-void": "error",
		"no-warning-comments": "error",
		"no-whitespace-before-property": "error",
		"no-with": "error",
		"object-curly-spacing": "off",
		"object-shorthand": "off",
		"one-var": "off",
		"one-var-declaration-per-line": "off",
		"operator-assignment": [
			"error",
			"always"
		],
		"operator-linebreak": "error",
		"padded-blocks": "off",
		"prefer-arrow-callback": "off",
		"prefer-const": "error",
		"prefer-reflect": "off",
		"prefer-rest-params": "off",
		"prefer-spread": "off",
		"prefer-template": "error",
		"quote-props": "off",
		"quotes": [
			"error",
			"single"
		],
		"radix": "error",
		"require-jsdoc": ["error", {
			"require": {
				"FunctionDeclaration": true,
				"MethodDefinition": true,
				"ClassDeclaration": true
			}
		}],
		"require-yield": "error",
		"semi": "error",
		"semi-spacing": "error",
		"sort-imports": "off",
		"sort-vars": "off",
		"space-before-blocks": "error",
		"space-before-function-paren": [
			"error",
			"always"
		],
		"space-in-parens": [
			"error",
			"never"
		],
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": [
			"error",
			"always"
		],
		"strict": "error",
		"template-curly-spacing": "error",
		"valid-jsdoc": "error",
		"vars-on-top": "off",
		"wrap-iife": "error",
		"wrap-regex": "error",
		"yield-star-spacing": "error",
		"yoda": [
			"error",
			"never"
		]
	}
};