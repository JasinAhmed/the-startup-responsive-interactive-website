Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

# Titel
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->

## Bronnen
## Code conventies
Code conventies zijn belangrijk om je code overzichtelijk en goed onderhoudbaar te houden. Door vaste afspraken te maken over inspringen, naamgeving en structuur is de code makkelijker te lezen, zowel voor mijzelf als voor anderen die de code bekijken.

### Ademruimte en inspringen
Bij het schrijven van mijn HTML en CSS heb ik bewust gelet op ademruimte. Dit betekent dat ik mijn code zo heb ingedeeld dat je in één oogopslag ziet hoe de structuur in elkaar zit.

Ik gebruik overal 2 spaties voor het inspringen en ik plaats witregels tussen grotere blokken zoals de header, main en footer. Geneste elementen worden altijd verder ingesprongen, zodat duidelijk is welk element bij welk blok hoort.

Hieronder een voorbeeld uit mijn HTML waarin deze ademruimte goed te zien is.

https://github.com/JasinAhmed/the-startup-responsive-interactive-website/blob/e32fd34e19f9b0049d087a4f88515bc8ff53c9d9/index.html#L90-L117
https://github.com/JasinAhmed/the-startup-responsive-interactive-website/blob/e32fd34e19f9b0049d087a4f88515bc8ff53c9d9/style.css#L193-L198

### Volgorde en nesten van CSS selectors
Tijdens het stijlen is het belangrijk dat alle CSS selectors goed genest zijn en ook in de juiste volgorde zitten.
Dit zorgt voor leesbaarheid en maakt het navigeren makkelijker tijdens het zoeken naar selectors om te stijlen.

Hier is een voorbeeld hoe ik mijn code op volgorde heb gezet en de CSS selectors heb genest.

https://github.com/JasinAhmed/the-startup-responsive-interactive-website/blob/6dbf4f2744c5aa1ace6da706b842df7f0bb8d0bd/style.css#L173-L186


### Nesten van container queries
Om mijn CSS overzichtelijk te houden, heb ik de volgorde van mijn selectors afgestemd op de HTML-structuur. Componenten die bij elkaar horen, staan ook bij elkaar in de stylesheet.

Ik nest selectors alleen wanneer ze echt bij elkaar horen en ik probeer dit beperkt te houden, zodat de code leesbaar blijft.

Een voorbeeld hiervan is te zien bij de styling van de vacature-slider:

https://github.com/JasinAhmed/the-startup-responsive-interactive-website/blob/e32fd34e19f9b0049d087a4f88515bc8ff53c9d9/style.css#L377-L385

### Naamgeving

Bij het kiezen van namen voor classes heb ik vaste afspraken aangehouden. Alle class-namen zijn geschreven in kebab-case en in het Engels. Dit zorgt voor consistentie binnen het project.

Voorbeelden uit mijn HTML:

https://github.com/JasinAhmed/the-startup-responsive-interactive-website/blob/6dbf4f2744c5aa1ace6da706b842df7f0bb8d0bd/index.html#L21-L23

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


