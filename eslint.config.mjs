import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-console': 'error',
      'no-unused-vars': 'error',
      'no-empty': 'error',
      'no-var': 'error',
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
        },
      ],
      'prefer-spread': 'error',
      'require-await': 'error',
      yoda: ['error', 'never'],
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-const-assign': 'error',
      'no-constant-condition': 'error',
      'no-constructor-return': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-ex-assign': 'error',
      'no-self-assign': 'error',
      'no-unsafe-negation': 'error',
    },
  },
  {
    ignores: [
      '**/node_modules',
      '**/*.md',
      '**/docker-compose*.yml',
      '**/Dockerfile*',
      '**/Makefile',
      '**/dist',
      '**/*.toml',
      '**/*.prisma',
      '**/*.sql',
      '**/DATA',
    ],
  },
]
