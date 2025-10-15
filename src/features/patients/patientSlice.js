import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPatients = createAsyncThunk("patients/fetchPatients", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data.map(u => ({
    id: u.id,
    name: u.name,
    age: Math.floor(Math.random() * 50) + 20,
    phone: u.phone,
    email: u.email,
    address: `${u.address.suite}, ${u.address.street}, ${u.address.city}`,
  }));
});

const patientSlice = createSlice({
  name: "patients",
  initialState: {
    list: [],
    filtered: [],
    loading: false,
    error: null,
    selected: null,
  },
  reducers: {
    setSearch: (state, action) => {
      const query = action.payload.toLowerCase();
      state.filtered = state.list.filter(p => p.name.toLowerCase().includes(query));
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    addPatient: (state, action) => {
      state.list.unshift(action.payload);
      state.filtered = [...state.list];
    },
    removePatient: (state, action) => {
      state.list = state.list.filter(p => p.id !== action.payload);
      state.filtered = state.filtered.filter(p => p.id !== action.payload);
    },
    clearSelected: state => {
      state.selected = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPatients.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.filtered = action.payload;
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearch, setSelected, clearSelected, addPatient, removePatient } = patientSlice.actions;
export default patientSlice.reducer;
