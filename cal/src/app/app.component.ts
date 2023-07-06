import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  template: `
    <div id="calendar"></div>
  `
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const calendarEl = document.getElementById('calendar');

    if (calendarEl) {
      const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        events: [
          {
            title: 'Event 1',
            start: '2023-07-01'
          },
          {
            title: 'Event 2',
            start: '2023-07-05'
          }
        ]
      });

      calendar.render();
    }
  }
}
