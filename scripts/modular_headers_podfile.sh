#!/bin/bash

echo "Modifying Podfile to use modular headers"

# Aquí se asegura que los headers modulares sean utilizados en el Podfile
echo "use_modular_headers!" >> ios/Podfile
