#!/usr/bin/env bash

function print_usage {
    echo "Usage: $(basename $0) MODULE VERSION";
    echo "";
    echo "Where:";
    echo "    MODULE    : One of";
    echo "                    planning-poker-frontend";
    echo "                    planning-poker-signaling";
    echo "                    planning-poker-gateway";
    echo "    VERSION   : The version tag.";
}

[ $# -eq 2 ] || {
    echo "Invalid commandline; arguments missing.";
    echo;
    print_usage;
    exit 2;
}

##
# Environment:
#
WORKING_DIRECTORY="$(pwd)";
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)";
PROJECT_DIR="$(cd "$SCRIPT_DIR"/.. && pwd)";
MODULES_DIR="$PROJECT_DIR/modules";

##
# Arguments:
#

MODULE_NAME="$1";
MODULE_VERSION="$2";
MODULE_DIR="$MODULES_DIR/$MODULE_NAME";

[ -d "$MODULE_DIR" ] || {
    echo "Module $MODULE_NAME ($MODULE_DIR) not found.";
    exit 2;
}

CMD=$(which podman);
[ $? -eq 0 ] || {
    echo "'podman' not found.";
    exit 2;
}


echo "Building image: $MODULE_NAME:$MODULE_VERSION.";


cd "$MODULE_DIR" || exit;
$CMD build -t "$MODULE_NAME:$MODULE_VERSION" .
cd "$WORKING_DIRECTORY" || exit;
