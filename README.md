# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.




## Jij

### Ontwerper:
Leonie Wagner

#### Je startniveau:
Mijn startniveau is: blauw




# Je plan

<details open>
  <summary>Research en eerste schetsen</summary>

  <p>
  
  As it was first my idea to show the development of the bottle design of Coca Cola over the years, I started to do research and collect ideas on how to portray the changes the best. 
  
  Since 1886, Coca-Cola has gone through a number of design changes, with many different bottle designs created for the iconic soft drink over the years. Here's an overview of some of the most significant designs:
  Hutchinson bottle (1886-1899): The first Coca-Cola bottle was known as the Hutchinson bottle, named after its inventor, William Hutchinson. These bottles were made of glass and had a blob top with a wire and rubber stopper.
  Straight-sided bottle (1900-1916): This bottle was the first to feature the now-famous Coca-Cola script logo. It was also the first bottle to have a uniform design and was made of clear glass with a straight-sided shape.
  Contour bottle (1916-present): The iconic Coca-Cola contour bottle was first introduced in 1916, designed to be easily recognizable even if it was broken or shattered. The curvy shape of the bottle was inspired by the cocoa pod, and it has since become a symbol of the brand.
  Diamond-shaped bottle (1915-1928): This bottle design featured a diamond shape with a distinctive embossed pattern. It was made of clear glass and was used primarily for export.
  Swirl bottle (1957-1961): This bottle had a unique shape with a swirling pattern that gave it a distinctive look. It was only produced for a short time.
  King-size bottle (1955-1961): This bottle was larger than the standard Coca-Cola bottle and was designed to appeal to families and groups.
  Contour can (1960s-present): In addition to its iconic glass bottle, Coca-Cola also introduced the contour can in the 1960s. This design features the same curvy shape as the glass bottle and has become a staple of the brand.
  Aluminum bottle (2008-present): The aluminum bottle was introduced in 2008 as a more modern, eco-friendly alternative to the glass bottle. It features the contour shape and is fully recyclable.
  These are just a few of the many Coca-Cola bottle designs that have been produced since 1886, and the brand continues to innovate and create new designs to this day. </p>

  ### De eerste schetsen:
  <img src="../readme-images/schetsen1" width="375px" alt="eerste versie/schets1">
  <img src="../readme-images/schetsen2" width="375px" alt="eerste versie/schets2">
  <img src="../readme-images/schetsen3" width="375px" alt="eerste versie/schets3">

</details>

## Voortgang/Feedback 1

<details>
  <summary>Mijn bevindingen + wijzigingen (minimaal 5)</summary>

  ### Bevinding 1:

    "Je zou meer kunnen focussen op wat het onderscheid van andere frisdranken. Ik denk dat dat de oude reclames zijn die in vintage stijl zijn. Zo maak je het echt uniek."

  #### oplossing:

   After receiving the first feedback from my fellow classmates I decided to focus more on the aspect that distinguishes Coca Cola most from their competitors: their focus on family and the strong emotional connection with their customers. As watching TV together in the living room is a central meeting point for most families, I decided to focus more on the TV commercials Coca Cola has distribushed over the years starting in 1950. The idea was to show how the communication of the brand with their customers has changed over the years in correlation to the style and zeitgeist of the century. After some research it got clear that although they always tryed to portray a happy and positive picture, their style and way of communication has changed a lot over the years. 

  ### Bevinding 2:

  At the beginning I had a hard time on how to start the whole process with CSS and html. Although we had the training the two weeks before, I still was a bit overwhelmed on how to actually create something on a blank page. 

  #### oplossing:

  <img src="../readme-images/bevinding3" width="375px" alt="eerste versie/schets6">

  To overcome this feeling I started to disect my idea into doable sections. As a background could be easily designed on Illustrator or downloaded from the internet, the most important aspect would be the TV for now. So I looked at what a TV from 1950 actually looked like and also disected this one into different forms and objects that I could create with CSS and place over each other. Seen here was my first stage for the TV. Of course it doesnt look that nice yet, but it was a first milestone that I actually created something with CSS. 

  ### Bevinding 3:

  "Wat coca cola onderscheidt van bijvoorbeeld pepsi is een vintage thema"

  #### oplossing:

  <img src="../readme-images/versie1" width="375px" alt="eerste versie/schets5">

  To implement the vintage factor more into my concept, I decided to adjust the TV and background of the scenario for each year. Although this would mean much more work for me I thought it could give the whole concept more of a story and create a feeling of "going through time". Seen here is my first try on a TV from 1950 created with CSS. 

