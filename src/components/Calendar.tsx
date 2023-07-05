import { Button } from 'react-bootstrap';
import { useState } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import iCalendarPlugin from '@fullcalendar/icalendar'
import listPlugin from '@fullcalendar/list';
import './calendar.css';

const defaultShow = (new URLSearchParams(window.location.search)).get("cal") !== null ? true : false;


export default function Weather({ elementData }: {
    elementData: any
}) {
    const [show, setShow] = useState(defaultShow)


    return <div className="row mt-2">
        <div className="col">
            <Button variant="primary" onClick={() => { setShow(!show) }} size='lg'>
                {show ? "Hide" : "Show"} Calendar
            </Button>
            {show && <>

                <FullCalendar
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
                <br></br>
                <br></br>

                {/* <iframe title="Calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=WEEK&src=b2xpcGhhbnRzdXphbm5lQGdtYWlsLmNvbQ&color=%23E67C73" style="border-width:0" width="100%" height="600" frameborder="0" scrolling="no"></iframe> */}
                {/* <iframe title="Calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=0&showDate=0&showNav=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=AGENDA&src=b2xpcGhhbnRzdXphbm5lQGdtYWlsLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23E67C73&color=%23009688" style={{ borderWidth: 0 }} width="100%" height="600"></iframe> */}
                <Button variant="primary" onClick={() => { setShow(!show) }} size='lg'>
                    {show ? "Hide" : "Show"} Calendar
                </Button></>
            }
        </div>
    </div>
}
