#!/usr/bin/env bash

# Install dependencies
if [ "$OSTYPE" == "msys" ]; then 
    if ! [ -x "$(command -v git)" ]; then
    #If it is not installed will get the latest version of it
        choco install git -y
    fi
elif [[ "$OSTYPE" == "darwin"* ]]; then
    if ! "$(which grep | grep -q "/opt/local/libexec/gnubin/")" ; then
        sudo port install grep
    fi
    pip install update
    pip install django
    pip install djangorestframework
fi