module.exports = {
    extends: ['airbnb-typescript/base'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'no-console': 'off',
        'import/prefer-default-export': 'off'
    }
};
