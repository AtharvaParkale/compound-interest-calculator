import {
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Slider,
  Stack,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DonutChart from "react-donut-chart";
import "./Calculator.css";
import { useSelector, useDispatch } from "react-redux";
import { calculateActions } from "../../store/calculate-slice";

function Calculator() {
  const dispatch = useDispatch();
  const prinAmt = useSelector((state) => state.calculate.principleAmount);
  const roi = useSelector((state) => state.calculate.rateOfInterest);
  const tmPeriod = useSelector((state) => state.calculate.timePeriod);
  const totInt = useSelector((state) => state.calculate.totalInterest);
  const totAmt = useSelector((state) => state.calculate.totalAmount);
  const n = useSelector((state) => state.calculate.n);
  const pPer = useSelector((state) => state.calculate.pPer);
  const iPer = useSelector((state) => state.calculate.iPer);

  const handleChange = (principalAmt, rateOfInterest, timePeriod, n) => {
    dispatch(
      calculateActions.setValues({
        principleAmount: principalAmt,
        rateOfInterest: rateOfInterest,
        timePeriod: timePeriod,
        n: n,
      })
    );
  };

  return (
    <Stack
      sx={{
        // border: "2px solid black",
        width: "100%",
        height: { xs: "120vh", sm: "100vh" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          // border: "2px solid black",
          width: { xs: "90%", sm: "69%" },
          height: "7vh",
          marginBottom: "2vh",
          color: "#44475b",
        }}
      >
        <h2>Compound Interest Calculator</h2>
      </Box>
      <Stack
        sx={{
          // border: "2px solid black",
          width: { xs: "90%", sm: "69%" },
          height: { xs: "100vh", sm: "80vh" },
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          boxShadow: "0 1px 10px 0 rgba(0,0,0,.1);",
        }}
      >
        <Box
          sx={{
            // border: "2px solid red",
            width: { xs: "100%", sm: "50%" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              // border: "2px solid black",
              width: "100%",
              height: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box className="slider-container">
              <Box className="slider-label">
                <Box className="sld-label">Principal Amount</Box>
              </Box>
              <Box className="slider-holder">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">Rs</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                  sx={{
                    width: "100%",
                  }}
                  defaultValue={100000}
                  type="number"
                  onChange={(e) => {
                    handleChange(e.target.value, roi, tmPeriod, n);
                  }}
                />
              </Box>
            </Box>
            <Box className="slider-container">
              <Box className="slider-label">
                <Box className="sld-label">Rate of Interest (p.a)</Box>
                <Box className="sld-input-holder">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={roi}
                    onChange={(e) => {
                      // console.log(e.target.value);
                      handleChange(prinAmt, e.target.value, tmPeriod, n);
                    }}
                  />
                  <p>%</p>
                </Box>
              </Box>
              <Box className="slider-holder">
                <Slider
                  defaultValue={6}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  className="slider-body"
                  min={0}
                  max={100}
                  value={roi}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    handleChange(prinAmt, e.target.value, tmPeriod, n);
                  }}
                />
              </Box>
            </Box>
            <Box className="slider-container">
              <Box className="slider-label">
                <Box className="sld-label">Time Period </Box>

                <Box className="sld-input-holder">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={tmPeriod}
                    onChange={(e) => {
                      // console.log(e.target.value);
                      handleChange(prinAmt, roi, e.target.value, n);
                    }}
                  />
                  <p>Yrs</p>
                </Box>
              </Box>
              <Box className="slider-holder">
                <Slider
                  defaultValue={5}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  className="slider-body"
                  min={0}
                  max={100}
                  value={tmPeriod}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    handleChange(prinAmt, roi, e.target.value, n);
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box className="time-frame-container">
            <Box className="inner-time-frame-container">
              <p>Compounding frequency</p>
              <select
                className="select-tag"
                onChange={(e) => {
                  handleChange(prinAmt, roi, tmPeriod, e.target.value);
                }}
              >
                <option value={1}>Annually</option>
                <option value={2}>Semi Annually</option>
                <option value={4}>Quaterly</option>
                <option value={12}>Monthly</option>
                <option value={24}>Semi Monthly</option>
                <option value={52}>Weekly</option>
                <option value={26}>Bi Weekly</option>
                <option value={365}>Daily</option>
              </select>
            </Box>
          </Box>

          <Box className="display-container">
            <Box className="display-tags">
              <p>Principal amount</p>
              <span>Rs {prinAmt}</span>
            </Box>
            <Box className="display-tags">
              <p>Total interest</p>
              <span>Rs {totInt}</span>
            </Box>
            <Box className="display-tags">
              <p>Total amount</p>
              <span>Rs {totAmt}</span>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            // border: "2px solid blue",
            width: { xs: "100%", sm: "50%" },
            height: { xs: "40%", sm: "90%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DonutChart
            className="donut-style"
            data={[
              {
                label: "Total Interest (%)",
                value: iPer,
              },
              {
                label: "Principal Amount (%)",
                value: pPer,
              },
            ]}
            colors={["#a3c9f6", "#0b70e7"]}
            outerRadius={0.8}
            innerRadius={0.5}
            interactive={false}
            strokeColor="false"
          />
        </Box>
      </Stack>
    </Stack>
  );
}

export default Calculator;
