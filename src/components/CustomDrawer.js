import {
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import img_project from "@/public/Projects.svg";
import img_usage from "@/public/Chart2.svg";
import img_bill from "@/public/Bill.svg";
import img_account from "@/public/Profile.svg";

const CustomDrawer = ({ id = 0 }) => {
  useEffect(() => {
    console.log("ID", id);
  }, []);

  return (
    <>
      <div className="custom-nav">
        <Toolbar sx={{ height: "116px" }} />
        <Divider />
        <List>
          {["Project", "Usage", "Billing", "Account"].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{ padding: "0px" }}
              className={index == id ? "li-active" : ""}
            >
              <Link href={"/" + text} style={{ width: "100%" }}>
                <ListItemButton sx={{ padding: "20px 32px" }}>
                  <ListItemIcon>
                    {index % 4 === 0 && (
                      <Image
                        src={img_project}
                        width={32}
                        height={32}
                        alt="image"
                      ></Image>
                    )}
                    {index % 4 === 1 && (
                      <Image
                        src={img_usage}
                        width={32}
                        height={32}
                        alt="image"
                      ></Image>
                    )}
                    {index % 4 === 2 && (
                      <Image
                        src={img_bill}
                        width={32}
                        height={32}
                        alt="image"
                      ></Image>
                    )}
                    {index % 4 === 3 && (
                      <Image
                        src={img_account}
                        width={32}
                        height={32}
                        alt="image"
                      ></Image>
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ fontSize: "20px", color: "white" }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
    </>
  );
};

export default CustomDrawer;
