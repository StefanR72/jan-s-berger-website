# Jan S. Berger – Autorenwebsite

Responsive, statische Autorenwebsite für GitHub Pages ohne Framework oder Build-Prozess.

## Vorschau
`index.html` lokal im Browser öffnen oder einen lokalen HTTP-Server starten (`python3 -m http.server 8000`).

## GitHub Pages
1. Ein neues öffentliches GitHub-Repository erstellen (z. B. `jan-s-berger`).
2. Den kompletten Inhalt dieses Ordners ins Repository hochladen (die `index.html` muss im Repository-Stamm liegen).
3. Unter **Settings → Pages → Build and deployment** die Option **Deploy from a branch**, `main` und `/(root)` wählen.
4. GitHub zeigt die öffentliche `github.io`-Adresse an.
5. Eine eigene Domain beim Registrar kaufen, bei **Settings → Pages → Custom domain** eintragen und DNS-Einträge entsprechend den offiziellen GitHub-Pages-Anleitungen setzen. **Enforce HTTPS** aktivieren, sobald es verfügbar ist.

## Vor dem Livegang
- Impressum und individuelle Datenschutzerklärung mit korrekten Angaben ergänzen (in `index.html` und `script.js`).
- Amazon-Produktlinks, Veröffentlichungsstatus, Preise und Kontakt-/Social-Links erst nach ihrer Verfügbarkeit hinzufügen.
- Klappentexte und Autorenvorstellung abschließend prüfen bzw. freigeben.
- Titel und Cover-Dateien liegen in `assets/`; WebP ist für die Auslieferung komprimiert.

Keine Cookies, keine Trackingdienste, keine Webfonts oder externen JavaScript-Bibliotheken.
