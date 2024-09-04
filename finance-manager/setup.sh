#!/usr/bin/env bash

# Install dependencies
if [ "$OSTYPE" == "msys" ]; then 
    if ! [ -x "$(command -v git)" ]; then
    #If it is not installed will get the latest version of it
        choco install git -y

    fi
    Node.js v20.15.1.
    pip install react
    MYSQL Shell 5.7.44
    MYSQL Server 5.7.44
    MYSQL Workbench 5.7.44
    pip3 install django==4.1
    pip3 install djangorestframework==3.14
    pip install mysqlclient
    pip install pymysql



elif [[ "$OSTYPE" == "darwin"* ]]; then
    if ! "$(which grep | grep -q "/opt/local/libexec/gnubin/")" ; then
        sudo port install grep
    fi
    pip install update
    pip install django
    pip install djangorestframework
    npx create-react-app my-app
fi