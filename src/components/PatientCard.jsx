import React from "react";
import { useDispatch } from "react-redux";
import { setSelected, removePatient } from "../features/patients/patientSlice";

export default function PatientCard({ patient }) {
  const dispatch = useDispatch();

  return (
    <article className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600">
              {patient.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-semibold">{patient.name}</h4>
              <p className="text-sm text-gray-500">Age: {patient.age}</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">#{patient.id}</p>
        </div>
        <p className="mt-3 text-gray-600 text-sm">📞 {patient.phone}</p>
        <p className="text-xs text-gray-400">{patient.email}</p>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => dispatch(setSelected(patient))}
          className="px-3 py-1 rounded bg-indigo-600 text-white text-sm hover:bg-indigo-700"
        >
          View Details
        </button>
        <button
          onClick={() => dispatch(removePatient(patient.id))}
          className="px-3 py-1 rounded border text-sm text-red-600 hover:bg-red-50"
        >
          Remove
        </button>
      </div>
    </article>
  );
}
