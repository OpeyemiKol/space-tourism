# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Links

- Solution URL: [GitHub Repo](https://github.com/OpeyemiKol/space-tourism.git)
- Live Site URL: [Live Demo](https://horpsy-space-tourism.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Router](https://reactrouter.com/) - Client-side routing

### What I learned

While building this project, I learned how to:

- Manage **responsive layouts** across mobile, tablet, and desktop using Tailwind utilities.
- Properly set up and apply **Google Fonts** (`Barlow Condensed` and `Bellefair`) across components.
- Use **React Router** to manage multiple pages and navigation states.
- Apply **TypeScript** in a React + Vite setup for better type safety.

```tsx
// Example snippet using React.FC with TypeScript
const Homepage: React.FC = () => {
  return (
    <main className="text-center text-white">
      <h1 className="font-bellefair text-5xl">Space</h1>
    </main>
  );
};
```

### Continued development

In future projects, I want to focus more on:
-Deeper TypeScript usage for stricter type safety.
-State management with tools like Zustand or Redux.
-Improving accessibility with ARIA roles and semantic tags.
-Adding smooth animations (Framer Motion, Tailwind transitions).

### Useful resources

Tailwind CSS Docs

- My main reference for styling and responsive design.
  React Router Docs
- Helped me with navigation and nested routes.
  TypeScript Handbook
- Essential for setting up and using TypeScript properly.

## Author

Frontend Mentor - @HorpsyK
GitHub - OpeyemiKol

## Acknowledgments

Special thanks to Setemi Ojo, my instructor, for guidance and support throughout this project.
