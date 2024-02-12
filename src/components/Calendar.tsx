import { Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import iCalendarPlugin from '@fullcalendar/icalendar'
import listPlugin from '@fullcalendar/list';
import './calendar.css';
import { EventApi } from '@fullcalendar/core';
import React from 'react';

const defaultShow = (new URLSearchParams(window.location.search)).get("cal") !== null ? true : false;
const SoonIsHours = 8

const FullCalendarMemo = React.memo((props: any) => {
    // Your FullCalendar configuration here
    return <FullCalendar {...props} />;
}, (prevProps, nextProps) => {
    // Add a comparison function here to determine if re-render is necessary
    // Return true if props are equal (i.e., no re-render), false otherwise
    //return prevProps.events === nextProps.events && prevProps.config === nextProps.config;
    return true;
});


export default function Calendar({ elementData }: {
    elementData: any
}) {
    const [show, setShow] = useState(defaultShow)
    const [events, setEvents] = useState<any>()
    const [now, setNow] = useState(new Date())


    const handleEvents = (_events: EventApi[]) => {
        setEvents(
            _events
        )
    }

    const DisplayUntilWhen = new Date(now.getTime() + SoonIsHours * 60 * 60 * 1000); // 6 hours in milliseconds

    const soon = events?.filter((event: EventApi) => {
        return event.start && event.start >= now && event.start <= DisplayUntilWhen
    })

    const hapeningNow = events?.filter((event: EventApi) => {
        return event.start && event.end && event.start <= now && event.end >= now
    })

    useEffect(() => {
        const id = setInterval(() => {
            const newNow = new Date();
            setNow((n) => { return newNow });
        }, 1000)
        return () => { clearInterval(id) }
            ;
    }, []);

    function calcDescriptionOfTimeUntil(when: Date | undefined | null, now: Date = new Date()) {
        if (!when) return ('')
        const dif = when.getTime() - now.getTime()
        let result = 'in '
        if (dif > (1000 * 60 * 60)) result += `${Math.floor(dif / 1000 / 60 / 60)} hours `
        if (dif < (1000 * 60 * 60 * 2)) {
            result += ` ${Math.floor(((dif) / 1000 / 60) % 60)} minutes `;
            result += ` ${Math.floor(((dif) / 1000) % 60)} seconds `
        }
        return result;
    }


    return <div className="row mt-2 mb-2">
        <div className="col">

            {events?.length === 0 &&
                <div className="">Getting Calendar Data...
                    <div className="spinner-border" role="status">
                        <span></span>
                    </div>
                </div>
            }
            <table className='soon'>
                <tbody>

                    {
                        hapeningNow?.map((event: EventApi) =>
                            <tr key={event.title}>
                                <td>
                                    Hapening NOW!
                                </td>
                                <td >
                                    {event.title}
                                </td>
                            </tr>
                        )
                    }

                    {
                        soon?.map((event: EventApi) =>
                            <tr key={event.title}>
                                <td >
                                    {calcDescriptionOfTimeUntil(event?.start, now)}
                                </td>
                                <td >
                                    {event.title}
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
            {/* <Button variant="primary" onClick={() => { setShow(!show) }} >
                {show ? "Hide" : "Show more"} calendar items
            </Button> */}
            {/* <pre>*
                {JSON.stringify(events, null, 2)}
                *</pre> */}
            <div style={show ? {} : { display: "none" }}>
                <FullCalendarMemo
                    eventsSet={handleEvents}
                    plugins={[listPlugin, iCalendarPlugin]}
                    initialView="list"
                    events={{
                        url: 'https://us-central1-elder-checklist.cloudfunctions.net/ical',
                        format: 'ics'
                    }}
                    duration={{ days: 7 }}
                    height="auto"
                    listDayFormat={{
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric'
                    }}
                    noEventsContent="Getting Calendar Data..."
                />
                <br />
                <br />

                {/* <iframe title="Calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=WEEK&src=b2xpcGhhbnRzdXphbm5lQGdtYWlsLmNvbQ&color=%23E67C73" style="border-width:0" width="100%" height="600" frameborder="0" scrolling="no"></iframe> */}
                {/* <iframe title="Calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=0&showDate=0&showNav=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=AGENDA&src=b2xpcGhhbnRzdXphbm5lQGdtYWlsLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23E67C73&color=%23009688" style={{ borderWidth: 0 }} width="100%" height="600"></iframe> */}
                <Button variant="primary" onClick={() => { setShow(!show) }} >
                    {show ? "Hide" : "Show"} Calendar
                </Button>
            </div>
        </div>
    </div>
}
