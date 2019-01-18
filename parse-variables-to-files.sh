#!/bin/bash
###############################################################################
#
# Replace values in classifcation-banner.js & index.html
#
###############################################################################

# set arguments as variables
OCP_CLASSIFICATION_TEXT=$1
OCP_CLASSIFICATION_COLOR=$2
OCP_OPENSHIFT_MASTER_DEFAULT_SUBDOMAIN=$3

# replace values
sed -i -e "s/OCP_CLASSIFICATION_TEXT/${OCP_CLASSIFICATION_TEXT}/g" ./classification-banner.js
sed -i -e "s/OCP_CLASSIFICATION_COLOR/${OCP_CLASSIFICATION_COLOR}/g" ./classification-banner.js
sed -i -e "s/OCP_CLASSIFICATION_TEXT/${OCP_CLASSIFICATION_TEXT}/g" ./index.html
sed -i -e "s/OCP_CLASSIFICATION_COLOR/${OCP_CLASSIFICATION_COLOR}/g" ./index.html
sed -i -e "s/OCP_OPENSHIFT_MASTER_DEFAULT_SUBDOMAIN/${OCP_OPENSHIFT_MASTER_DEFAULT_SUBDOMAIN}/g" ./index.html
