export const gamesColumnDefs = [
  { headerName: "Id", field: "game_id" },
  { headerName: "Game", field: "game_name" },
  { headerName: "publisher", field: "fk_publ_id" },
];

export const publishersColumnDefs = [
  { headerName: "Id", field: "publ_id" },
  { headerName: "Name", field: "publ_name" },
  { headerName: "City", field: "city" },
];
