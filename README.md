# SafarByAriba Website

Official website for **SafarByAriba**, a travel and visa consulting service that helps clients with travel planning, visa preparation, and international mobility services.

The website is a lightweight **static site** built with **HTML, CSS, and JavaScript** and deployed on **Netlify**, using **Netlify Forms** for handling consultation requests.

---

## Features

* Modern responsive landing page
* English / Arabic language switching
* Travel & visa service presentation
* Consultation request form
* Netlify form handling (no backend server required)
* Mobile-friendly design

---

## Tech Stack

Frontend:

* HTML5
* CSS3
* Vanilla JavaScript

Hosting & Forms:

* Netlify
* Netlify Forms

---

## Project Structure

```
/safarbyariba-website
│
├── index.html
├── style.css
├── script.js
│
├── /assets
│   ├── images
│   ├── icons
│   └── logo
│
└── /translations
    └── languages.js
```

---

## How Netlify Forms Work

The contact/consultation form uses **Netlify’s built-in form handling**, which captures submissions without needing a backend server.

Example form setup in `index.html`:

```html
<form name="consultation" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="consultation">

  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <textarea name="message" placeholder="Your Message"></textarea>

  <button type="submit">Submit</button>
</form>
```

All submissions will appear in the **Forms section** of your Netlify dashboard.

---

## Local Development

You can open the project directly:

```
index.html
```

Or run it with a local server like **VS Code Live Server**.

---

## Deployment

1. Push the project to GitHub
2. Connect the repository to Netlify
3. Netlify will automatically deploy the website

Every push to the repository will trigger a new deployment.

---

## Language Switching

The website supports:

* English
* Arabic

Language switching is handled using a simple JavaScript translation object.

Example:

```javascript
const translations = {
  en: {
    title: "Travel Consulting",
  },
  ar: {
    title: "استشارات السفر",
  }
};
```


## License

This project is maintained for **SafarByAriba**.
