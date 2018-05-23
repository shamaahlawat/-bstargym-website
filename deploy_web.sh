#!/usr/bin/env bash
npm run-script build
mv build bstargym
zip -r bstargym.zip bstargym/
scp bstargym.zip ubuntu@poletalks.com:~/
rm -r bstargym/
rm bstargym.zip
ssh ubuntu@poletalks.com
