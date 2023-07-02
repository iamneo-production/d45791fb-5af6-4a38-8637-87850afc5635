#!/bin/bash
if [ -d "/home/coder/project/workspace/springapp/" ]
then
    echo "project folder present"
    # checking for src folder
    if [ -d "/home/coder/project/workspace/springapp/src/" ]
    then
        cp -r /home/coder/project/workspace/junit/test /home/coder/project/workspace/springapp/src/;
    cd /home/coder/project/workspace/springapp/ || exit;
    mvn clean test;
    else
        echo "testCreateEvent FAILED";
        echo "testGetEventAll FAILED";
        echo "testGetEventById FAILED";
        echo "testGetAttendeeAll FAILED";
        echo "testGetAttendeeById FAILED";
        echo "testGetAttendeeByEventId FAILED";
        echo "testGetTicketAll FAILED";
        echo "testGetTicketById FAILED";
        echo "testGetTicketByEventId FAILED";
        echo "testGetTicketByAttendeeId FAILED";
    fi
else   
    echo "testCreateEvent FAILED";
    echo "testGetEventAll FAILED";
    echo "testGetEventById FAILED";
    echo "testGetAttendeeAll FAILED";
    echo "testGetAttendeeById FAILED";
    echo "testGetAttendeeByEventId FAILED";
    echo "testGetTicketAll FAILED";
    echo "testGetTicketById FAILED";
    echo "testGetTicketByEventId FAILED";
    echo "testGetTicketByAttendeeId FAILED";
fi