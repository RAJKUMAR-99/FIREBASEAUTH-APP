const { getDefaultConfig } = require('@expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

// ✅ Adds support for .cjs (CommonJS) files as assets
defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;
