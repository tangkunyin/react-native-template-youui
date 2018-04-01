#!/bin/bash

echo 'Now run custom commands after all package is installed.'

echo 'modify react-native package-manager default port: (default 9090)'
# Because of I am the 90s, so port here is 9090. If you want change, modify it yourself
react-native-port-patcher --new-port 9090


echo 'fix `Font Awesome` could not be found within the package etc.'
rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json
