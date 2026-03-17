# ShopBuggy — Tester Documentation

> **Version:** 1.0 · **Last Updated:** March 2026  
> A fictional e-commerce website built as a **manual testing playground**.  
> It is intentionally full of bugs. Your job is to find them.

---

## Table of Contents

1. [How to Access the Site](#1-how-to-access-the-site)
2. [Site Overview](#2-site-overview)
3. [Page Descriptions](#3-page-descriptions)
4. [Your Testing Tasks](#4-your-testing-tasks)
5. [Bug Report Template](#5-bug-report-template)
6. [Team Workflow — Working in Pairs](#6-team-workflow--working-in-pairs)
7. [⚠️ INSTRUCTOR ONLY: Full Bug Catalogue](#7-️-instructor-only-full-bug-catalogue)

---

## 1. How to Access the Site

### Option A — Open locally
Open any `.html` file directly in your browser (double-click or drag into browser).  
Start from `index.html`.

### Option B — Vercel (hosted)
Once deployed, you'll receive a URL like `https://shopbuggy.vercel.app`.  
Open it in your browser — no login or setup required.

> **Tip:** Test in multiple browsers (Chrome, Firefox, Edge) and also try resizing the window to a mobile width.

---

## 2. Site Overview

**ShopBuggy** is a fictional online shopping platform. It has five pages:

| Page | File | What it does |
|---|---|---|
| 🏠 Home | `index.html` | Hero section, feature cards, newsletter signup |
| 🛍️ Products | `products.html` | Product grid, search, filter, sort |
| 📬 Contact | `contact.html` | Contact form with multiple fields |
| 🔐 Login | `login.html` | Login and Register tabs |
| 👥 About | `about.html` | Team section, mission, company timeline |

**Navigation** is at the top of every page.  
**Footer** appears at the bottom of every page.

---

## 3. Page Descriptions

### 🏠 Home Page (`index.html`)
- Displays a hero banner with a call-to-action button
- Shows four feature cards (Lightning Delivery, Secure Payments, Easy Returns, Verified Reviews)
- Includes a statistics row (customers, products, satisfaction, delivery time)
- Has a newsletter subscription form at the bottom

### 🛍️ Products Page (`products.html`)
- Lists 12 products in a grid
- Toolbar includes: a text search box, a category filter dropdown, a "Sort by Price" button, and a Reset button
- Each product card shows: category, name, price, star rating, and an "Add to Cart" button
- Cart count appears in the top-right navigation

### 📬 Contact Page (`contact.html`)
- Left side: contact info (email, phone, address, hours)
- Right side: form with fields for Name, Phone, Email, Subject (dropdown), Message
- Message area shows a character counter
- Submitting shows a success message

### 🔐 Login Page (`login.html`)
- Two tabs: **Login** and **Register**
- Login: email + password + "Remember me" + "Forgot password?" link
- Register: first name, last name, email, password, confirm password, terms checkbox

### 👥 About Page (`about.html`)
- Mission statement text
- Team grid with 6 team member cards (name + role + avatar)
- Company timeline showing 4 milestones (2021–2024)

---

## 4. Your Testing Tasks

Work through each page systematically. For **every issue you find**, write a bug report (see Section 5).

### Suggested Checklist per Page

**Navigation (all pages)**
- [ ] Click every navigation link — do they all go to the right page?
- [ ] Try on a narrow browser window (mobile simulation) — does the menu still work?

**Home Page**
- [ ] Read all button labels carefully — is the text correct?
- [ ] Check all images — do they all load?
- [ ] Try subscribing to the newsletter with an empty field and with obviously wrong input
- [ ] Check the footer — does anything look outdated or wrong?

**Products Page**
- [ ] Search for a product — try uppercase, lowercase, with leading/trailing spaces
- [ ] Use the category filter — does it correctly filter results?
- [ ] Click "Sort by Price" — are products in the correct order? (e.g., $19.95 before $89.00)
- [ ] Inspect the price of each product
- [ ] Add several items to cart — watch the cart counter in the nav

**Contact Page**
- [ ] Submit the form completely empty
- [ ] Enter an obviously invalid email (e.g., `hello@`, `notanemail`, `@`)
- [ ] Enter letters in the Phone field
- [ ] Type a long message and watch the character counter
- [ ] Submit the form successfully once — then try to submit again
- [ ] Notice the placement of the success message

**Login Page**
- [ ] Register with two different passwords in "Password" and "Confirm Password" — does it warn you?
- [ ] Look closely at the password field while typing on the Register tab
- [ ] Try logging in with a completely wrong email/password pair
- [ ] Click "Forgot password?"
- [ ] If you see any error messages, inspect their styling carefully

**About Page**
- [ ] Read team member names carefully
- [ ] Check that every team member has a role displayed
- [ ] Read the timeline — does the order match what the heading promises?
- [ ] Click "Meet the Team" in the footer — where does it take you?

---

## 5. Bug Report Template

Copy this template for **each bug** you find. Give every bug a unique ID (e.g., `BUG-001`, `BUG-002`).

```
Bug ID:        BUG-###
Page:          [Home / Products / Contact / Login / About / All Pages]
Severity:      [Critical / High / Medium / Low]
Title:         [Short, descriptive title]

Steps to Reproduce:
  1. Navigate to [page]
  2. [Action]
  3. [Action]

Expected Result:
  [What should happen]

Actual Result:
  [What actually happens]

Screenshot / Notes:
  [Attach screenshot or describe visual evidence]

Found by:      [Your name]
Date:          [Date found]
```

### Severity Guide

| Level | Meaning | Examples |
|---|---|---|
| **Critical** | Feature completely broken; blocks users | 404 on a nav link, form cannot be submitted at all |
| **High** | Core feature works but produces wrong result | Sort order is wrong, wrong data displayed |
| **Medium** | Issue affects UX but has a workaround | Counter shows wrong number, text typo |
| **Low** | Minor cosmetic or content issue | Old copyright year, minor style glitch |

---

## 6. Team Workflow — Working in Pairs

You will work in teams of **two testers**. Follow this process:

### Phase 1 — Split the Work (15 min)
Divide the pages between you:

| Tester A | Tester B |
|---|---|
| Home, Products | Contact, Login, About |

Also divide responsibility for cross-cutting concerns:
- **Tester A:** Navigation links (across all pages), cart behaviour
- **Tester B:** Footer (across all pages), mobile/responsive behaviour

### Phase 2 — Independent Testing (30–45 min)
Each tester works through their assigned pages using the checklist in Section 4.  
Write a bug report for every issue found.  
**Do not share findings yet** — independent testing catches more bugs.

### Phase 3 — Cross-Check (10 min)
Swap pages. Each tester briefly reviews the other's assigned pages.  
Add any newly found bugs to the shared list.

### Phase 4 — Merge and Deduplicate (10 min)
Combine both bug lists. Remove duplicates (if both found the same bug, keep one report and note both names in the "Found by" field).

### Phase 5 — Team Report (as per instructor deadline)
Submit a single shared document containing:
- All bug reports in the template format
- A **summary table** (Bug ID, Page, Severity, Title, Found by)
- A brief paragraph on: which area had the most bugs? what were the most surprising finds?

---

## 7. ⚠️ INSTRUCTOR ONLY: Full Bug Catalogue

> **🔒 Do not share this section with students before testing is complete.**

Below is the complete list of planted bugs for instructor reference.

| Bug # | Page | Severity | Location | Description |
|---|---|---|---|---|
| BUG-001 | All Pages (Nav) | Critical | `<a href="product.html">` | Nav "Products" link points to `product.html` — missing `s`, causes 404 |
| BUG-002 | Home | Low | Hero CTA button | Button text reads "Shope Now" instead of "Shop Now" |
| BUG-003 | Home | High | Newsletter form | Submitting an empty or invalid email shows "Success!" — no validation |
| BUG-004 | Home | Medium | Feature card image | First feature card `<img>` has a non-existent `src` path → broken image |
| BUG-005 | All Pages (Footer) | Low | Footer copyright | Year is hardcoded as `2019` instead of the current year |
| BUG-006 | Products | High | Category filter | JS reads `document.getElementById('catFilter')` but HTML element has `id="categoryFilter"` — filter does nothing |
| BUG-007 | Products | High | Sort by Price | `sortByPrice()` uses `localeCompare()` on the price string — sorts alphabetically, not numerically |
| BUG-008 | Products | Medium | Cart counter | `addToCart()` does `cartCount += 2` — counter increments by 2 per click |
| BUG-009 | Products | High | Product card | One product has `price: undefined` → displayed as `$NaN` |
| BUG-010 | Products | Medium | Search box | `filterProducts()` does not call `.toLowerCase()` or `.trim()` — case-sensitive, space-sensitive |
| BUG-011 | Contact | High | Email validation | `isValidEmail()` only checks for `@` → `abc@` is accepted as valid |
| BUG-012 | Contact | High | Submit button | Button is permanently disabled after first submission — cannot re-send |
| BUG-013 | Contact | Medium | Character counter | Counter starts at `0` and goes negative as user types (`0 - typed`) |
| BUG-014 | Contact | Low | Phone field | Input type is `text` — accepts letters and symbols without warning |
| BUG-015 | Contact | Medium | Success message | `.contact-success` is `position:absolute` — overlaps the form instead of replacing it |
| BUG-016 | Login | Critical | Register form | Password field has `type="text"` — password is visible in plain text |
| BUG-017 | Login | Critical | Register form | Confirm-password check logic is inverted — mismatched passwords always pass |
| BUG-018 | Login | Critical | Login form | `doLogin()` shows success for any email/password combination |
| BUG-019 | Login | High | Error messages | `.alert-danger` CSS sets `color: #fee2e2` (same as background) — error text is invisible |
| BUG-020 | Login | High | Forgot password | `forgotPassword()` reveals a hardcoded internal email in an `alert()` |
| BUG-021 | About | Medium | Team section | Two team members have identical names: "John Smith" |
| BUG-022 | About | Medium | Timeline | Events listed newest → oldest (reverse), but heading says "from the very beginning" |
| BUG-023 | About | Low | Footer anchor | "Meet the Team" anchor links to `#meet-team` but visible section has `id="the-team"` |
| BUG-024 | About | Low | Team card | Maria Garcia's role `<div>` is empty — no role is displayed |
| BUG-025 | All Pages | High | Mobile nav | Hamburger button has `display: none` in CSS for ≤768px — nav is inaccessible on mobile |
| BUG-026 | All Pages | Medium | Accessibility | `outline: none` is set globally in CSS — keyboard focus is invisible on all interactive elements |

---

### Notes for Instructors

- **Expected find rate:** A well-prepared pair of testers should find 18–22 of the 26 bugs in a 90-minute session.
- **Harder bugs:** #006, #007, #017, #019, #026 are the most likely to be missed by beginners.
- **Quick wins:** #001, #002, #005, #016, #021 are usually found within the first 10 minutes.
- **Severity discussion:** Bug #019 is a good teaching moment — the CSS bug makes the error message invisible, which means Bug #018 is even more dangerous (no feedback at all on a failed login attempt).
