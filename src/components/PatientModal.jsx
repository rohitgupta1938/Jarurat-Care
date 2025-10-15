import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSelected } from "../features/patients/patientSlice";

export default function PatientModal() {
  const dispatch = useDispatch();
  const { selected } = useSelector(state => state.patients);

  if (!selected) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-2/3 lg:w-1/3 p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold">{selected.name}</h2>
            <p className="text-sm text-gray-500">ID: {selected.id}</p>
          </div>
          <button onClick={() => dispatch(clearSelected())} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
        <div className="mt-4 space-y-2 text-gray-700">
          <p><strong>Age:</strong> {selected.age}</p>
          <p><strong>Phone:</strong> {selected.phone}</p>
          <p><strong>Email:</strong> {selected.email}</p>
          <p><strong>Address:</strong> {selected.address}</p>
        </div>
        <div className="mt-5 flex justify-end">
          <button onClick={() => dispatch(clearSelected())} className="px-4 py-2 border rounded hover:bg-gray-100">Close</button>
        </div>
      </div>
    </div>
  );
}
