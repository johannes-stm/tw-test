# Technische Dokumentation: Einzigware Projekt

## Inhaltsverzeichnis
- [Technische Dokumentation: Einzigware Projekt](#technische-dokumentation-einzigware-projekt)
  - [Inhaltsverzeichnis](#inhaltsverzeichnis)
  - [Projektübersicht](#projektübersicht)
    - [Ziele:](#ziele)
  - [Systemkonfiguration](#systemkonfiguration)
    - [Entwicklungsumgebung:](#entwicklungsumgebung)
    - [Tailwind CLI](#tailwind-cli)
    - [Hosting-Umgebung:](#hosting-umgebung)
  - [Datei- und Ordnerstruktur](#datei--und-ordnerstruktur)
  - [Styling und Design](#styling-und-design)
    - [Farbdefinitionen](#farbdefinitionen)
    - [Design Details](#design-details)
  - [Technische Besonderheiten](#technische-besonderheiten)
    - [Barrierefreiheit](#barrierefreiheit)
    - [Kommentierung](#kommentierung)
    - [Versionierter Header und Footer](#versionierter-header-und-footer)
    - [Wiederverwendbare Komponenten](#wiederverwendbare-komponenten)
    - [Templates](#templates)
      - [Beispiel: Template für Regionen](#beispiel-template-für-regionen)
      - [Beispiel: Template für Verkäufer](#beispiel-template-für-verkäufer)
      - [Beispiel: Template für Produkte](#beispiel-template-für-produkte)
  - [Persönliches Learning und Probleme](#persönliches-learning-und-probleme)
    - [Lernerfahrungen](#lernerfahrungen)
    - [Herausforderungen](#herausforderungen)
  - [Zukünftige Erweiterungen](#zukünftige-erweiterungen)
---

## Projektübersicht
Das **Einzigware Projekt** ist eine dynamische, barrierefreie Webseite, die die Anforderungen des HTML-Projekts erfüllt und dabei den aktuellen Standards der Webentwicklung entspricht. Sie wurde für eine deutschsprachige Zielgruppe entwickelt.

### Ziele:
- **Barrierefreiheit**: Umsetzung von WCAG 2.2 Standards.
- **Performance**: Optimierte Ladezeiten durch effizientes CSS und Bildkomprimierung.
- **Skalierbarkeit**: Möglichkeit zur einfachen Erweiterung mit neuen Seiten und Funktionen.
- **Design**: Umsetzung eines traditionellen, als auch modernen Design, um den Charm der Website beizuhalten
---

## Systemkonfiguration
Das Projekt wurde auf folgenden Systemen entwickelt und gehostet:

### Entwicklungsumgebung:
- **Betriebssystem**: Windows 11
- **Entwicklungstools**: 
  - Visual Studio Code
  - Tailwind CLI für CSS-Generierung

### Tailwind CLI
Tailwind wurde zur Generierung des CSS mithilfe des folgenden Codes verwendet:
- **input.css für Klassen-Import**
  ```bash
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- **Kompilierung mithilfe npx-Befehl**
  ```bash
  npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch --content "./src/**/*.html,index.html"
  ```

### Hosting-Umgebung:
- **Server**: 
  - Standard-Linux-Server der DHBW Heidenheim
  - Betriebssystem Linux (Ubuntu 22.04)
  - Cloudserver: Hetzner Online, Typ CX11
    - 1 CPU, 2 GB RAM, 20 GB Speicherplatz
- **SSL-Verschlüsselung**: 
  - Zertifikate wurden mit Let's Encrypt generiert.
  - Automatische Weiterleitung von HTTP zu HTTPS.

Beispiel für SSL-Konfiguration in Apache:
```bash
<VirtualHost *:80>
    ServerName einzigware.projekt.dhbw-heidenheim.de
    Redirect permanent / https://einzigware.projekt.dhbw-heidenheim.de/
</VirtualHost>

<VirtualHost *:443>
    ServerName einzigware.projekt.dhbw-heidenheim.de
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/einzigware.projekt/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/einzigware.projekt/privkey.pem
</VirtualHost>
```

---

## Datei- und Ordnerstruktur
Die Struktur wurde so gestaltet, dass sie übersichtlich und leicht erweiterbar ist:

```
Einzigware/
├── public/                                 # Statische Inhalte
│   └── images/                             # Bilder, z.B. Logos und Karten
│       ├── homepage                        # Gegliedert nach Verwendungsort / "Verantwortlichkeit"
│       │   └── hero.webp                   # Bild komprimiert als .webp
│       └── ...                             # Allgemein verwendete Bilder
├── src/                                    # Quellcode
│   ├── css/                                # CSS-Stile (generiert von Tailwind)
│   │   └── output.css
│   ├── views/                              # HTML-Seiten und Templates
│   │   ├── products                        # Ordner mit Produkt-Seiten und Template
│   │   │   └── _products_template.html     # Template-Datei mit Variablen zu Seite
│   │   │   └── products_blütenhonig.html   # Angepasste Produkt-Seite 
│   │   ├── regions                         # Ordner mit Regionen-Seiten und Template
│   │   ├── sellers                         # Ordner mit Verkäufer-Seiten und Template
│   │   ├── about.html
│   │   ├── contact.html
│   │   └── ...                             # weitere Pages 
└── index.html                              # Startseite
```

## Styling und Design

Die Farbpalette und das Design sind sorgfältig aufeinander abgestimmt, um eine konsistente und ansprechende Benutzeroberfläche zu gewährleisten.

### Farbdefinitionen
- **wm-black**: `#201e1e`
- **wm-brown**: `#b07141`
- **wm-beige**: `#f7ede2`
- **wm-darkbrown**: `#50211d`
- **wm-blue**: `#00CED1`
- **wm-lightgray**: `#4b5563`
- **wm-darkgray**: `#1f2937`

### Design Details
- **Framework**: Es wird **Tailwind CSS** genutzt, um eine flexible und modulare Gestaltung der Oberfläche zu ermöglichen.
- **Farbpalette**: Die oben definierte Farbpalette gewährleistet ein harmonisches Erscheinungsbild, das an den Corporate Identity angepasst ist.
- **Responsive Design**: Media Queries kommen zum Einsatz, um sicherzustellen, dass das Layout auf allen Gerätetypen – insbesondere auf Mobilgeräten – optimal dargestellt wird.

---

## Technische Besonderheiten

### Barrierefreiheit
- **Aria-Labels:** Alle interaktiven Elemente sind mit aussagekräftigen `aria-labels` ausgestattet, um die Zugänglichkeit zu verbessern. Die Labels sind in deutscher Sprache gehalten, da die Webseite für den deutschsprachigen Markt optimiert ist. Beispiel:
  ```html
  <button aria-label="Hauptmenü öffnen">Menü</button>
  ```
- **Semantische Tags:** Es wurden semantische HTML-Tags wie `<header>`, `<main>` und `<footer>` verwendet, um die Struktur der Webseite klar und zugänglich zu gestalten. Beispiel:
  ```html
  <header>
    <h1>Willkommen bei Einzigware</h1>
  </header>
  ```
- **Prüfung über externe Anwendungen**: Zur Prüfung der Barrierefreiheit wurden Tools wie Accessibility Checker sowie die Browser-Erweiterung WAVE (Web Accessibility Evaluation Tool) eingesetzt. Identifiziertes Verbesserungspotenzial wurde anschließend bearbeitet.
- Diese Maßnahmen stellen sicher, dass auch Nutzer von Screenreadern oder anderer assistiver Technologie problemlos navigieren können.

### Kommentierung
- **Mehrsprachige Unterstützung:** HTML-Kommentare wurden bewusst auf Englisch verfasst, um die Zusammenarbeit mit internationalen Entwicklern (im Sinne der fiktiven Firma) zu erleichtern. Beispiel:
  ```html
  <!-- Main navigation bar starts here -->
  ```
- Dies ermöglicht einen klaren und einheitlichen Stil bei der Dokumentation des Codes.

### Versionierter Header und Footer
Aufgrund mehrfacher Änderungen wurde eine Versionierung als Kommentar sowohl im Header als auch im Footer eingeführt, um sicherzustellen, dass auf jeder Seite die aktuelle Komponente verwendet wird.

- **Header:**
  ```html
  <!-- Header v1.5.1 -->
  <header>
    ...
  </header>
  ```
- **Footer:**
    ```html
  <!-- Footer v1.3.1 -->
  <footer>
    ...
  </footer>
  ```

### Mobiles Menü (Hamburger)  
Für eine responsive Nutzung wurde ein mobiles Menü entwickelt, das sich auf kleineren Bildschirmgrößen zu einem sogenannten "Hamburger" Symbol reduziert. Beim Öffnen des Menüs wird zu einer separaten, für mobile Nutzung optimierten Seite navigiert.  

Diese Lösung weist jedoch Verbesserungspotenzial auf: Beim Schließen des mobilen Menüs über das "X" wird derzeit die Startseite (Index) erneut aufgerufen, anstatt zur zuletzt besuchten Seite zurückzukehren. Zukünftig kann dieses Verhalten durch die Implementierung einer passenden JavaScript-Funktion, wie z. B. *document.referrer*, optimiert werden.  

**Verweis im Header auf Mobiles Menü:**
  ```html
  <!-- Utility Links and Mobile Menu -->
  <div class="flex items-center gap-4">
    <!-- Mobile Menu Icon -->
    <div
      class="flex lg:hidden"
      onclick="location.href='/src/views/mobile-menu.html'"
      aria-label="Mobile Navigation öffnen"
    >
  ```
  
### Wiederverwendbare Komponenten
Im Laufe des Entwicklungsprozesses wurden bestimmte Komponenten entwickelt, die entweder unverändert oder angepasst auch auf anderen Unterseiten verwendet wurden. Sie wurden zunächst einmalig erstellt, anschließend an responsive und barrierefreie Anforderungen angepasst und danach auf weiteren Seiten integriert.

Da in diesem Fall nur wenige Änderungen während des Entwicklungsprozesses erforderlich waren, wurde auf eine Versionierung verzichtet.

- **Produkt-Karte:**
  ```html
  <!-- Recommended Products  -->
  <section aria-label="Trendprodukte">
    ...
  </section>
  ```
- **Detail-Abschnitt auf Verkäufer- und Produkt-Seite:**
  ```html
  <!-- Seller Detail Section -->
  <section>
    <!-- Navigation -->
    <nav>
    ...
    </nav>
  ```
- **...**

### Templates
Templates wurden eingesetzt, um die Erstellung von Regionen-, Verkäufer- und Produktseiten zu vereinfachen und dabei die Konsistenz zu gewährleisten. Dieser Ansatz ermöglicht, trotz der technischen Einschränkungen von HTML und CSS, eine dynamische Datenpflege und erleichtert zudem die zukünftige Einführung einer Datenbank, da bereits eine Grundlage geschaffen wurde, auf der aufgebaut werden kann.

Nach der Erstellung der Template-Dateien wurde der Musterinhalt durch vordefinierte Variablen ersetzt. Anschließend konnten die Templates mehrfach dupliziert und mithilfe der Suchen-und-Ersetzen-Funktion von Visual Studio Code die Variablen durch die passenden Inhalte ersetzt werden. Die benötigten Variablen wurden zuvor in einer Excel-Tabelle definiert und mit den entsprechenden Inhalten vorbereitet.

#### Beispiel: Template für Regionen

| Variablen         | Schwarzwald        |
|--------------------|-----------------------------------|
| `$REGION`          | Schwarzwald                      |
| `$REGIONBL`        | Baden-Württemberg                |
| `$REGIONSBILD`     | schwarzwald_bg.webp              |
| `$REGIONSSEITE`    | regions_schwarzwald.html         |

#### Beispiel: Template für Verkäufer

| Variablen              | Käsekeller Alpenglück           |
|------------------------|---------------------------------|
| `$REGION`              | Oberallgäu                     |
| `$REGIONSSEITE`        | regions_oberallgäu.html        |
| `$VERKÄUFER`           | Käsekeller Alpenglück          |
| `$VERKÄUFERBESCHREIBUNG` | Traditionsreicher Familienbetrieb aus dem Herzen des Allgäus |
| `$VERKÄUFERBILD`       | käsekeller-alpenglück.webp     |
| `$VERKÄUFERBL`         | Bayern                         |
| `$VERKÄUFERREGION`     | Oberallgäu                     |
| `$VERKÄUFERSEITE`      | seller_käsekeller-alpenglück.html |
| `$VERKÄUFERSTANDORT`   | Oberstdorf                     |
| `$VERKÄUFERSTANDORTBILD` | allgäu-oberstdorf.webp       |


#### Beispiel: Template für Produkte

| Variablen         | Allgäuer Bergkäse                |
|--------------------|----------------------------------|
| `$PRODUKT`         | Allgäuer Bergkäse               |
| `$PRODUKTBILD`     | allgäuer-bergkäse.webp          |
| `$PRODUKTPREIS`    | 6,99 € / 200 g                  |
| `$PRODUKTSEITE`    | products_allgäuer-bergkäse.html |
| `$VERKÄUFER`       | Käsekeller Alpenglück           |
| `$VERKÄUFERBILD`   | käsekeller-alpenglück.webp      |
| `$VERKÄUFERBL`     | Bayern                          |
| `$VERKÄUFERREGION` | Oberallgäu                      |
| `$VERKÄUFERREGIONSEITE` | regions_oberallgäu.html   |
| `$VERKÄUFERSEITE`  | seller_käsekeller-alpenglück.html |
| `$VERKÄUFERSTANDORT` | Oberstdorf                   |
| `$VERKÄUFERSTANDORTBILD` | allgäu-oberstdorf.webp   |

---

## Persönliches Learning und Probleme

### Lernerfahrungen
- **Frameworks:** Anwendung moderner Technologien wie **Tailwind CSS**, um effizientes und flexibles Styling zu ermöglichen.
- **Barrierefreiheit:** Vertieftes Verständnis für die Umsetzung barrierefreier Webdesigns, insbesondere durch den Einsatz von `aria-labels` und semantischen HTML-Tags.

### Herausforderungen
- **Responsive Design:** Die anfängliche Entwicklung folgte einem "Desktop-First"-Ansatz, was die Optimierung für mobile Endgeräte teilweise erschwerte.
- **Seitenstruktur:** Das manuelle Erstellen von Produkt-, Regions- und Verkäuferseiten war zeitintensiv und erforderte eine präzise Strukturierung.

---

## Zukünftige Erweiterungen

- **CMS-Integration:** Einführung eines Content-Management-Systems zur einfachen Pflege und Aktualisierung der Inhalte.
- **Dark Mode:** Implementierung eines Dunkelmodus zur Verbesserung der Benutzererfahrung.
- **Benutzerfunktionen:** Erweiterung um Login-, Registrierungs- und Authentifizierungsmechanismen auf Basis einer Datenbank.
- **Favoritenliste:** Einführung einer Funktion, mit der Benutzer ihre bevorzugten Produkte speichern können.
- **Erweiterte Bestellfunktion:** Bestellvorgang vollständig abbilden mit Warenkorb, Lieferadresse, Zahlungsmethoden und E-Mail-Bestellbestätigung
---