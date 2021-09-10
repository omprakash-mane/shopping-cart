import React, { useContext } from "react";
import "./styles.css";
import { ProductOrderContext } from "../../context/ProductOrderProvider";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
  { field: "id", headerName: "ID", width: 250, editable: false },
  {
    field: "price",
    headerName: "Price",
    width: 250,
    editable: false,
  },
  {
    field: "category",
    headerName: "Category",
    width: 250,
    editable: false,
  },
  {
    field: "qty",
    headerName: "Quantity",
    width: 250,
    editable: true,
  },
];

const Checkout = () => {
  const [totalCartItems] = useContext(ProductOrderContext);

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={totalCartItems}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};
export default Checkout;
