module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        node: true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'check-file'
    ],
    'rules': {
        'react/prop-types': 'off',
        'check-file/filename-naming-convention':[
            'error',
            {
                'src/*.{js,ts,jsx,tsx}':'KEBAB_CASE',
            }
        ],
        'check-file/folder-naming-convention':[
            'error',
            {
                'src/**/':'KEBAB_CASE',
            }
        ],
        '@typescript-eslint/no-unused-vars': ['off'],
        'indent': [
            'error',
            4
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
};
