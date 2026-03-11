// import {useEffect} from "react";
// import "./App.css";
// import {
//   Container,
//   Paper,
//   Avatar,
//   Typography,
//   Box,
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   Button,
// } from "@mui/material";

// import { useState } from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";

const CustomerPackagePurchasePage = () => {
  const dummyData = [
    { id: 1, namaPaket: "Paket Basic", harga: "Rp 50.000" },
    { id: 2, namaPaket: "Paket Premium", harga: "Rp 150.000" },
    { id: 3, namaPaket: "Paket VIP", harga: "Rp 300.000" },
  ];

  const API_URL = "http://localhost:3000/pembelianpaket";

  /* ------------------------------ Display data ------------------------------ */
  interface User {
    id: number;
    namaPaket: string;
    harga: string;
  }

  // hook to displaying data
  const [users, setUsers] = useState<User[]>([]);
  // hook to adding data
  const [namaPaket, setNamaPaket] = useState("");
  const [harga, setHarga] = useState("");
  const [packageEdit, setPackageEdit] = useState("");

  /* ------------------------------------ How to Call API ----------------------------------- */

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const response = await axios.get(API_URL);
    // console.log(response.data)
    setUsers(response.data);
  };

  /* ------------------------------- Add Data ------------------------------ */
  const addData = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (!namaPaket || !harga) {
      return;
    }

    const response = await axios.post(API_URL, { namaPaket, harga });
    setNamaPaket("");
    setHarga("");
    getAllData();
  };

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

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-12"
    >
      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');`}</style>

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-1">
            Manajemen
          </p>
          <h1 className="text-3xl font-semibold text-white">Paket</h1>
        </div>

        {/* Form Tambah */}
        <div className="border border-zinc-800 rounded-2xl p-6 mb-6 bg-zinc-900/50">
          <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-5">
            Tambah Baru
          </p>
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
          </form>
        </div>

        {/* Tabel Data */}
        <div className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/50">
          {/* Table Header */}
          <div className="grid grid-cols-12 px-6 py-3 border-b border-zinc-800">
            <span className="col-span-1 text-xs tracking-[0.2em] uppercase text-zinc-600">
              No
            </span>
            <span className="col-span-5 text-xs tracking-[0.2em] uppercase text-zinc-600">
              Nama Paket
            </span>
            <span className="col-span-3 text-xs tracking-[0.2em] uppercase text-zinc-600">
              Harga
            </span>
            <span className="col-span-3 text-xs tracking-[0.2em] uppercase text-zinc-600 text-right">
              Aksi
            </span>
          </div>

          {/* Table Rows */}
          {users.map((user, index) => (
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
          ))}
        </div>

        {/* Modal Edit — preview */}
        <div className="mt-10">
          <p className="text-xs tracking-[0.2em] uppercase text-zinc-600 mb-4">
            Preview Modal Edit
          </p>
          <div className="border border-zinc-700 rounded-2xl p-6 bg-zinc-900">
            <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-5">
              Edit Paket
            </p>
            <div className="flex flex-col gap-3">
              {/* <input
                type="text"
                defaultValue="Paket Basic"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-zinc-400 transition"
              /> */}
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
                defaultValue="50000"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition"
              />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button className="px-4 py-2 rounded-xl text-sm text-zinc-400 hover:text-zinc-100 border border-zinc-700 hover:border-zinc-500 transition">
                Batal
              </button>
              <button className="px-4 py-2 rounded-xl text-sm bg-white hover:bg-zinc-100 text-zinc-950 font-medium transition">
                Simpan
              </button>
            </div>
          </div>
        </div>

        {/* Modal Delete — preview */}
        <div className="mt-4">
          <p className="text-xs tracking-[0.2em] uppercase text-zinc-600 mb-4">
            Preview Modal Hapus
          </p>
          <div className="border border-zinc-700 rounded-2xl p-6 bg-zinc-900">
            <p className="text-sm font-medium text-zinc-100 mb-1">
              Hapus paket ini?
            </p>
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
        </div>
      </div>
    </div>
  );
};

export default CustomerPackagePurchasePage;
