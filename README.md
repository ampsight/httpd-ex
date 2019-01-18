# Apache HTTP Server (httpd) S2I Sample Application

This is a very basic sample application repository that can be built and deployed
on [OpenShift](https://www.openshift.com) using the [Apache HTTP Server builder image](https://github.com/ampsight/httpd-container).

The application serves a single static html page via httpd.

You can also build and deploy the application on OpenShift, assuming you have a
working `oc` command line environment connected to your cluster already:

`$ oc new-app openshift/httpd-24-rhel7~https://github.com/ampsight/httpd-ex`

You can also deploy the sample template for the application:

`$ oc new-app -f https://raw.githubusercontent.com/ampsight/httpd-ex/master/openshift/templates/httpd.json`
