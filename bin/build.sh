#!/usr/bin/env bash

function print_usage {
    echo "Usage: $(basename $0) MODULE VERSION";
    echo "";
    echo "Where:";
    echo "    MODULE    : One of";
    echo "                    frontend";
    echo "                    signaling";
    echo "                    gateway";
    echo "    VERSION   : The version tag.";
    echo "";
    echo "Note: Use 'all' as module name to build";
    echo "  all modules (sic).";
}

[ $# -eq 2 ] || {
    echo "Invalid commandline; arguments missing.";
    echo;
    print_usage;
    exit 2;
}


function build_image {
    local PODMAN="$1";
    local MODULES_BASE="$2";
    local PREFIX="$3";
    local NAME="$4";
    local TAG="$5";

    local MODULE_DIR="$MODULES_BASE/$NAME";

    echo "Building module: $NAME";
    echo "In: $MODULE_DIR";

    echo ;
    echo ;
    echo ;

    [ -d "$MODULE_DIR" ] || {
        echo "Module $NAME ($MODULE_DIR) not found.";
        exit 2;
    }

    cd "$MODULES_BASE/$NAME" || exit;
    $PODMAN build -t "$PREFIX-$NAME:$TAG" .

    echo;
    echo;
    echo;
}

##
# Environment:
#
WORKING_DIRECTORY="$(pwd)";
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)";
PROJECT_DIR="$(cd "$SCRIPT_DIR"/.. && pwd)";

##
# The executable
#
CMD=$(which podman);
[ $? -eq 0 ] || {
    echo "'podman' not found.";
    exit 2;
}

##
# The directory containing all modules:
#
MODULES_BASE_DIR="$PROJECT_DIR/modules";

##
# The images are named
#
#   planning-poker-$MODULE_NAME
#
# but the module names are shortened to $MODULE_NAME. This defines the required prefix:
#
IMAGE_PREFIX="planning-poker";

##
# Arguments:
#
MODULE_NAME="$1";
MODULE_VERSION="$2";

case $MODULE_NAME in
    all)
        for m in "frontend" "gateway" "signaling"; do
            build_image "$CMD" "$MODULES_BASE_DIR" "$IMAGE_PREFIX" "$m" "$MODULE_VERSION";
        done
        ;;
    *)
        build_image "$CMD" "$MODULES_BASE_DIR" "$IMAGE_PREFIX" "$MODULE_NAME" "$MODULE_VERSION";
        ;;
esac


cd "$WORKING_DIRECTORY" || exit;
