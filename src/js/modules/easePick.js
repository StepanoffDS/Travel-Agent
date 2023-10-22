import { easepick, TimePlugin } from '@easepick/bundle'

function getEasePick() {
  const picker = new easepick.create({
    element: document.getElementById('datePicker'),
    css: [
      'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
    ],
    plugins: [TimePlugin],
    format: 'HH:mm, DD/MM/YY',
    zIndex: 3,
  });
}

export default getEasePick