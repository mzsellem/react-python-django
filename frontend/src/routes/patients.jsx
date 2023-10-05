import Navbar from "../components/navbar";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ICD10Search from "../components/icd";

export default function Patients() {
   const columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "firstName", headerName: "First name", width: 130 },
      { field: "lastName", headerName: "Last name", width: 130 },
      {
         field: "age",
         headerName: "Age",
         type: "number",
         width: 90,
      },
      {
         field: "diagnosis",
         headerName: "Diagnosis",
         description: "This column has a value getter and is not sortable.",
         sortable: false,
         width: 160,
         valueGetter: (params) =>
            `${params.row.firstName || ""} ${params.row.lastName || ""}`,
      },
   ];

   const rows = [
      { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
      { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
      { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
      { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
      { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
      { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
      { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
      { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
      { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
   ];

   return (
      <>
         <Navbar />
         <div className="flex flex-row w-full justify-between p-6">
            <div className="flex flex-col w-1/2">
               <div className="flex">
                  <div className="flex text-3xl mb-4">Patients</div>
                  &nbsp; &nbsp;
                  <button className="flex m-2">+</button>
               </div>
               <div className="flex flex-row height width">
                  <DataGrid
                     rows={rows}
                     columns={columns}
                     initialState={{
                        pagination: {
                           paginationModel: { page: 0, pageSize: 5 },
                        },
                     }}
                     pageSizeOptions={[5, 10]}
                     checkboxSelection
                  />
               </div>
            </div>
            <div className="flex text-3xl border w-1/2 justify-start">
               <div className="ml-4">
                  <ICD10Search />
               </div>
            </div>
         </div>
      </>
   );
}
