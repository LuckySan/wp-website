# Website des Schützenvereins Waldeslust Probstberg

Dieses Repository enthält den Quellcode für die statische Website des Schützenvereins Waldeslust Probstberg e.V.

## 🎯 Projektziel

Das Ziel ist eine einfache, wartbare und performante statische Website, die den Verein online repräsentiert, über Veranstaltungen informiert und als Anlaufstelle für Mitglieder und Interessierte dient.

## 💻 Technischer Überblick

Die Website ist bewusst einfach gehalten, um die Wartung zu erleichtern und eine hohe Performance zu gewährleisten.

*   **Hosting**: Die Seite wird direkt über **GitHub Pages** gehostet.
*   **Technologien**:
    *   Vanilla **HTML5**
    *   Vanilla **CSS3** (inkl. Flexbox & Grid)
    *   Vanilla **JavaScript (ES6+)**
*   **Keine Build-Tools**: Es wird bewusst auf komplexe Build-Schritte, Frameworks (wie React, Vue) oder serverseitige Sprachen (wie PHP) verzichtet.

## 🎨 Design-Philosophie

Das Design folgt einem einfachen, eleganten und traditionell-gemütlichen Stil, der zum Vereinscharakter passt.
*   **Farbpalette**: Dunkles Waldgrün, Gold/Ocker und Cremeweiß.
*   **Typografie**: Eine Mischung aus einer serifenlosen Schrift für den Fließtext und einer eleganten Serifenschrift für Überschriften.

## 📂 Struktur des Repositories

```
/
├── index.html            # Die Startseite
├── css/
│   └── style.css         # Globale Stylesheets
├── js/
│   └── script.js         # Globale JavaScript-Logik
├── artikel/
│   ├── beispiel.html     # Vorlage für neue Artikel
│   └── ...               # Weitere Artikel
├── images/
│   ├── archiv/           # Bilder für das Fotoarchiv, nach Jahr und Event sortiert
│   └── ...               # Allgemeine Bilder
├── documents/
│   └── Mitgliedschaft.pdf # Beitrittsformular etc.
├── *.html                # Weitere statische Seiten (Impressum, Jugend etc.)
└── README.md             # Diese Datei
```

### Wichtige Elemente

*   **Artikel**: Neue Artikel werden als separate `.html`-Dateien im `artikel/` Verzeichnis erstellt. Um einen neuen Artikel auf der Startseite anzuzeigen, muss er manuell zum `articles`-Array in `js/script.js` hinzugefügt werden.
*   **Fotoarchiv**: Das Fotoarchiv in `fotos_archiv.html` wird dynamisch durch JavaScript gefiltert. Jede Fotogalerie ist eine `<section>` mit einem `data-year` Attribut, das für die Filterung nach Jahren verwendet wird.
*   **Kalender**: Der Veranstaltungskalender wird über einen eingebetteten Google Kalender auf den Seiten `index.html` und `kalender.html` dargestellt.

## 🛠️ Entwicklung

Um die Website lokal zu entwickeln und Änderungen vorzunehmen, folgen Sie diesen Schritten:

1.  **Repository klonen**: Klonen Sie das Repository auf Ihren lokalen Rechner:
    ```bash
    git clone https://github.com/IhrBenutzername/IhrRepositoryname.git
    cd IhrRepositoryname
    ```
2.  **Lokal ausführen**: Da es sich um eine statische Website handelt, können Sie die HTML-Dateien direkt in Ihrem Webbrowser öffnen (z.B. `index.html`). Für eine bessere Entwicklungserfahrung (z.B. um relative Pfade korrekt aufzulösen), können Sie auch einen einfachen lokalen Webserver verwenden (z.B. mit VS Code Live Server Extension oder `python3 -m http.server`).
3.  **Änderungen vornehmen**: Bearbeiten Sie die HTML-, CSS- und JavaScript-Dateien nach Bedarf.
4.  **Änderungen veröffentlichen**: Sobald Sie mit Ihren Änderungen zufrieden sind, committen Sie diese und pushen Sie sie auf den `master`-Branch. GitHub Pages wird die Änderungen automatisch übernehmen.

## 🚀 Deployment

Das Deployment erfolgt automatisch durch GitHub Pages. Jeder Push auf den `master` (oder `main`) Branch aktualisiert die live geschaltete Website. Es sind keine manuellen Build- oder Deployment-Schritte erforderlich.

1.  Änderungen lokal durchführen und committen.
2.  Änderungen in das `master` (oder `main`) Branch pushen:
    ```bash
    git push origin master
    ```
3.  GitHub Pages aktualisiert die Website automatisch. Die Seite ist unter der konfigurierten GitHub Pages URL erreichbar.
