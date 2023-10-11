import { signIn, signOut, useSession } from "next-auth/react";
import type { Item } from "@prisma/client";
import { api } from "~/utils/api";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  type MaterialReactTableProps,
  type MRT_Cell,
  type MRT_ColumnDef,
  type MRT_Row,
} from "material-react-table";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import {
  useFindManyCategory,
  useFindManyFaction,
  useFindManyItem,
  useFindManyRarity,
  useFindManyType,
  useMutateItem,
} from "~/lib/hooks";

const AdminItems = () => {
  const { data: initialTableData } = useFindManyItem({
    include: { type: true, category: true, faction: true, rarity: true },
  });
  const { data: types } = useFindManyType();
  const { data: categories } = useFindManyCategory();
  const { data: factions } = useFindManyFaction();
  const { data: rarities } = useFindManyRarity();
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState<Item[]>(initialTableData ?? []);
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});
  const { updateItem } = useMutateItem();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (initialTableData) {
      setTableData(initialTableData);
      setIsLoading(false);
    }
  }, [initialTableData]);

  const handleCreateNewRow = (values: Item) => {
    setTableData([...tableData, values]);
  };

  const handleSaveRowEdits: MaterialReactTableProps<Item>["onEditingRowSave"] =
    async ({
      exitEditingMode,
      row,
      values,
    }: {
      exitEditingMode: () => void;
      row: MRT_Row<Item>;
      values: Item;
    }) => {
      if (!Object.keys(validationErrors).length) {
        tableData[row.index] = values;
        //send/receive api updates here, then refetch or update local table data for re-render
        await updateItem({ where: { id: values.id }, data: values });
        setTableData([...tableData]);
        exitEditingMode(); //required to exit editing mode and close modal
      }
    };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row: MRT_Row<Item>) => {
      if (!confirm(`Are you sure you want to delete ${row.original.name}`)) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData],
  );

  const getCommonEditTextFieldProps = useCallback(
    (
      cell: MRT_Cell<Item>,
    ): MRT_ColumnDef<Item>["muiTableBodyCellEditTextFieldProps"] => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          let isValid;
          if (cell.column.id === "email") {
            isValid = validateEmail(event.target.value);
          } else if (cell.column.id === "age") {
            isValid = validateAge(+event.target.value);
          } else {
            isValid = validateRequired(event.target.value);
          }
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors],
  );

  const columns = useMemo<MRT_ColumnDef<Item>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: "name",
        header: "Name",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "typeId",
        header: "Type",
        size: 80,
        muiTableBodyCellEditTextFieldProps: {
          select: true, //change to select for a dropdown
          children: types?.map((child) => (
            <MenuItem key={child.id} value={child.id}>
              {child.name}
            </MenuItem>
          )),
        },
      },
      {
        accessorKey: "categoryId",
        header: "Category",
        muiTableBodyCellEditTextFieldProps: {
          select: true, //change to select for a dropdown
          children: categories?.map((child) => (
            <MenuItem key={child.id} value={child.id}>
              {child.name}
            </MenuItem>
          )),
        },
      },
      {
        accessorKey: "factionId",
        header: "Faction",
        muiTableBodyCellEditTextFieldProps: {
          select: true, //change to select for a dropdown
          children: factions?.map((child) => (
            <MenuItem key={child.id} value={child.id}>
              {child.name}
            </MenuItem>
          )),
        },
      },
      {
        accessorKey: "rarityId",
        header: "Rarity",
        muiTableBodyCellEditTextFieldProps: {
          select: true, //change to select for a dropdown
          children: rarities?.map((child) => (
            <MenuItem key={child.id} value={child.id}>
              {child.name}
            </MenuItem>
          )),
        },
      },
      {
        accessorKey: "level",
        header: "Level",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: "active",
        header: "Active",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
    ],
    [getCommonEditTextFieldProps, types, categories, factions, rarities],
  );

  return (
    <>
      <MaterialReactTable
        displayColumnDefOptions={{
          "mrt-row-actions": {
            muiTableHeadCellProps: {
              align: "center",
            },
            size: 120,
          },
        }}
        columns={columns}
        data={tableData}
        state={{ isLoading: isLoading }}
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button
            color="secondary"
            onClick={() => setCreateModalOpen(true)}
            variant="contained"
          >
            Create New
          </Button>
        )}
      />
      <CreateNewModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      />
    </>
  );
};

interface CreateModalProps {
  columns: MRT_ColumnDef<Item>[];
  onClose: () => void;
  onSubmit: (values: Item) => void;
  open: boolean;
}

//example of creating a mui dialog modal for creating new rows
export const CreateNewModal = ({
  open,
  columns,
  onClose,
  onSubmit,
}: CreateModalProps) => {
  const [values, setValues] = useState<Item>(() =>
    columns.reduce((item, column) => {
      //FIXME: Set default values for each column here
      // item[column.accessorKey as keyof Item] = '';
      return item;
    }, {} as Item),
  );

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "1.5rem",
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem" }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          Create New
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const validateRequired = (value: string) => !!value.length;
const validateEmail = (email: string) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
const validateAge = (age: number) => age >= 18 && age <= 50;

export default AdminItems;
