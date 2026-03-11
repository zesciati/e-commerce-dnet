import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  namaPaket: string;
  harga: string;
}

const CustomerPackagePurchasePage = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  // State untuk menampilkan data
  const [users, setUsers] = useState<User[]>([]);

  // State untuk form TAMBAH
  const [newNamaPaket, setNewNamaPaket] = useState("");
  const [newHarga, setNewHarga] = useState("");

  // State untuk form EDIT
  const [namaPaket, setNamaPaket] = useState("");
  const [harga, setHarga] = useState("");
  const [packageEdit, setPackageEdit] = useState<User | null>(null); 
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const response = await axios.get(API_URL);
    setUsers(response.data);
  };

  /* ------------------------------- Add Data ------------------------------ */
  const handleClickAddData = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNamaPaket || !newHarga) return; 

    setNewNamaPaket("");
    setNewHarga("");
    getAllData();
  };

  /* -------------------------------- Edit Data ------------------------------- */
  const editData = (user: User) => {
    setPackageEdit(user);
    setNamaPaket(user.namaPaket);
    setHarga(user.harga);
    setShowEditModal(true);
  };

  /* ------------------------------- Update Data ------------------------------ */
  const handleClickEditData = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!namaPaket || !harga || !packageEdit) return; 

    await axios.put(API_URL + "/" + packageEdit.id, { namaPaket, harga });
    setNamaPaket("");
    setHarga("");
    setPackageEdit(null);
    setShowEditModal(false);
    getAllData();
  };

  const deleteData = async (id: React.FormEvent) => {
    const response = await axios.delete(API_URL+"/"+id);
    getAllData();
  }

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
          <form className="flex flex-col gap-3" onSubmit={handleClickAddData}>
            <select
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-zinc-400 transition"
              value={newNamaPaket}
              onChange={(e) => setNewNamaPaket(e.target.value)}
            >
              <option value="" disabled className="hidden">
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
              value={newHarga}
              onChange={(e) => setNewHarga(e.target.value)}
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
                <button className="text-xs text-zinc-500 hover:text-red-400 transition" onClick={() => deleteData(user.id)}>
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Edit — Popup Overlay */}
      {showEditModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowEditModal(false)}
        >
          <div
            className="w-full max-w-md border border-zinc-700 rounded-2xl p-6 bg-zinc-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-5">
              Edit Paket
            </p>
            <form onSubmit={handleClickEditData}>
              <div className="flex flex-col gap-3">
                <select
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-zinc-400 transition"
                  value={namaPaket}
                  onChange={(e) => setNamaPaket(e.target.value)}
                >
                  <option value="" disabled className="hidden">
                    Please select package
                  </option>
                  <option value="Paket Basic">Paket Basic</option>
                  <option value="Paket Premium">Paket Premium</option>
                  <option value="Paket VIP">Paket VIP</option>
                </select>
                <input
                  type="number"
                  value={harga}
                  onChange={(e) => setHarga(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition"
                />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 rounded-xl text-sm text-zinc-400 hover:text-zinc-100 border border-zinc-700 hover:border-zinc-500 transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-sm bg-white hover:bg-zinc-100 text-zinc-950 font-medium transition"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerPackagePurchasePage;
