import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddIcon from "@material-ui/icons/Add";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FilterListIcon from "@material-ui/icons/FilterList";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import IconButton from "@material-ui/core/IconButton";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { format } from "date-fns";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  service: {
    fontWeight: 300,
  },
  button: {
    color: "#fff",
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const createData = (
  name,
  date,
  service,
  features,
  complexity,
  platforms,
  users,
  total,
  search
) => ({
  name,
  date,
  service,
  features,
  complexity,
  platforms,
  users,
  total,
  search,
});

const platformOptions = ["Web", "iOS", "Android"];
const featureOptions = [
  "Photo/Video",
  "GPS",
  "File Transfer",
  "User/Authentication",
  "Biometrics",
  "Push Notifications",
];

const index = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [websiteChecked, setWebsiteChecked] = useState(false);
  const [iOSChecked, setiOSChecked] = useState(false);
  const [androidChecked, setAndroidChecked] = useState(false);
  const [softwareChecked, setSoftwareChecked] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [rows, setRows] = useState([
    createData(
      "Denny",
      "8-16-20",
      "Website",
      "E-Commerce",
      "N/A",
      "N/A",
      "N/A",
      "$1500",
      true
    ),
    createData(
      "Bill",
      "7-16-20",
      "Custom Software",
      "GPS, Push Notifications, Users/Authentication, FileTransfer",
      "Medium",
      "Web Application",
      "0-10",
      "$1600",
      true
    ),
    createData(
      "Steve Jobs",
      "7-16-20",
      "Custom Software",
      "Photo/Video, FileTransfer, Users/Authentication, ",
      "Low",
      "Web Application",
      "10-100",
      "$1600",
      true
    ),
  ]);
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [total, setTotal] = useState(0);
  const [service, setService] = useState("");
  const [complexity, setComplexity] = useState("");
  const [users, setUsers] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [search, setSearch] = useState("");

  const addProject = () => {
    setRows((prev) => [
      ...prev,
      createData(
        name,
        format(date, "MM/dd/yy"),
        service,
        features.join(","),
        complexity,
        platforms.join(","),
        users,
        total
      ),
    ]);
    setDialogOpen(false);
    setName("");
    setDate("");
    setTotal(0);
    setService("");
    setComplexity("");
    setUsers("");
    setPlatforms([]);
    setFeatures([]);
  };

  // const handleSearch = (evt) => {
  //   setSearch(evt.target.value);
  //   const rowData = rows.map((row) => Object.values(row).filter(option=>));
  // };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container direction="column">
        <Grid item style={{ marginTop: "2em", marginLeft: "5em" }}>
          <Typography variant="h1">Projects</Typography>
        </Grid>
        <Grid item>
          <TextField
            value={search}
            // onChange={handleSearch}
            style={{ width: "35em", marginLeft: "5em" }}
            placeholder="Search project details or create a new entry."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" style={{ cursor: "pointer" }}>
                  <IconButton onClick={() => setDialogOpen(true)}>
                    <AddIcon color="primary" style={{ fontSize: 30 }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item style={{ marginLeft: "5em", marginTop: "2em" }}>
          <FormGroup row>
            <FormControlLabel
              style={{ marginRight: "3em" }}
              control={
                <Switch
                  checked={websiteChecked}
                  color="primary"
                  onChange={() => setWebsiteChecked((prev) => !prev)}
                />
              }
              label="Websites"
              labelPlacement="start"
            />
            <FormControlLabel
              style={{ marginRight: "3em" }}
              control={
                <Switch
                  checked={iOSChecked}
                  color="primary"
                  onChange={() => setiOSChecked((prev) => !prev)}
                />
              }
              label="iOS Apps"
              labelPlacement="start"
            />
            <FormControlLabel
              style={{ marginRight: "3em" }}
              control={
                <Switch
                  checked={androidChecked}
                  color="primary"
                  onChange={() => setAndroidChecked((prev) => !prev)}
                />
              }
              label="Android Apps"
              labelPlacement="start"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={softwareChecked}
                  color="primary"
                  onChange={() => setSoftwareChecked((prev) => !prev)}
                />
              }
              label="Custom Software"
              labelPlacement="start"
            />
          </FormGroup>
        </Grid>
        <Grid item container justify="flex-end" style={{ marginTop: "5em" }}>
          <Grid item style={{ marginRight: 75 }}>
            <FilterListIcon color="secondary" style={{ fontSize: 50 }} />
          </Grid>
        </Grid>
        <Grid item style={{ marginBottom: "15em" }}>
          <TableContainer component={Paper} elevation={0}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Service</TableCell>
                  <TableCell align="center">Features</TableCell>
                  <TableCell align="center">Complexity</TableCell>
                  <TableCell align="center">Platforms</TableCell>
                  <TableCell align="center">Users</TableCell>
                  <TableCell align="center">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.service}</TableCell>
                    <TableCell align="center" style={{ maxWidth: "5em" }}>
                      {row.features}
                    </TableCell>
                    <TableCell align="center">{row.complexity}</TableCell>
                    <TableCell align="center">{row.platforms}</TableCell>
                    <TableCell align="center">{row.users}</TableCell>
                    <TableCell align="center">{row.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          fullWidth
          maxWidth="md"
        >
          <Grid container justify="center">
            <Grid item>
              <Typography variant="h1">Add a new project</Typography>
            </Grid>
            <DialogContent>
              <Grid container justify="space-between">
                <Grid item>
                  <Grid container direction="column" sm>
                    <Grid item>
                      <TextField
                        fullWidth
                        label="Name"
                        id="name"
                        value={name}
                        onChange={(evt) => setName(evt.target.value)}
                      />
                    </Grid>
                    <Grid
                      item
                      container
                      direction="column"
                      style={{ marginTop: "5em" }}
                    >
                      <Grid item>
                        <Typography variant="h4">Service</Typography>
                      </Grid>
                      <Grid item>
                        <RadioGroup
                          aria-label="service"
                          name="service"
                          value={service}
                          onChange={(evt) => setService(evt.target.value)}
                        >
                          <FormControlLabel
                            classes={{ label: classes.service }}
                            value="Website"
                            label="website"
                            control={<Radio />}
                          />
                          <FormControlLabel
                            classes={{ label: classes.service }}
                            value="Mobile App"
                            label="Mobile App"
                            control={<Radio />}
                          />
                          <FormControlLabel
                            classes={{ label: classes.service }}
                            value="Custom Software"
                            label="Custom Software"
                            control={<Radio />}
                          />
                        </RadioGroup>
                      </Grid>
                      <Grid item style={{ marginTop: "5em" }}>
                        <Select
                          style={{ width: "12em" }}
                          displayEmpty
                          renderValue={
                            platforms.length ? undefined : () => "Platforms"
                          }
                          labelId="platforms"
                          id="platforms"
                          multiple
                          value={platforms}
                          onChange={(evt) => setPlatforms(evt.target.value)}
                        >
                          {platformOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column" sm>
                    <Grid item style={{ marginTop: 16 }}>
                      <KeyboardDatePicker
                        format="MM/dd/yyyy"
                        value={date}
                        onChange={(newDate) => setDate(newDate)}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    style={{ marginTop: "5em" }}
                  >
                    <Grid item>
                      <Typography variant="h4">Complexity</Typography>
                    </Grid>
                    <Grid item>
                      <RadioGroup
                        aria-label="complexity"
                        name="complexity"
                        value={complexity}
                        onChange={(evt) => setComplexity(evt.target.value)}
                      >
                        <FormControlLabel
                          classes={{ label: classes.service }}
                          value="Low"
                          label="Low"
                          control={<Radio />}
                        />
                        <FormControlLabel
                          classes={{ label: classes.service }}
                          value="Medium"
                          label="Medium"
                          control={<Radio />}
                        />
                        <FormControlLabel
                          classes={{ label: classes.service }}
                          value="High"
                          label="High"
                          control={<Radio />}
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container direction="column" sm>
                    <Grid item>
                      <TextField
                        value={total}
                        id="total"
                        label="Total"
                        onChange={(evt) => setTotal(evt.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      container
                      direction="column"
                      style={{ marginTop: "5em" }}
                    >
                      <Grid item>
                        <Typography variant="h4">Users</Typography>
                      </Grid>
                      <Grid item>
                        <RadioGroup
                          aria-label="users"
                          name="users"
                          value={users}
                          onChange={(evt) => setUsers(evt.target.value)}
                        >
                          <FormControlLabel
                            classes={{ label: classes.service }}
                            value="0-10"
                            label="0-10"
                            control={<Radio />}
                          />
                          <FormControlLabel
                            classes={{ label: classes.service }}
                            value="10-100"
                            label="10-100"
                            control={<Radio />}
                          />
                          <FormControlLabel
                            classes={{ label: classes.service }}
                            value="100+"
                            label="100+"
                            control={<Radio />}
                          />
                        </RadioGroup>
                      </Grid>
                      <Grid item style={{ marginTop: "5em" }}>
                        <Select
                          MenuProps={{ style: { zIndex: 1302 } }}
                          style={{ width: "12em" }}
                          displayEmpty
                          renderValue={
                            features.length ? undefined : () => "Features"
                          }
                          labelId="features"
                          id="features"
                          multiple
                          value={features}
                          onChange={(evt) => setFeatures(evt.target.value)}
                        >
                          {featureOptions.map((feature) => (
                            <MenuItem key={feature} value={feature}>
                              {feature}
                            </MenuItem>
                          ))}
                        </Select>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justify="center" style={{ marginTop: "3em" }}>
                <Grid item>
                  <Button
                    color="primary"
                    style={{ fontWeight: 300 }}
                    onClick={() => setDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.button}
                    variant="contained"
                    onClick={addProject}
                  >
                    Add Project +
                  </Button>
                </Grid>
              </Grid>
            </DialogContent>
          </Grid>
        </Dialog>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default index;
