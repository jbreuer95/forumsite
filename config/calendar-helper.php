<?php

/*
 * Driver Configuration
 */
return [

    /*
     * Process for Google Calendar:
     *
     * - Create Google Account
     * - Go to Google Developer API Console
     * - Create Project
     * - Enable Calendar API
     * - Go to Calendar UI and share calendar using service account name
     */
    'google' => [

        'default_calendar_id' => '8ip07vva1vk7s5jho0eogsf7so@group.calendar.google.com',

        'client_id' => '102508740157132375966',

        'service_account_name' => 'account-2@svforum-1111.iam.gserviceaccount.com',

        'application_name' => 'svforum-1111',

        'key' => '../resources\assets\keys\svforum-9c7e0f84a82f.p12',

        'scopes' => [
            'https://www.googleapis.com/auth/calendar',
        ],

    ],

    'event' => [

        /*
         * Optional viewer class
         */
        'viewer' => 'EventViewer',

        /*
         * Default event attributes with their default value
         */
        'attributes' => [
            'calendar_id' => '',
            'id' => '',
            'parent_id' => '',
            'title' => '',
            'description' => '',
            'location' => '',
            'attendees' => [],
            'start' => '',
            'end' => '',
            'all_day' => false,
            'status' => '',
            'timeZone' => '',
            'rrule' => '',
            'rruleArray' => [],
            'isRecurrence' => false,
        ],
    ],

    'attendee' => [

        /*
         * Optional viewer class
         */
        'viewer' => 'AttendeeViewer',

        /*
         * Default attendee attributes with their default value
         */
        'attributes' => [
            'id' => '',
            'name' => '',
            'email' => '',
            'comment' => '',
            'status' => '',
        ],
    ],

];
