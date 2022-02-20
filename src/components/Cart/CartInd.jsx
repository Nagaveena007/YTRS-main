/* import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > span": {
        margin: theme.spacing(2),
      },
    },
  })
);

export default function CartInd() {
  const classes = useStyles();
  const menuItems = [
    { label: "Home", path: "/home", icon: "home" },
    { label: "Accounts", path: "/accounts", icon: "account_circle" },
    { label: "Organizations", path: "/organizations", icon: "settings" },
  ];
  return (
    <div className={classes.root}>
      {menuItems.map(({ label, icon }) => {
        return (
          <span key={label}>
            {label} <Icon>{icon}</Icon>
          </span>
        );
      })}
      <br />
      <Icon>add_circle</Icon>
      <Icon color="primary">add_circle</Icon>
      <Icon color="secondary">add_circle</Icon>
      <Icon style={{ color: green[500] }}>add_circle</Icon>
      <Icon fontSize="small">add_circle</Icon>
      <Icon style={{ fontSize: 30 }}>add_circle</Icon>
    </div>
  );
}
 */
