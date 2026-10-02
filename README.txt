English Trainer A1–B2 – finale Aktualisierung

Enthaltene Dateien:
- index.html: App-Oberfläche und Lernlogik
- manifest.json: Einstellungen für die Installation als Web-App
- service-worker.js: aktualisierte Cache-Version, damit Updates geladen werden
- icon.png / icon-v2.png / apple-touch-icon-v2.png: App-Symbole
- speech-button.png: Audio-Symbol

Änderungen dieser Version:
- Audiosymbol wird exakt mittig unter der englischen Bedeutung ausgerichtet; das CEFR-Badge bleibt rechts.
- Sprachwahl bevorzugt wieder die britische Stimme nach der Auswahl-Logik der früheren Version.
- Bekannte männliche Stimmen werden ausgeschlossen; die App verwendet keine Geräte-Standardstimme als Fallback.
- UTF-8 wird bevorzugt decodiert, um deutsche Umlaute korrekt darzustellen.
- Lernstand-Migration aus vorherigen Versionen bleibt erhalten.

Update auf GitHub Pages:
1. Entpacke die ZIP-Datei.
2. Lade alle enthaltenen Dateien ins Stammverzeichnis des GitHub-Repositories hoch und ersetze gleichnamige Dateien.
3. Öffne die App auf dem iPad mit Internetverbindung neu. Falls eine alte Ansicht erscheint, schließe die Web-App vollständig und öffne sie erneut.
4. Der Lernfortschritt wird lokal gespeichert und soll durch das Update erhalten bleiben.

Hinweis zur Stimme:
Die konkrete verfügbare Stimme hängt von den auf dem iPad installierten iPadOS-Stimmen ab. Wenn keine passende en-GB-Stimme erkannt wird, spielt die App absichtlich keine Standard- oder Männerstimme ab und zeigt einen Hinweis an.
