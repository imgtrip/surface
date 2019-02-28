# SURFACE

## Required

- nodeJs >= 8.10.0

## INSTALL

1. Download
    
```bash
    # download repository
    git clone git@gitlab.com:imgtrip/surface.git
    
    # download protobuf submodules. you can just simple use `git submodule` command to achieve this. 
    cd surface/protobuf
    git fetch origin
    git checkout master
```

2. Dependencies

```bash
    yarn install
    # or
    npm install 
    # or other dependency management tools whatever you like.
```
3. Compile protobuf

```bash
    # FIXME: The PROTOC_GEN_TS_PATH value must be manually modify to suit different OS.
    bash compile-protobuf.sh
```

3. Set env

Copy `.env.development` to your **unix like** terminal.

4. Start up

```bash
    npm run start:dev
```
Browser visit `http://localhost:3000`

## Contributing

[CONTRIBUTING.md](CONTRIBUTING.md)