'use strict';

const bookData = {
  1: {
    title: 'Das Telefon am Strand',
    subtitle: 'Band 1 der Hua-Hin-Trilogie',
    description: 'An einem Strand in Hua Hin wird ein Telefon gefunden. Was wie ein gewöhnlicher Fund beginnt, führt in eine Geschichte voller Rätsel, gefährlicher Geheimnisse und Entscheidungen, deren Folgen niemand abschätzen kann.'
  },
  2: {
    title: 'Nachtzug nach Bangkok',
    subtitle: 'Band 2 der Hua-Hin-Trilogie',
    description: 'Die Spur führt weiter – bis in einen Nachtzug nach Bangkok. Dort wird die Reise zum gefährlichen Spiel, bei dem Vertrauen ein Risiko und die Wahrheit alles andere als sicher ist.'
  },
  3: {
    title: 'Das Haus hinter dem Wasser',
    subtitle: 'Band 3 · Finale der Hua-Hin-Trilogie',
    description: 'Im letzten Band der Trilogie laufen die Fäden zusammen. Alte Geheimnisse warten auf ihre Auflösung und die Vergangenheit holt jene ein, die glaubten, ihr entkommen zu sein.'
  }
};

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const bookDialog = document.querySelector('#book-dialog');
const legalDialog = document.querySelector('#legal-dialog');

document.querySelectorAll('[data-book]').forEach(button => {
  button.addEventListener('click', () => {
    const book = bookData[button.dataset.book];
    if (!book || !bookDialog) return;
    document.querySelector('#dialog-title').textContent = book.title;
    document.querySelector('#dialog-kicker').textContent = book.subtitle;
    document.querySelector('#dialog-description').textContent = book.description;
    bookDialog.showModal();
  });
});

const legalTexts = {
  impressum: {
    title: 'Impressum',
    text: 'Die vollständige Anbieterkennzeichnung mit den gesetzlich erforderlichen Kontakt- und Anschriftsangaben muss vor der öffentlichen Veröffentlichung dieser Website eingesetzt werden. Diese Vorschau enthält bewusst keine erfundenen Kontaktdaten.'
  },
  datenschutz: {
    title: 'Datenschutz',
    text: 'Diese statische Demo verwendet keine Analyse- oder Trackingdienste, keine Cookies und keine extern eingebundenen Schriftarten. Vor Veröffentlichung ist eine individuelle Datenschutzerklärung, insbesondere zu GitHub Pages und möglichen Kontaktmöglichkeiten, zu ergänzen.'
  }
};

document.querySelectorAll('[data-legal]').forEach(button => {
  button.addEventListener('click', () => {
    const legal = legalTexts[button.dataset.legal];
    if (!legal || !legalDialog) return;
    document.querySelector('#legal-title').textContent = legal.title;
    document.querySelector('#legal-text').textContent = legal.text;
    legalDialog.showModal();
  });
});

document.querySelectorAll('.dialog-close').forEach(button => {
  button.addEventListener('click', () => button.closest('dialog')?.close());
});
document.querySelectorAll('.dialog-action').forEach(button => {
  button.addEventListener('click', () => button.closest('dialog')?.close());
});
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
});

document.querySelector('#year').textContent = String(new Date().getFullYear());
