import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import flagImg from "@/src/assets/image/1.png";
import { Button } from "@mui/material";
import MessageBox from "@/src/components/MessageBox";

function createData(country, ip, detail, date, time) {
  return { country, ip, detail, date, time };
}

const rows = [
  createData(
    "1",
    "192.091.111",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...",
    "Feb,02,2021",
    "09:20 AM"
  ),
  createData(
    "1",
    "192.091.111",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...",
    "Feb,02,2021",
    "09:20 AM"
  ),
  createData(
    "1",
    "192.091.111",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...",
    "Feb,02,2021",
    "09:20 AM"
  ),
  createData(
    "1",
    "192.091.111",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...",
    "Feb,02,2021",
    "09:20 AM"
  ),
  createData(
    "1",
    "192.091.111",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...",
    "Feb,02,2021",
    "09:20 AM"
  ),
  createData(
    "1",
    "192.091.111",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...",
    "Feb,02,2021",
    "09:20 AM"
  ),
  createData(
    "1",
    "192.091.111",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...",
    "Feb,02,2021",
    "09:20 AM"
  ),
];

export default function Messages() {
  const [messagebox, setMessagebox] = React.useState(-1);
  return (
    <>
      {messagebox == -1 ? (
        <TableContainer>
          <Table className="custom-table" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Country</TableCell>
                <TableCell>IP Address</TableCell>
                <TableCell className="hidden">Details</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  onClick={() => setMessagebox(index)}
                  key={index}
                  sx={{ cursor: "pointer" }}
                  className="custom-btn"
                >
                  <TableCell align="center" component="th" scope="row">
                    <Image src={flagImg} width={32} height={20} alt="flagImg" />
                  </TableCell>
                  <TableCell>{row.ip}</TableCell>
                  <TableCell className="hidden">{row.detail}</TableCell>
                  <TableCell>
                    {row.date}
                    <br />
                    <p>{row.time}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <MessageBox setMessagebox={setMessagebox} />
      )}
    </>
  );
}
