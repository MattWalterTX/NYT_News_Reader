# README

<div align="center">

  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Issues][issues-shield]][issues-url]
  [![Cypress Tests][test-shield]][test-url]

<img src="src/assets/app-gif.gif" height="425" />

### ^^^   BADGES ARE STILL FROM APRES SKI!!!   ^^^

[NYT News Reader App](https://nyt-news-reader.vercel.app/)

  </h2>

  <h3 align="center">
    <a href="https://github.com/MattWalterTX/NYT_News_Reader/issues">Report Bug</a>
    ·
    <a href="https://github.com/MattWalterTX/NYT_News_Reader/issues">Request Feature</a>
  </h3>
</div>
<br>

Want to catch up on current event? How about sorting them out by categories? 

**You should try out my [NYT News Reader](https://nyt-news-reader.vercel.app/) application!**

This app will aggregate a list of articles pulled form the New York Times Top Stories API. Click on a card to view more details and a link to the article. If you are not finding what you are looking for, try using the dropdown menu to filter the categories for a new list.
<br>

---
<h2>Table of Contents</h2>

> :skier: [Getting Started](#getting-started)
> <br>
> :skier: [Wireframe](#wireframe)
> <br>
> :skier: [Project Overview](#project-overview)
> <br>
> :skier: [Collaborators](#collaborators)
> <br>
> :skier: [Contributing](#contributing)
> <br>
> :skier: [Acknowledgments](#acknowledgments)
> <br>


<!-- GETTING STARTED -->

## Getting Started

### Web Usage

This is a React web application designed for use with our [backend](https://github.com/Apres-Ski/Apres_Ski_BE) team's Django REST API. To get started in the application, follow [this link](https://apres-ski-fe.vercel.app/) and select one of our test-users. Once you selected a user you will be able to:

* Browse a list of restaurants near you based on:
  * Vibe
  * Proximity to the user

* Select "Filter" to narrow down the list of restaurants based on:
  * Vibe
  * Alcohol
  * Happy Hour

* Select "Show Details" on a restaurant to see further information such as:
  * Address
  * Food Type
  * Alcohol
  * Cost
  * Hours
  * Happy Hour

* Select a restaurant marker on the map to automatically scroll to that restaurant


<br>

### Local Installation

This Front-End application was made with the following:

* Bootstrap 5.3.0
* Cypress 12.5.1
* Mapbox-gl 2.12.1
* React 18.2.0
* Redux 8.0.5
* Redux-toolkit 1.9.2
* TypeScript 4.9.5
* Vite 4.1.0


To install and run on your personal computer you will need to do the following:

1. Fork and clone the repo to your local machine.
2. CD into repo and open in your code editor.
3. Install packages.
    ```zsh
    npm i
    ```
4. Start the application.
    ```zsh
    npm run dev
    ```
5. Navigate to <http://127.0.0.1:5173/>

<br />

<!-- Wireframe -->

## Wireframe

[Notion Wireframe](https://triciaholmes.notion.site/Apr-s-Ski-Design-Wiki-5b7323435534441a9b2610182191dc28)

<p align="center">
<img src="https://triciaholmes.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F244c3760-874e-48eb-b32d-9d70037f96d1%2FApres_Ski_-_Wireframe.png?id=96985bd4-e832-41f8-a6e0-a02c449c17ec&table=block&spaceId=caa1b8cb-26d9-43a1-8671-ef7fa062e392&width=2000&userId=&cache=v2" height="1000"/> </p>


<br>

<!-- PROJECT OVERVIEW -->

## Project Overview

### Learning Goals
The Front-End Team's learning goals were:

- Gain exposure and experience to ***Redux***, ***Mapbox-gl***, and ***Bootstrap***.
- Implement Agile work process throughout development.
- Leverage ***Redux*** for global state management and use ***Redux-toolkit*** to apply best practices.
- Use ***Bootstrap*** to design a mobile-first & responsive application.
- Practice professional git workflow and pull request reviews.
- Implement continuous integrations.
- Further hone communicational skills with a Back-End Team by doing daily stand-ups and slack networking.
<br>

### Planning

The first four days of our project was dedicated to planning. In this time our Front-End and Back-End Teams were assigned to a student created project pitch and began work:

* Day 1: Teams discussed any human factors and personnel limitations over the duration of the project, started work on a Minimal Viable Product Document, and created all infrastructure (GitHub: Organization, Repositories, Teams, & Projectboard).
* Day 2: Teams discussed any capabilities and limitations in their selected tech-stack and finalized selection of what data would be collected, stored, and consumed.
* Day 3: Teams completed the Minimal Viable Product Document
* Day 4: Front-End Team created a design wireframe to relay our plan to the Back-End Team and help finalize the required data structure based on our design needs.

<br>

### Tech Stack

Après-Ski's Front-End is a web application, built with ***React*** & ***Redux-toolkit***, and hosted on ***Vercel***.

<br>
<div align='center'>
  <img src="src/assets/FE-tech-stack.png" alt="tech_stack" width="50%">
</div>

<br>

### Minimum Viable Product (MVP) and Extensions Roadmap

***MVP***

The Front-End Teams's MVP goals were to design a web application that allows the user to:
* Browse a list of restaurants near them.
* Filter the list based on vibes, alcohol, and happy hour.
* View additional details for each restaurant
* See a map view with restaurant markers

All MVP goals were met. 

***Extensions***

Future features we wish to implement for our application:

* Rate and review restaurants
* Photo galleries for restaurants
* View route to restaurant on map

<br>

<!-- COLLABORATORS -->

## Collaborators

<div align='left'>
<table style='border: none'>
<tr>
<th>Matt Walter</th>
<th></th>
</tr>
<tr>
<td>
  <img width="150px" style='border-radius: 6px 12px 18px 24px;' src="https://media.licdn.com/dms/image/C4E03AQEOr4kuJZACXg/profile-displayphoto-shrink_200_200/0/1658863260778?e=1681948800&v=beta&t=4A0ua2RrNI_346nm6xRxbFd_0C05ybSmcScgjGTMDoE">

[![GitHub: MattWalterTX][matt-github-follow-badge]][matt-GitHub] <br>
[![LinkedIn: matt-walter-67b810246][linkedin-badge]][matt-LinkedIn]

</td>
<td>
<p>
Add reflection here at conclusion of project
</p>
</td>
</tr>
</table>
</div>

<div align='left'>
<table style='border: none'>
<tr>
</table>
</div>

<div align='left'>
<table style='border: none'>
<tr>

</table>
</div>


<!-- CONTRIBUTING -->

## Contributing

Do you have a better & cooler way of doing what we did? Your contribution would be **greatly appreciated**.

Please fork the repo, create your branch, and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Thanks again!

This project was the capstone for our team at:
* [Turing School of Software Design](https://turing.edu/)

<p align="right">(<a href="#README">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->

<!-- Test Shield -->

[test-shield]: https://github.com/Apres-Ski/Apres-Ski-FE/actions/workflows/main.yml/badge.svg
[test-url]: https://github.com/Apres-Ski/Apres-Ski-FE/actions/workflows/main.yml

<!-- Contributors Shield -->

[contributors-shield]: https://img.shields.io/github/contributors/Apres-Ski/Apres-Ski-FE.svg
[contributors-url]: https://github.com/Apres-Ski/Apres-Ski-FE/graphs/contributors

<!-- Forks Shield -->

[forks-shield]: https://img.shields.io/github/forks/Apres-Ski/Apres-Ski-FE.svg
[forks-url]: https://github.com/othneildrew/Apres-Ski/Apres-Ski-FE/network/members

<!-- Issues Shield -->

[issues-shield]: https://img.shields.io/github/issues/Apres-Ski/Apres-Ski-FE.svg
[issues-url]: https://github.com/Apres-Ski/Apres-Ski-FE/issues

<!-- LinkedIn Badges -->

[linkedin-badge]: https://img.shields.io/badge/LinkedIn-%23?style=flat&logo=Linkedin&logoColor=black&color=0A66C2

[matt-LinkedIn]: https://www.linkedin.com/in/matt-walter-67b810246/
[ryan-LinkedIn]: https://www.linkedin.com/in/ryan-nagel-000280173/
[tricia-LinkedIn]: https://www.linkedin.com/in/triciaholmes/

<!-- GitHub Badges -->

[matt-github-follow-badge]: https://img.shields.io/github/followers/MattWalterTX?label=GitHub&style=social
[matt-GitHub]: https://github.com/MattWalterTX
