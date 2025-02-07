# FRONT_END_TUTORIALS_USING_HTML_CSS_JS_04

This project demonstrates how to create a simple currency converter application using JavaScript, fetching live exchange rates from a currency API. The goal is to avoid manually updating the exchange rates by utilizing an API that automatically provides the latest rates.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Setup Instructions](#setup-instructions)
3. [How It Works](#how-it-works)
4. [Code Explanation](#code-explanation)
5. [Acknowledgements](#acknowledgements)

## Prerequisites

Before getting started, make sure you have the following:
- A modern browser (Chrome, Firefox, etc.)
- An internet connection to fetch live data from the currency API.

## Setup Instructions

### 1. Get a Currency Exchange API Key
To fetch live exchange rates, you'll need an API key from a currency exchange provider. Here are a few options:
- [ExchangeRate-API](https://www.exchangerate-api.com/)
- [Fixer.io](https://fixer.io/)
- [CurrencyLayer](https://currencylayer.com/)

After registering, you will receive an API key that you will need for the project.

### 2. Create the Project Files
Create the following files in your project directory:
- `index.html`
- `style.css` (optional)
- `script.js`

### 3. Replace the API Key in the JavaScript
In the `script.js` file, replace the placeholder `YOUR_API_KEY` with the API key you received from your chosen provider.

---

## How It Works

This project uses JavaScript to dynamically fetch currency exchange rates from the API and convert the given amount from one currency to another. Here's a breakdown of how it works:

### 1. **HTML Layout:**
The HTML file provides a basic form with:
- An input for the amount to be converted.
- Two dropdowns to select the currencies (From and To).
- A button to trigger the conversion.

### 2. **Fetch API Data:**
The `fetch` function is used to retrieve live data from the currency API. The API provides the latest rates, which are then used for conversion calculations.

### 3. **Event Handling:**
When the user submits the form, the JavaScript listens for the submit event and:
- Fetches the conversion rates.
- Calculates the converted amount.
- Displays the result below the form.

---

## Code Explanation

### `index.html`
This file creates the basic structure of the webpage, including input fields for the amount to be converted, and dropdowns for the "From" and "To" currencies.

### `script.js`
The JavaScript file fetches live currency data from the API, populates the currency options, handles form submission, and performs the conversion calculation. It also manages error handling and displays the result.

---

## Acknowledgements

I would like to extend my sincere thanks to [Elzero Web School](https://elzero.org) for providing excellent resources and tutorials that significantly contributed to this project. Their dedication to teaching and the quality of their content have been invaluable in enhancing my web development skills.

---

### Final Thoughts:
This currency converter app uses live data to provide accurate and up-to-date conversion results. You can expand the app by adding features like error handling, a loading indicator, or even a history of past conversions. Happy coding!
