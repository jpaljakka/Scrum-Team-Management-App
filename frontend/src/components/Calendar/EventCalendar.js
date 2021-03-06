import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

const EventCalendar = ({ events, timeZone, showWeekends, onDateClick, onEventClick }) => {
    console.log(events)

    return (
       
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin ]}
                timeZone={timeZone}
                weekends={showWeekends}
                weekNumbers={true}
                header={{
                    left: 'prev, next, dayGridMonth, timeGridWeek, timeGridDay, today, ',
                    center: 'title',
                    right: 'addEventButton, listWeek, listMonth'
                }}
                customButtons={{
                    addEventButton: {
                        text: 'Add event',
                        click: function() {
                            alert('Some day you can add events from here!!')
                        }
                    }
                }}
                views={{
                    listWeek: { buttonText: 'events: week' },
                    listMonth: { buttonText: 'events: month' }
                }}
                firstDay={1}
                nowIndicator={true}
                businessHours={{
                    daysOfWeek: [ 1,2,3,4,5 ],
                    startTime: '09:30',
                    endTime: '15:00'
                }}
                dateClick={onDateClick}
                eventClick={onEventClick}
                events={events}
                height={'parent'}
                minTime={'07:00:00'}
                maxTime={'20:00:00'}
            />
        
    );
}

export default EventCalendar;
