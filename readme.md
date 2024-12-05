Techn. Besonderheiten:
- Verwendung von aria-labels und semantische tags zur barrierefreiheit
- Einheitliche Struktur von Kommentaren und Aria-Labels:
  - Aria-Labels deutsch, da sich der Zielmarkt aktuell nur auf deutsche Länder spezialisiert und dort die gesprochene Sprache deutsch ist
  - HTML-KOmmentare englisch, um der Firma Outsourcing oder Troubleshooting mit externen/ausländischen Freelancern/Dienstleistern zu erleichtern
- verwendung eines css-frameworks (tailwind css)
  - einfacherer einstieg und schnellere lernkurve durch vorgefertigte css-klassen
  - da es für versch. branchen als state of the art gilt
  - zusammenspiel mit integration von zukünftigen Frameworks/Bibliotheken in kommenden semestern für interaktive webanwendungen

- Verwendung von Template-Dateien mit Variablen, um Bereitstellung von weiteren Pages zu erleichtern

- Map-Screenshots über kostenfreies OpenStreetMap-Tool "uMap" erstellt
- Hintergrundbilder von Pixabay

ordnerstruktur
techn. anspruchsvollere konstrukte erklären (zb. header mit mobile view)
verschlagwortung seo

1. Einführung
Zweck und Funktionalität der Webseite:
Kurze Beschreibung, worum es bei der Webseite geht.
Zielgruppe und Mehrwert der Webseite.
Überblick über die Technologie:
Verwendete Technologien und Tools (z. B. HTML5, CSS3, Bootstrap).
1. Struktur der Webseite
Datei- und Ordnerstruktur:
Übersicht und Beschreibung der Verzeichnisse und Dateien.
Beispiel:
bash
Code kopieren
/index.html         -> Startseite der Webseite
/css/styles.css     -> Haupt-CSS-Datei
/images/            -> Bilderverzeichnis
/about.html         -> Über-uns-Seite
Seitenstruktur:
Sitemap oder Navigation (welche Seiten existieren und wie sie miteinander verbunden sind).
1. Technische Besonderheiten
Semantik und Struktur:
Verwendung semantischer HTML5-Elemente (z. B. <header>, <footer>, <article>).
Barrierefreiheit:
Maßnahmen zur Einhaltung von WCAG 2.2 Level A:
Alt-Texte für Bilder.
ARIA-Attribute (falls notwendig).
Tastaturnavigation.
Responsive Design:
Beschreibung der Media Queries und wie die Webseite auf verschiedene Gerätegrößen angepasst wurde.

1. Verwendete Technologien und Frameworks (Fortsetzung)
Tools und Methoden:

Beschreibung der Entwicklungsumgebung (z. B. Visual Studio Code, Sublime Text).
Versionierung mit Git: Verweis auf das Repository und Verwendung von Branches.
Automatisierungstools: Beispiele für Tools wie Autoprefixer oder Build-Systeme (z. B. Grunt, Gulp).
Externe Ressourcen:

Auflistung der verwendeten externen Ressourcen (z. B. Fonts, Icons, Bilder).
Lizenzhinweise und Quelle für alle verwendeten Inhalte.
Beispiel:
ruby
Code kopieren
Unsplash: https://unsplash.com/photos/abc123
Google Fonts: https://fonts.google.com/specimen/Roboto
5. Implementierungsdetails
Wiederverwendbare Komponenten:

Beschreibung der modularen Elemente (z. B. Header, Footer, Karten-Komponenten).
Codebeispiele für Klassen oder Templates.
html
Code kopieren
<header class="site-header">
    <nav>
        <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/about.html">About</a></li>
        </ul>
    </nav>
</header>
Style Guide:

Definierte Farbpalette, Schriftarten und Abstände.
Beispiel:
makefile
Code kopieren
Primärfarbe: #3498db
Sekundärfarbe: #2ecc71
Schriftart: Roboto, sans-serif
Performance-Optimierung:

Maßnahmen zur Optimierung von Ladegeschwindigkeit und Datenmenge:
Komprimierung von Bildern (z. B. TinyPNG).
Lazy Loading für Bilder und Inhalte.
CSS und HTML-Minimierung (bei der Abgabe nicht erlaubt, aber in der Entwicklung getestet).
6. Testverfahren
Browser-Tests:

Getestete Browser und Versionen (z. B. Chrome 117, Firefox 118, Safari 16).
Beschreibung von Problemen und Lösungen bei Inkompatibilitäten.
Responsiveness:

Testgeräte und Bildschirmauflösungen (z. B. Desktop: 1920x1080, Mobile: 375x812).
Beschreibung der Anpassungen für verschiedene Ansichten.
Barrierefreiheit:

Verwendete Testtools (z. B. Lighthouse, WAVE Accessibility Tool).
Ergebnisse und Korrekturmaßnahmen.
Netzwerk-Tests:

Tests bei langsamer Netzwerkgeschwindigkeit („Bahnfahrt-Simulation“).
Maßnahmen zur Reduzierung von Ladezeiten.
7. Herausforderungen und Lösungen
Probleme während der Entwicklung:

Beschreibung der größten Herausforderungen (z. B. Layout-Probleme, Responsiveness).
Schritte zur Lösung.
Lernprozess:

Erworbene Kenntnisse durch das Projekt (z. B. neue CSS-Techniken, Barrierefreiheit).
8. Abschließende Hinweise
Quellcode-Verweis:
Link oder Pfad zum vollständigen, lesbaren Quellcode.
Zukunftsausblick:
Funktionen oder Verbesserungen, die nach Projektabschluss implementiert werden könnten.

Systemkonfiguration:
- Standard Linux Server der DHBW Heidenheim
- Cloudserver bei Hetzner online, Typ CX11
- 1 CPU, 2GB RAM, 20GB Disk lokal
- Verwendung von letsencrypt zur erstellung von ssl-zertifikaten 
  - Jede Anfrage an http://einzigware.projekt.dhbw-heidenheim.de automatisch auf https://einzigware.projekt.dhbw-heidenheim.de umgeleitet.
  - Die Verbindung über HTTPS abgesichert, basierend auf den Let's Encrypt-Zertifikaten.