### Bevinding 4:

  <img src="../readme-images/bevinding4" width="375px" alt="eerste versie/schets7">
  <img src="../readme-images/bevinding4.1" width="375px" alt="eerste versie/schets8">


  When trying to give the TV a bit more of a realistic look by adding shadows and gradients, I also wanted to give the borders the same gradient as the background. I had used a source from the internet that told me to use border-image-source for the border-gradient, but it turned out into these weird dots around the corners. 

  #### oplossing:

  <img src="../readme-images/bevinding4.2" width="375px" alt="eerste versie/schets9">
  <img src="../readme-images/bevinding4.3" width="375px" alt="eerste versie/schets10">


  It turned out that because of my border radius the borders could not adapt the gradient by using border-image-source. So I decided to make the borders as small as possible, giving the impression that the whole background is filled with the gradient.
 
### Bevinding 5:

  Video is not clickable/ only plays once

  #### oplossing:

  <img src="../readme-images/java1" width="375px" alt="eerste versie/java">

  Due to some form of restriction from the government it is not allowed to play a video without the user actively asking for it. Thats why I had to add a command with JavaScript that will make it possible to start and stop the video with a click. 
   
</details>


<details>
  <summary>De eerste versie/schets van je ontwerp & je persoonlijke uitdaging</summary>

  ### De eerste versie:

  <img src="../readme-images/schetsen4" width="375px" alt="eerste versie/schets4">

  <img src="../readme-images/versie2" width="375px" alt="eerste versie/schets5">



  ### Je ambitie: 
  Aan deze technieken/punten wil ik werken:
  - Interacties met CSS en JavaScript (Clip laten spelen op click, Pop-up windows, sounds)
  - Vormgeving van objecten zoals de TV's
  - Animaties met CSS (dingen laten bewegen)
  - Verschillende Schermen creeren die door scrollen zichtbaar worden
 
</details>


## Voortgang/Feedback 2

<details>
  <summary>Mijn bevindingen + wijzigingen (minimaal 5)</summary>

  ### Bevinding 1:

 "De pagina is nog niet helemaal responsive en lay-out veranders heel erg als groote van scherm word verandert"

  #### oplossing:

  <img src="../readme-images/bevinding6" width="375px" alt="eerste versie/schets12">

  As I had put all my measurement for the objects and the positions of headers and the TV in "em", the website was not yeat responsive to a change in format. By changing all of the measurements into percentages, the layout stayed the same. Furthermore I fixated the part of the TV where the video was in, so that it would still be big enough to see something on it even when made smaller. 


    ### Bevinding 2:

  Switching from a basic menu bar showing each Year to a slidable timeline. 

  #### oplossing:

  <img src="../readme-images/bevinding5" width="375px" alt="eerste versie/schets11">

  While the original template showed the option of a menu bar that makes it possible to click through the timeline, I decided to create a sliding timeline to create more storyline within the concept. 
  By creating a Organised List with different List items it was possible to adapt each year independently. 
  In CSS I added the scrolling option and a scroll-snap, so the next slide would fall into place automatically. 

  ### Bevinding 3:

  Following to "Bevinding 2" I received the feedback that although I had implemented the List items well, in the CSS it was very unorganised due to the different names I gave the articles to seperate them. 

  #### oplossing:

  I got the tip to use nth-of-type, as I had a 8 different articles, sections, buttons ... to adapt. Like this I could delete unnessery wrappers and make the code more organised. 

  ### Bevinding 4:

  To make it even more organised and structured I also added Custom Properties for my background/border-colors, shadows or gradients.

  #### oplossing:

  <img src="../readme-images/custom" width="375px" alt="eerste versie/custom">

  Although this took quite a while to create for all the different aspects, at the end it created a better overview over the colours I was using more often and the shadows I could easily be repeating. Also it made it easier to find a certain aspect in the whole code. 

  ### Bevinding 5:

  <img src="../readme-images/button" width="375px" alt="eerste versie/button">
  <img src="../readme-images/button2" width="375px" alt="eerste versie/button2">
  <img src="../readme-images/button4" width="375px" alt="eerste versie/button4">


  Another big milestone was the implementation of my first button created out of a image. At first I had difficulties connecting them two as there was always a part of the button displayed in the left upper corner of the screen. 

  #### oplossing:

  <img src="../readme-images/button3" width="375px" alt="eerste versie/button3">

  Luckily I finally realised (with some help) that the image needed to be depending on the button, not the other way around. By giving all the properties like size and position to the buttom and then adding the image at a 100% scale to these properties, the button and image could fully immerse. 

