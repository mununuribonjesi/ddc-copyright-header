# ddc-copyright-head

Library to add copyright and license header to "js", "jsx","ts","tsx","html" and "css" and many more files in your project

## Prerequisites

This requires Node 8.9 or higher, together
with NPM 5.5.1 or higher.

## Quick Overview

```sh
npx ddc-copyright-head --generate
```

## Installation

install ddc-copyright-head to use it. For Linux `sudo` may be required:

```
npm -install ddc-copyright-head
```

Create a file named "copyrightConfig.json" in the root of your application to setup the configuration that ddc-copyright-head needs to create a copy right header for your files:

```
{
    "copyrightContent": "/*\n Copyright (C) 2022 Muni Banks - All Rights Reserved.\n You may use, distribute and modify this code\n*/\n\n",
    "fileTypes": {
        "JavaScript": "js",
        "JSX": "jsx",
        "TypeScript": "ts",
        "TSX": "tsx",
        "HTML": "html",
        "CSS": "css"
    },
    "folderExcludeList": [
        "node_modules",
        "public",
        "coverage",
        ".git"
    ]
}
```
you can update the copyrightContent, fileTypes and folderExcludeList in your "copyrightConfig.json" file to suit your needs.


