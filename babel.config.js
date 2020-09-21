module.exports = {
    presets: ['@babel/react', ['@babel/env', { targets: '> 1%, ie >= 10' }]],
    babelrcRoots: ['.'],
    plugins: [
        // compat for babel6 preset "stage-0"
        '@babel/plugin-proposal-export-default-from',
        ['@babel/plugin-proposal-class-properties', { loose: false }],
        [
            '@babel/plugin-transform-runtime',
            {
                helpers: false,
                regenerator: true
            }
        ],
        [
            'module-resolver',
            {
                cwd: __dirname,
                root: ['.'],
                alias: {
                    '@src': './src',
                    '@modules': './modules'
                }
            }
        ]
    ]
};
