import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { Button, Grid, Input } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ContentItem from "@/src/components/ContentItem";
import ContentBox from "@/src/components/ContentBox";

export default function Contents() {
  const init = [
    "hereis0.topdev@gmail.com",
    "hereis1.topdev@gmail.com",
    "hereis2.topdev@gmail.com",
    "hereis3.topdev@gmail.com",
    "hereis4.topdev@gmail.com",
    "hereis.topdev@gmail.com",
    "hereis.topdev@gmail.com",
    "hereis.topdev@gmail.com",
    "hereis.topdev@gmail.com",
    "hereis.topdev@gmail.com",
    "hereis13.topdev@gmail.com",
  ];

  const [count, setCount] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [contents, setContents] = React.useState([]);
  const [alldata, setAlldata] = React.useState(init);
  const [mail, setMail] = React.useState("");
  const [currentcontent, setCurrentcontent] = React.useState(-1);

  const tempArr = [];
  const getPagedata = (id = 0) => {
    setContents(alldata.slice(id * 10, id * 10 + 10));
  };
  const handleChangeMail = (e) => setMail(e.target.value);

  React.useEffect(() => {
    getPagedata(page - 1);
  }, [page, alldata]);

  React.useEffect(() => {
    const pageNum = alldata.length / 10;
    setCount(Math.ceil(pageNum));
  }, [alldata]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const removeItem = (id) => {
    setAlldata(alldata.filter((temp, index) => index !== id));
  };

  return (
    <>
      {currentcontent !== -1 ? (
        <ContentBox
          data={alldata[currentcontent]}
          setCurrent={setCurrentcontent}
          removeItem={removeItem}
          contentID={currentcontent}
          setCurrentcontent={setCurrentcontent}
        />
      ) : (
        <div>
          <div className="form-group">
            <Input
              className="text-input"
              placeholder="www.example@gmail.com"
              value={mail}
              onChange={handleChangeMail}
            />
            <Button
              variant="contained"
              className="btn-primary"
              onClick={() => {
                if (!mail) return;
                setAlldata([...alldata, mail]);
                setMail("");
              }}
            >
              <AddIcon />
              Add
            </Button>
          </div>
          {contents.map((item, index) => (
            <ContentItem
              contentID={index + (page - 1) * 10}
              content={item}
              key={index}
              setCurrent={setCurrentcontent}
              removeItem={removeItem}
            />
          ))}
          <Stack spacing={2} sx={{ display: "flex", alignItems: "center" }}>
            <Pagination
              count={count}
              page={page}
              onChange={handleChange}
              className="custom-pagination"
            />
          </Stack>
        </div>
      )}
    </>
  );
}
