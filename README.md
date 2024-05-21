# tstldefs.nvim
Personal TypeScriptToLua nvim definitions

## Installation
1. in root of your project run one of commands:
    - `git submodule add git@github.com:al1-ce/tstldefs.nvim.git tstldefs.nvim`
    - `git submodule add https://github.com/al1-ce/tstldefs.nvim.git tstldefs.nvim`
2. Add compiler options to `tsconfig.json`
```json
"compilerOptions": {
    "paths": {
        "@tstldefs/*": ["tstldefs.nvim/*"]
    },
},
```

## Usage
```typescript
// TSTL extensions pulled from tstl repo
import '@tstldefs/extensions';
// Basic lua functions
import '@tstldefs/lua';
// Neovim functions
import '@tstldefs/vim';
// Neovim plugins
import '@tstldefs/fidget';
import '@tstldefs/plenary';
import '@tstldefs/telescope';

// Your code using definitions
```

For more usage see each individual file

