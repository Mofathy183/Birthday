import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
	{ ignores: ['node_modules', 'dist'] },
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: {
				...globals.browser,
			},
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			prettier: prettierPlugin,
			react: react,
		},
		extends: [
			'airbnb', // Airbnb style guide
			'plugin:react/recommended', // React best practices
			'plugin:prettier/recommended', // Prettier integration
		],
		rules: {
			...js.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'prettier/prettier': 'error', // Show Prettier issues as ESLint errors
			'react/jsx-filename-extension': [
				1,
				{ extensions: ['.js', '.jsx'] },
			],
			'react/react-in-jsx-scope': 'off', // If you're using React 17+ (no need to import React manually)
			'react/prop-types': 'warn',
		},
		settings: {
			react: {
				version: 'detect', // Automatically detect React version
			},
		},
	},
];
