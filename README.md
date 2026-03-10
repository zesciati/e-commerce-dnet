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

# File dan konten

- menu login: src\LoginPage.tsx
- menu customer: src\MenuCustomerPage.tsx
- menu transaksi pembelian paket oleh per masing-masing customer: src\CustomerPackagePurchase.tsx

# Tanggal Mulai dan Tanggal Selesai

- start: 8/03/2026

# URL FE dan Json Server

FE : http://localhost:5173
Json-server : http://localhost:3000

## CustomerPackagePurchasePage.tsx

```js

// Definisikan dulu bentuk datanya
interface User {
  id: number
  name: string
  phone: string
  email: string
}

// Lalu pakai sebagai tipe
const [users, setUsers] = useState<User[]>([])
//                                  ↑↑↑↑
//                         array berisi objek User
```

Dengan ini TypeScript bisa bantu mendeteksi data yang diizinkan dan tidak diizinkan yang dikirim oleh API

# How to call API

```ts
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/pembelianpaket";

// data ini bisa kita keluarkan ya atau kita Panggil otomatis menggunakan use effect untuk muncul di console.log
useEffect(() => {
  getAllData();
}, []); // [] menghentikan render terus menerus, agar terpanggil sekali saja

const getAllData = async () => {
  const response = await axios.get(API_URL);
  // console.log(response.data)
  setUsers(response.data);
};
```

# Displaying data

```ts
interface User {
  id: number;
  namaPaket: string;
  harga: string;
}
                               // TypeScript bisa bantu mendeteksi data yang diizinkan dan tidak diizinkan yang dikirim oleh API
const [users, setUsers] = useState<User[]>([]);

{
  users.map((user, index) => (
    <div
      key={user.id}
      className="grid grid-cols-12 px-6 py-4 border-b border-zinc-800/60 last:border-0 hover:bg-zinc-800/30 transition group"
    >
      <span
        style={{ fontFamily: "'DM Mono', monospace" }}
        className="col-span-1 text-sm text-zinc-600"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="col-span-5 text-sm text-zinc-100 font-medium">
        {user.namaPaket}
      </span>
      <span
        style={{ fontFamily: "'DM Mono', monospace" }}
        className="col-span-3 text-sm text-zinc-400"
      >
        Rp{user.harga}
      </span>
      <div className="col-span-3 flex justify-end gap-3">
        <button className="text-xs text-zinc-500 hover:text-zinc-100 transition">
          Edit
        </button>
        <button className="text-xs text-zinc-500 hover:text-red-400 transition">
          Hapus
        </button>
      </div>
    </div>
  ));
}
```

# Add data

```js

// hook to adding data
  const [namaPaket, setNamaPaket] = useState("");
  const [harga, setHarga] = useState("");

const addData = async (e: React.ChangeEvent<any>) => {
  e.preventDefault();
  if (!namaPaket || !harga) {
    return;
  }
                                                   //params
  const response = await axios.post(API_URL, { namaPaket, harga });
  setNamaPaket(""); // kosong kembali ketika sudah menambah data
  setHarga("");     // kosong kembali ketika sudah menambah data
  getAllData(); // menyinkronkan tampilan tabel dengan data terbaru di database
};

<form className="flex flex-col gap-3" onSubmit={addData}>
  <select
    name="cars"
    id="package"
    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition"
    value={namaPaket}
    onChange={(e) => setNamaPaket(e.target.value)}
  >
    <option value="" selected disabled className="hidden">
      Please select package
    </option>
    <option value="Paket Basic">Paket Basic</option>
    <option value="Paket Premium">Paket Premium</option>
    <option value="Paket VIP">Paket VIP</option>
  </select>
  <input
    type="number"
    placeholder="Harga"
    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition"
    value={harga}
    onChange={(e) => setHarga(e.target.value)}
  />
  <button
    type="submit"
    className="w-full bg-white hover:bg-zinc-100 text-zinc-950 font-medium text-sm py-3 rounded-xl transition mt-1"
  >
    Simpan
  </button>
</form>;
```

- value
- onChange
  
value tanpa onChange → input jadi FROZEN, tidak bisa diketik  dan React tidak tahu isinya
  
<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
 -->
