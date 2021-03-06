// lint-staged.config.js

module.exports = {
  // Type check TypeScript files

  'src/**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint then format TypeScript and JavaScript files

  'src/**/*.(ts|tsx|js)': (filenames) => [
    `eslint src --max-warnings=0 --fix ${filenames.join(' ')}`,

    `yarn prettier --write ${filenames.join(' ')}`
  ],

  // Format MarkDown and JSON

  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`
}
