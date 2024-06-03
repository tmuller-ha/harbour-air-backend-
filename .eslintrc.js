module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:import/recommended'
    ],
    plugins: ["@typescript-eslint", "import"],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/ban-types': [
        'error',
        {
          types: {
            '{}': false,
          },
          extendDefaults: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      'import/no-duplicates': ["warn", {"considerQueryString": true}],
      'import/order': [
        'warn',
        {
          groups: [
            ['builtin', 'external'], 
            'internal', 
            ['parent', 'sibling'], 
            'index', 
            'object', 
            'type', 
            'unknown', 
          ],
          pathGroups: [
            {
              pattern: 'react|next',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'next'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'never',
        },
      ],
    },
  };