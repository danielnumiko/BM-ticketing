// ── Event data ──────────────────────────────────────────────────────────────

const events = {
  '2026-03-01': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: Life and death in ancient Egypt' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to ancient Egypt' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
    { type: 'sold-out', name: 'Around the world in 90 minutes tour' },
  ],
  '2026-03-02': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
  ],
  '2026-03-03': [
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
  ],
  '2026-03-04': [
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
  ],
  '2026-03-05': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to ancient Egypt' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
    { type: 'sold-out', name: 'Around the world in 90 minutes tour' },
  ],
  '2026-03-06': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'timed', time: '8:50am', name: 'Out-of-hours tour: an introduction to ancient Egypt' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
    { type: 'sold-out', name: 'Around the world in 90 minutes tour' },
    { type: 'sold-out', name: 'Desire, love, identity – an LGBTQ+ tour of the British Museum' },
  ],
  '2026-03-07': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the British Museum' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
  ],
  '2026-03-08': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: Life and death in ancient Egypt' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to ancient Egypt' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
    { type: 'sold-out', name: 'Around the world in 90 minutes tour' },
  ],
  '2026-03-09': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
  ],
  '2026-03-10': [],
  '2026-03-11': [
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
  ],
  '2026-03-12': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to ancient Egypt' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
  ],
  '2026-03-13': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
    { type: 'sold-out', name: 'Around the world in 90 minutes tour' },
  ],
  '2026-03-14': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: Life and death in ancient Egypt' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to ancient Egypt' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the British Museum' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
    { type: 'sold-out', name: 'Around the world in 90 minutes tour' },
    { type: 'sold-out', name: 'Desire, love, identity – an LGBTQ+ tour of the British Museum' },
  ],
  '2026-03-15': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: Life and death in ancient Egypt' },
    { type: 'timed', time: '8:50am', name: 'Out-of-hours tour: an introduction to ancient Egypt' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the British Museum' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
    { type: 'standard', name: 'Around the world in 90 minutes tour' },
    { type: 'sold-out', name: 'Desire, love, identity – an LGBTQ+ tour of the British Museum' },
  ],
  '2026-03-16': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
  ],
  '2026-03-17': [
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
  ],
  '2026-03-18': [
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
  ],
  '2026-03-19': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to ancient Egypt' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
    { type: 'sold-out', name: 'Around the world in 90 minutes tour' },
  ],
  '2026-03-20': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
    { type: 'sold-out', name: 'Around the world in 90 minutes tour' },
    { type: 'sold-out', name: 'Desire, love, identity – an LGBTQ+ tour of the British Museum' },
  ],
  '2026-03-21': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: Life and death in ancient Egypt' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to ancient Egypt' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the British Museum' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
    { type: 'standard', name: 'Around the world in 90 minutes tour' },
    { type: 'sold-out', name: 'Desire, love, identity – an LGBTQ+ tour of the British Museum' },
  ],
  '2026-03-22': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: Life and death in ancient Egypt' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to ancient Egypt' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
    { type: 'standard', name: 'Around the world in 90 minutes tour' },
  ],
  '2026-03-23': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
  ],
  '2026-03-24': [
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
  ],
  '2026-03-25': [],
  '2026-03-26': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to ancient Egypt' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
    { type: 'sold-out', name: 'Desire, love, identity – an LGBTQ+ tour of the British Museum' },
  ],
  '2026-03-27': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
    { type: 'sold-out', name: 'Around the world in 90 minutes tour' },
    { type: 'sold-out', name: 'Desire, love, identity – an LGBTQ+ tour of the British Museum' },
  ],
  '2026-03-28': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: Life and death in ancient Egypt' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to ancient Egypt' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the British Museum' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
    { type: 'standard', name: 'Around the world in 90 minutes tour' },
  ],
  '2026-03-29': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: Life and death in ancient Egypt' },
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to ancient Egypt' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
    { type: 'standard', name: 'Around the world in 90 minutes tour' },
  ],
  '2026-03-30': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to the ancient Greek world' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
  ],
  '2026-03-31': [
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
  ],
  // April overflow
  '2026-04-01': [
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
  ],
  '2026-04-02': [
    { type: 'timed', time: '8:00am', name: 'Out-of-hours tour: an introduction to China' },
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'Group Bookings' },
  ],
  '2026-04-03': [
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
  ],
  '2026-04-04': [
    { type: 'standard', name: "Hawai'i: a kingdom crossing oceans" },
    { type: 'standard', name: 'General admission' },
    { type: 'standard', name: 'Group Bookings' },
    { type: 'standard', name: 'Samurai' },
  ],
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function buildEventEl(event) {
  const btn = document.createElement('button');
  btn.className = 'event';

  const nameSpan = document.createElement('span');
  nameSpan.className = 'event__name';
  nameSpan.textContent = event.name;

  if (event.type === 'sold-out') {
    btn.classList.add('is-sold-out');
    const label = document.createElement('span');
    label.className = 'event__soldout-label';
    label.textContent = 'Sold out';
    btn.appendChild(label);
    btn.appendChild(nameSpan);
  } else if (event.type === 'timed') {
    const time = document.createElement('span');
    time.className = 'event__time';
    time.textContent = event.time;
    btn.appendChild(time);
    btn.appendChild(nameSpan);
  } else {
    btn.appendChild(nameSpan);
  }

  return btn;
}

