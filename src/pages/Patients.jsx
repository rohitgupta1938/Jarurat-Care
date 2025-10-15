// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPatients, setSearch } from "../features/patients/patientSlice";
// import PatientCard from "../components/PatientCard";
// import AddPatientForm from "../components/AddPatientForm";
// import PatientModal from "../components/PatientModal";

// export default function Patients() {
//   const dispatch = useDispatch();
//   const { filtered, loading, error } = useSelector(state => state.patients);
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     dispatch(fetchPatients());
//   }, [dispatch]);

//   return (
//     <section id="patients" className="mb-5">
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
//         <h3 className="text-xl font-semibold">Patients</h3>
//         <div className="flex gap-3 w-full sm:w-auto">
//           <input
//             onChange={e => dispatch(setSearch(e.target.value))}
//             placeholder="Search patients by name..."
//             className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
//           />
//           <button
//             onClick={() => setShowForm(!showForm)}
//             className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700"
//           >
//             {showForm ? "Close" : "Add New"}
//           </button>
//         </div>
//       </div>

//       {showForm && <AddPatientForm />}

//       {loading && <div className="bg-white p-6 rounded-lg shadow text-gray-600">Loading patients...</div>}
//       {error && <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-red-700">Error: {error}</div>}

//       <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filtered.map(p => <PatientCard key={p.id} patient={p} />)}
//       </div>

//       <PatientModal />
//     </section>
//   );
// }


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients, setSearch } from "../features/patients/patientSlice";
import PatientCard from "../components/PatientCard";
import AddPatientForm from "../components/AddPatientForm";
import PatientModal from "../components/PatientModal";
import { motion, AnimatePresence } from "framer-motion";

// Skeleton loader for smooth loading UI
function PatientSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow p-4 animate-pulse">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
    </div>
  );
}

export default function Patients() {
  const dispatch = useDispatch();
  const { filtered, loading, error } = useSelector(state => state.patients);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  return (
    <section id="patients" className="mb-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <h3 className="text-xl font-semibold">Patients</h3>
        <div className="flex gap-3 w-full sm:w-auto">
          <input
            onChange={e => dispatch(setSearch(e.target.value))}
            placeholder="Search patients by name..."
            className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition"
          >
            {showForm ? "Close" : "Add New"}
          </button>
        </div>
      </div>

      {showForm && <AddPatientForm />}

      {/* Loading skeletons */}
      {loading && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <PatientSkeleton key={i} />
          ))}
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-red-700">
          Error: {error}
        </div>
      )}

      {/* Patient Cards with animation */}
      <AnimatePresence>
        {!loading && filtered.length > 0 && (
          <motion.div
            className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filtered.map(p => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <PatientCard patient={p} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <PatientModal />
    </section>
  );
}
