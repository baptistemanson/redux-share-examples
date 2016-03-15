#/bin/bash

echo "Replacing the folder by a local git repository, for convenience."
rm -rf node_modules/redux-share-client || rm  node_modules/redux-share-client
ln -s ../../../redux-share-client/ node_modules/redux-share-client
echo "Done!"
