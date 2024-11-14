// const CustomPagination = ({
//   pagination,
//   getTableData,
//   setItemsPerPage,
//   tableData,
  
// }) => {
//   return (
//     <div className="pagination-outer flex items-center justify-between shadow-common-shadow rounded-xl py-3 px-2 ">
//       <div>
//         <span className="text-grey-text">Items per page</span>
//         <select
//           onChange={(e) => setItemsPerPage(e.target.value)}
//           className="mx-3 border-solid border-2 border-[#E5F5E3] p-2 focus-none outline-none rounded-md"
//         >
//           <option value="10">10</option>
//           <option value="15">15</option>
//           <option value="30">30</option>
//           <option value="50">50</option>
//         </select>
//         <span className="text-grey-text">
//           {pagination?.current_page} - {tableData?.length} of{" "}
//           {pagination?.totalRecords}
//         </span>
//       </div>
//       <div className="flex items-center">
//         <button
//           disabled={pagination?.current_page === 1}
//           onClick={() => getTableData("prev")}
//           className={
//             pagination?.current_page === 1
//               ? "text-grey-text text-md flex items-center"
//               : "text-[#000] text-md flex items-center"
//           }
//         >
//           {" "}
//           <i className="fa fa-angle-left me-1 text-xl"></i> Previous
//         </button>
//         <span className="text-grey-text px-8">
//           {pagination?.current_page} of {pagination?.total_pages}
//         </span>
//         <button
//           disabled={pagination?.current_page === pagination?.total_pages}
//           onClick={() => getTableData("next")}
//           className={
//             pagination?.current_page === pagination?.total_pages
//               ? "text-grey-text text-md flex items-center"
//               : "text-[#000] text-md flex items-center"
//           }
//         >
//           Next
//           <i className="fa fa-angle-right ms-1 text-xl"></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomPagination;
