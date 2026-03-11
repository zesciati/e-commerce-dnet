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

// Tujuan useEffect di sini KHUSUS untuk:
// "panggil getAllData() sekali saat komponen pertama muncul"
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
  setHarga(""); // kosong kembali ketika sudah menambah data
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

value tanpa onChange → input jadi FROZEN, tidak bisa diketik dan React tidak tahu isinya

# Edit data + Update data

```js
const [packageEdit, setPackageEdit] = useState("");

/* -------------------------------- edit data ------------------------------- */
const editData = (data: React.ChangeEvent<any>) => {
  setPackageEdit(data);
  setNamaPaket(data.namaPaket);
  setHarga(data.harga);
};

/* ------------------------------- update data ------------------------------ */

const updateData = async (e: React.ChangeEvent<any>) => {
  e.preventDefault();
  if (!namaPaket || !harga) {
    return;
  }

  const response = await axios.put(API_URL + "/" + packageEdit.id, {
    namaPaket,
    harga,
  });
  setNamaPaket("");
  setHarga("");
  getAllData();
};

// handleClick
const handleClick = async (e: React.ChangeEvent<any>) => {
  // pengecekan apakah tambah data || edit data
  e.preventDefault();
  if (packageEdit) {
    await updateData(e);
  } else {
    await addData(e);
  }
};

//onSubmit={handleClick}
<form className="flex flex-col gap-3" onSubmit={handleClick}>
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

// onClick={() => editData(user)}
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
        <button
          className="text-xs text-zinc-500 hover:text-zinc-100 transition"
          onClick={() => editData(user)}
        >
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

tampilan deleting data

```tsx
{
  /* Modal Delete — preview */
}
<div className="mt-4">
  {/* <p className="text-xs tracking-[0.2em] uppercase text-zinc-600 mb-4">
            Preview Modal Hapus
          </p> */}
  <div className="border border-zinc-700 rounded-2xl p-6 bg-zinc-900">
    <p className="text-sm font-medium text-zinc-100 mb-1">Hapus paket ini?</p>
    <p className="text-xs text-zinc-500 mb-5">
      Tindakan ini tidak bisa dibatalkan.
    </p>
    <div className="flex justify-end gap-2">
      <button className="px-4 py-2 rounded-xl text-sm text-zinc-400 hover:text-zinc-100 border border-zinc-700 hover:border-zinc-500 transition">
        Batal
      </button>
      <button className="px-4 py-2 rounded-xl text-sm bg-red-500 hover:bg-red-600 text-white font-medium transition">
        Hapus
      </button>
    </div>
  </div>
</div>;
```

# Tak terpakai tapi jaga jaga

```js
{
  /* <input
                type="text"
                defaultValue="Paket Basic"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-zinc-400 transition"
              /> */
}
```

ada 2 onsubmit jadi gagal