function populateCell(cell) {
  const date = cell.dataset.date;
  const dateEvents = events[date];
  const eventsEl = cell.querySelector('.calendar__events');
  const dateBtn = cell.querySelector('.calendar__date');

  if (!dateEvents || dateEvents.length === 0) {
    cell.classList.add('no-events');
    dateBtn.disabled = true;
    const zeroCount = document.createElement('div');
    zeroCount.className = 'calendar__count';
    zeroCount.textContent = '0 events';
    cell.appendChild(zeroCount);
    return;
  }

  dateBtn.classList.add('has-events');
  cell.classList.add('has-events-cell');

  // Wrap date + CTAs in a top row
  const cellTop = document.createElement('div');
  cellTop.className = 'calendar__cell-top';
  cell.insertBefore(cellTop, dateBtn);
  cellTop.appendChild(dateBtn);

  const cta = document.createElement('span');
  cta.className = 'calendar__cta';
  cta.textContent = 'Click to view';
  cellTop.appendChild(cta);

  // Hide button – right side of cell-top row
  const hide = document.createElement('span');
  hide.className = 'calendar__hide';
  hide.appendChild(document.createTextNode('Hide'));
  const chevron = document.createElement('span');
  chevron.className = 'calendar__chevron';
  hide.appendChild(chevron);
  cell.appendChild(hide);

  // Count sits at the bottom
  const count = document.createElement('div');
  count.className = 'calendar__count';
  count.textContent = `${dateEvents.length} ${dateEvents.length === 1 ? 'event' : 'events'}`;
  cell.appendChild(count);

  dateEvents.forEach(ev => {
    eventsEl.appendChild(buildEventEl(ev));
  });
}

// ── Interaction ──────────────────────────────────────────────────────────────

let activeVersion = '2';

function toggleCell(cell) {
  if (activeVersion === '2') return;
  const dateBtn = cell.querySelector('.calendar__date');
  cell.classList.toggle('is-open');
  dateBtn.classList.toggle('is-active');
}

// ── Version toggle ───────────────────────────────────────────────────────────

const stylesheet = document.getElementById('theme-stylesheet');

function openAllCells() {
  document.querySelectorAll('.calendar__cell.has-events-cell').forEach(cell => {
    cell.classList.add('is-open');
    cell.querySelector('.calendar__date').classList.add('is-active');
  });
}

function closeAllCells() {
  document.querySelectorAll('.calendar__cell').forEach(cell => {
    cell.classList.remove('is-open');
    const dateBtn = cell.querySelector('.calendar__date');
    if (dateBtn) dateBtn.classList.remove('is-active');
  });
}

document.querySelectorAll('.version-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.version-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    activeVersion = btn.dataset.version;
    stylesheet.href = `css/styles-v${btn.dataset.version}.css`;
    if (btn.dataset.version === '2') {
      openAllCells();
    } else {
      closeAllCells();
    }
  });
});

// ── Init ─────────────────────────────────────────────────────────────────────

document.querySelectorAll('.calendar__cell').forEach(cell => {
  populateCell(cell);

  if (!cell.classList.contains('no-events')) {
    cell.addEventListener('click', (e) => {
      if (e.target.closest('.event')) return;
      toggleCell(cell);
    });
  }
});

// Open all cells on load since Version 2 is the default
openAllCells();
