# Technische Dokumentation: Einzigware Projekt

## Inhaltsverzeichnis
- [Technische Dokumentation: Einzigware Projekt](#technische-dokumentation-einzigware-projekt)
  - [Inhaltsverzeichnis](#inhaltsverzeichnis)
  - [Projektübersicht](#projektübersicht)
    - [Ziele:](#ziele)
  - [Systemkonfiguration](#systemkonfiguration)
    - [Entwicklungsumgebung:](#entwicklungsumgebung)
    - [Hosting-Umgebung:](#hosting-umgebung)
  - [Datei- und Ordnerstruktur](#datei--und-ordnerstruktur)
  - [Styling und Design](#styling-und-design)
    - [Farbdefinitionen](#farbdefinitionen)
    - [Design Details](#design-details)
  - [Technische Besonderheiten](#technische-besonderheiten)
    - [Barrierefreiheit](#barrierefreiheit)
    - [Kommentierung](#kommentierung)
    - [Templates](#templates)
      - [Beispiel: Template für Regionen](#beispiel-template-für-regionen)
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
- Diese Maßnahmen stellen sicher, dass auch Nutzer von Screenreadern oder anderer assistiver Technologie problemlos navigieren können.

### Kommentierung
- **Mehrsprachige Unterstützung:** HTML-Kommentare wurden bewusst auf Englisch verfasst, um die Zusammenarbeit mit internationalen Entwicklern zu erleichtern. Beispiel:
  ```html
  <!-- Main navigation bar starts here -->
  ```
- Dies ermöglicht einen klaren und einheitlichen Stil bei der Dokumentation des Codes.

### Templates
Templates werden eingesetzt, um wiederverwendbare Layouts und Komponenten zu definieren. Dadurch wird die Entwicklungszeit verkürzt und die Konsistenz der Webseite gewahrt.

#### Beispiel: Template für Regionen
Die folgende Tabelle zeigt ein Beispiel-Template für die Darstellung von Regionen:

| Variablen         | regions_schwarzwald.html          |
|--------------------|-----------------------------------|
| `$REGION`          | Schwarzwald                      |
| `$REGIONBL`        | Baden-Württemberg                |
| `$REGIONSBILD`     | schwarzwald_bg.webp              |
| `$REGIONSSEITE`    | regions_schwarzwald.html         |

#### Beispiel: Template für Produkte
Die folgende Tabelle zeigt ein Beispiel-Template für die Darstellung von Produkten:

| Variablen         | allgäuer-bergkäse                |
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
---