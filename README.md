# Bonus Shop Demo (Cosmoswin & Betfinal)

This is a test project demonstrating a **Bonus Shop** and **Deposit Feature** for two brands: **Cosmoswin** and **Betfinal**. Users can log in, make deposits, and view bonuses. Bonus availability depends on user balance and deposit count.

## Technologies

- **Next.js (App Router)**
- **TypeScript**
- **Material UI**
- **i18next** — EN / AR support
- **Context API** — for user state
- **Mock Data** — users and bonuses
- **localStorage / cookies** — state persistence

---

## Getting Started

```bash
pnpm install
pnpm dev
```

This will start both brand apps:

- Cosmoswin: http://localhost:3001
- Betfinal: http://localhost:3000

---

## Login

On the login page, use any valid mock username from `shared/data/users.ts`, e.g.:
```
cosmos_user
betfinal_user
```

---

## Deposit

- Accessible after login
- URL: `/{lang}/deposit`
- On successful deposit:
  - `currentBalance` is increased
  - `depositCount` is incremented
  - bonuses are re-evaluated

---

## Bonus Shop

- Bonus list is brand-specific: `shared/data/bonuses.ts`
- Bonuses may require a minimum balance or number of deposits
- If not eligible, a clear reason is shown (e.g. "Not enough deposits")

---

## Localization

- Supported languages: `EN`, `AR`
- Language is read from URL (`/en`, `/ar`) and cookie
- Text direction (`dir`) switches automatically between `ltr` and `rtl`

---

## Features

- **Brand-based design**
  - Betfinal: black & gold, square buttons
  - Cosmoswin: gradient styles, rounded corners
- **Full RTL support**
- **Brand-styled login pages**
- **Validated deposit form with dynamic feedback**

---

## Project Structure

```
apps/
  cosmoswin/
  betfinal/
packages/
  shared/
    contexts/
    data/
    types/
    utils/
  ui/
    src/
      components/
```

---

## Limitations

- No real backend — mock data only
- Deposits stored in `localStorage`
- No real authentication or database


---

## Author

- Serhii Bryk
