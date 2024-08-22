#!/usr/bin/env bash

# Install dependencies
if [ "$OSTYPE" == "msys" ]; then 
    if ! [ -x "$(command -v git)" ]; then
    #If it is not installed will get the latest version of it
        choco install git -y

    fi
    python3 -m venv env
    .\env\Scripts\activate
    pip install django
    pip install djangorestframework
    pip install react
    MYSQL Router 8.0
    MYSQL Shell 8.0
    MYSQL Server 8.0
    MYSQL Workbench 8.0
    #add conda


elif [[ "$OSTYPE" == "darwin"* ]]; then
    if ! "$(which grep | grep -q "/opt/local/libexec/gnubin/")" ; then
        sudo port install grep
    fi
    pip install update
    pip install django
    pip install djangorestframework
    conda create -n finance_manager
    conda activate finance_manager
fi