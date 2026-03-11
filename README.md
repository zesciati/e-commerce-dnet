# Techstack

- react
- typescript
- vite
- bun
- tailwind

# Reactstack

- React router dom: App.tsx digunakan untuk sehingga otomatis redirect
- useNavigate: LoginPage.tsx untuk button login ke menucustomer dengan url menucustomer

# Naming convention

- PascalCase

# Referensi

https://youtu.be/tQvKeYjH_j0

# File dan konten

- menu login: src\LoginPage.tsx
- menu customer: src\MenuCustomerPage.tsx
- menu transaksi pembelian paket oleh per masing-masing customer: src\CustomerPackagePurchase.tsx

# Tanggal Mulai dan Tanggal Selesai

- start: 8/03/2026 20:00
- end: 11/03/2026 22:09

# URL FE dan Json Server

FE : http://localhost:5173
Json-server : http://localhost:3000


# How to run

1. git clone the project
2. Open terminal (please make sure is on the root)
3. run `npm install`
4. on the same terminal run `npm run dev` for Frontend
5. in new terminal run `npm install -g json-server`
6. after step 5 run `json-server --watch db.json` for json server with data dummy to simulate Backend