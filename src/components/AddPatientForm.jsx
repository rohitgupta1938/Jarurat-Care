import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPatient } from "../features/patients/patientSlice";

export default function AddPatientForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", age: "", phone: "", email: "", address: "" });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name) return alert("Name required!");
    const id = Date.now();
    dispatch(addPatient({ id, ...form, age: form.age || Math.floor(Math.random() * 50) + 20 }));
    setForm({ name: "", age: "", phone: "", email: "", address: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input className="border rounded px-3 py-2" placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input className="border rounded px-3 py-2" placeholder="Age" type="number" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} />
      <input className="border rounded px-3 py-2" placeholder="Phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
      <input className="border rounded px-3 py-2" placeholder="Email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      <input className="border rounded px-3 py-2 sm:col-span-2" placeholder="Address" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
      <button type="submit" className="sm:col-span-2 bg-green-600 text-white py-2 rounded hover:bg-green-700">Add Patient</button>
    </form>
  );
}
