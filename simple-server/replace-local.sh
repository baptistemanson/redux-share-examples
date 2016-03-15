#/bin/bash

echo "Replacing the folder by a local git repository, for convenience."
rm -rf node_modules/redux-share-server || rm  node_modules/redux-share-server
ln -s ../../../redux-share-server/ node_modules/redux-share-server
echo "Done!"
