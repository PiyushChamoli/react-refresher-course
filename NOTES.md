NPM (not Node Package Manager) npm init -y
Package.json is a config file that maintains the versions of depend and devdepen.
Package-lock.json contains exact version and transitive dependencies.
Caret symbol is for minor upgrades whereas tilde symbol is for major upgrades.
Node modules can be recreated using package.json and package-lock.json using npm install.
Parcel does the following -
dev build, local server, Hot Module Replacement, File Watching Algo, Caching, Img Opt., Minification, consistent hasing, differential bundling(support for diff browsers)
