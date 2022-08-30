#!/bin/sh
# $1 --- dir --- 20220830/1

for file in `find $1 -type f -name "input*.txt"`;
do
    echo $file
    cat $file | node "$1/main.js"
    echo
done
