# data-ui
A collection of custom + wrapped components for nice UIs.

## Live Playground

For examples of the components in action, go to ....

OR

To run that demo on your own computer:
```sh
git clone ...data-ui && cd data-ui

# instal root dependencies including lerna
npm install 
# bootstrap (symlink inter-dependencies) all packages
lerna bootstrap

# alternatively install just the demo package
# cd packages/demo
# npm install

# go to the demo package and start storybook
cd packages/demo
npm run dev
# visit http://localhost:9001/
```

## Development
[lerna](https://github.com/lerna/lerna/) is used to manage versions and dependencies between
packages in this repo.

```
data-ui/
  lerna.json
  package.json
  packages/
    package1/
      src/
      test/
      build/
      package.json
      ...
    ...
```

For easiest development, clone this repo, install the root npm modules including lerna,
then have lerna install package dependencies and manage the symlinking between packages for you
```sh
git clone ...data-ui && cd data-ui
npm install
lerna bootstrap
```

Enzyme and jest are used for testing. Each package defines its own tests, which you can run from within a `packages/package-name` directory using
```sh
cd packages/my-package
npm run test
```

for a single test or subset of tests run
```sh
npm run test -t regex
```

To run all tests in all packages run `lerna run test` from the root @data-ui directory.

## License
[MIT](./LICENSE)