</details>




## Voortgang/Feedback 3

<details>
  <summary>Mijn bevindingen + wijzigingen (minimaal 5)</summary>
  
  ### Bevinding 1:
  For the final round of feedback I received, they mentioned that it would be nice to add more details into my design. For now it was pretty simple and also a bit repetitive. 

  #### oplossing:

   <img src="../readme-images/pointer.jpg" width="375px" alt="pointer">

  So I decided to add details like adding different cursors. When you hover over the TV it turns into a remote control and with the bottle it becomes a bottle opener. Like this it is also more clearer that these parts are interactive and you can click on it. Like this the User Experience is also improved. 


  ### Bevinding 2:

  As I have never worked with Code before, JavaScript was the hardest to understand of all of it. Especially when it came to working out the dialoge frames I first was pretty overwhelmed. 

  #### oplossing:
  
  <img src="../readme-images/dialoge.jpg" width="375px" alt="dialoge">
  <img src="../readme-images/dialoge2.jpg" width="375px" alt="dialoge2">


  Luckily all the excercices and explainations on dlo helped me understand the connection between html,css and javascript better. I was even able to add a sound to the clicking function that caused the opening of the dialoge frame. 

  ### Bevinding 3:
  
  <img src="../readme-images/audio" width="375px" alt="eerste versie/audio">

  As already mentioned I wanted to add audio to the effect of clicking on the bottle, as if you are really opening a bottle. On the internet it said this could be easily done through CSS. Unfortunately it turned out to not working. The sound was playing randomely and not on the count of clicking the bottle.

  #### oplossing:

  <img src="../readme-images/audio1.jpg" width="375px" alt="audio1">
  <img src="../readme-images/audio2.jpg" width="375px" alt="audio2">
  <img src="../readme-images/dialoge2.jpg" width="375px" alt="dialoge2">

  It took me quite a while to figure out that I could simply add the sound to the action on java script. By creating a extra class for the sound I could easily add it to the JavaScript code. The preload is used so that the sound will automatically be downloaded by the computer when opening the website, so there will be no delay in the playing of the sound. 

  ### Bevinding 4:

  During my last feedback I received the tip to let my code go through a check up to rule out any accidental mistakes or unnecessary items. 

  #### oplossing:

  <img src="../readme-images/div.jpg" width="375px" alt="div">
  <img src="../readme-images/div2.jpg" width="375px" alt="div2">

  Through this I found out that I still had some mistakes in my HTML, that were not standing in the way of the website working, but just weren't that pretty. For example I still used the term div2 in some articles, from when I didn't know that you could simply add a class to differentiate between different div's. 

  ### Bevinding 5:

  When I finally uploaded the whole on Github there were a couple of problems coming up. First of all of my background images didn't load and neither were the videos. 

  #### oplossing:

  It turned out that my code on where the system should take the picture from wasn't clear. By deleting the ../ before the source in the HTML and adding it instead in the CSS the images were visible again. Furthermore it got clear that when loading it onto Github you firstly needed a lot of patience as it took quite a while to upload. Also I needed to do it folder by folder, because otherwise the size would be too big. 

