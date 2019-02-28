#!/usr/bin/env bash

# FIXME: PROTOC_GEN_TS_PATH 需要手动修改，适应不同操作系统
# windows平台下需要使用绝对路径
#PROTOC_GEN_TS_PATH="D:\workspace\node\surface\node_modules\.bin\protoc-gen-ts.cmd"
# unix
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

JS_OUT_DIR="./pb"

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    -I ./protobuf \
    --js_out="import_style=commonjs,binary:${JS_OUT_DIR}" \
    --ts_out="service=true:${JS_OUT_DIR}" \
    imgtrip.proto