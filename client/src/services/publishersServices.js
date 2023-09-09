import axios from "axios";

export const publisherColums = [
  { headerName: "Id", field: "publ_id" },
  { headerName: "Name", field: "publ_name" },
  { headerName: "City", field: "city" },
];
export async function checkPublishers() {
  const { data } = await axios.get(
    "http://localhost:5000/api/publishers/check"
  );
  return data.count;
}
export const publishersDatasource = {
  async getRows(params) {
    const { data } = await axios.get(`http://localhost:5000/api/publishers`);

    params.successCallback(data);
  },
};