</details>




## Reflectie

<details>
  <summary>Mijn eindresultaat & persoonlijke ontwikkeling</summary>

  ### Je uitkomst - karakteristiek screenshot(s):

  <img src="../readme-images/final.jpg" width="375px" alt="final">
  <img src="../readme-images/final2.jpg" width="375px" alt="final2">
  <img src="../readme-images/final3.jpg" width="375px" alt="final3">
  <img src="../readme-images/final4.jpg" width="375px" alt="final4">
  <img src="../readme-images/final5.jpg" width="375px" alt="final5">
  <img src="../readme-images/final6.jpg" width="375px" alt="final6">
  <img src="../readme-images/final7.jpg" width="375px" alt="final7">
  <img src="../readme-images/final8.jpg" width="375px" alt="final8">
  <img src="../readme-images/final9.jpg" width="375px" alt="final9">
  <img src="../readme-images/final10.jpg" width="375px" alt="final10">


  ### Dit ging goed/Heb ik geleerd: 

During the course, I went from knowing nothing about coding to developing a genuine interest in it. Initially, it felt overwhelming and foreign, but as I progressed, I discovered a newfound passion.

The course started with the basics, gradually building my understanding. It helped that the learning environment was supportive, with fellow learners and instructors offering guidance. With practice and collaboration, I started to grasp coding concepts and solve problems.

As I saw tangible results, like building websites and creating programs, I felt a sense of accomplishment. It also sharpened my analytical skills, teaching me how to break down complex problems. Furthermore it really helped me to think out of the box. Instead of creating something with Adobe the way you want to, now you had to really disect a design into tangible parts. 

Looking back, this  course has been transformative. It has given me confidence, expanded my horizons, and opened up new opportunities. I now enjoy exploring different programming languages and frameworks, and I'm excited to continue this journey. 

  ### Dit was lastig/Is niet gelukt:

During the course, I noticed that I often relied too much on others for guidance instead of searching for solutions myself. While it's beneficial to seek help, I realized the importance of developing independent problem-solving skills.

Whenever I encountered challenges, I would immediately seek assistance from instructors or classmates. Although this provided quick answers, it hindered my understanding of key concepts.

Reflecting on this, I now understand the need to be more self-reliant. I will strive to explore resources like online tutorials before seeking help. By doing so, I can develop critical thinking skills and gain a deeper understanding of coding principles.

Moving forward, I am committed to finding a better balance between seeking guidance and solving problems independently. I believe this approach will make me a more confident and capable coder in the long run.


## Bronnenlijst

<details open>

1. https://thedieline.com/blog/2009/11/17/the-evolution-of-the-coca-cola-contour-bottle.html?
2. https://www.davison.com/blog/the-bottled-up-history-of-coca-cola/
3. https://www.insider.com/evolution-of-coke-coca-cola-history-2018-5#coca-cola-was-founded-in-1886-and-only-cost-five-cents-back-then-1
4. https://www.coca-colacompany.com/company
5. https://www.coca-colacompany.com/content/dam/journey/us/en/our-company/history/coca-cola-a-short-history-125-years-booklet.pdf
6. https://css-tricks.com/grainy-gradients/
7. https://smallbusiness.chron.com/add-image-css-file-51301.html
8. https://stackoverflow.com/questions/63967868/how-to-make-video-play-only-when-a-button-is-clicked-in-javascript
9. https://www.w3schools.com/html/html5_video.asp
10. https://www.w3schools.com/howto/howto_css_modals.asp
11. https://www.lambdatest.com/blog/html-dialog-element/
12. https://css-tricks.com/how-to-implement-and-style-the-dialog-element/
13. https://blog.hubspot.com/website/insert-image-in-html#:~:text=To%20insert%20an%20image%20in%20HTML%2C%20use%20the%20image%20tag,section%20of%20your%20HTML%20file.&text=The%20HTML%20image%20element%20is,not%20have%20a%20closing%20tag.
14. https://css-tricks.com/zooming-background-images/

</details>